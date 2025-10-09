'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import PromptComponent from './components/prompt-component'
import ApiKeyError from './components/api-key-error'
import RateLimitDialog from './components/rate-limit-dialog'
import ErrorDialog from './components/error-dialog'
import { useApiValidation } from '../lib/hooks/useApiValidation'

export default function HomePage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [projects, setProjects] = useState<any[]>([])
  const [projectsLoaded, setProjectsLoaded] = useState(false)
  const [selectedProjectId, setSelectedProjectId] = useState('new')
  const [selectedChatId, setSelectedChatId] = useState('new')
  const [projectChats, setProjectChats] = useState<any[]>([])
  const [showRateLimitDialog, setShowRateLimitDialog] = useState(false)
  const [rateLimitInfo, setRateLimitInfo] = useState<{
    resetTime?: string
    remaining?: number
  }>({})
  const [showErrorDialog, setShowErrorDialog] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  // API validation on page load
  const { isValidating, showApiKeyError } = useApiValidation()

  // Load projects on page mount (only if API is valid)
  useEffect(() => {
    if (!isValidating && !showApiKeyError) {
      loadProjectsWithCache()
    }
  }, [isValidating, showApiKeyError])

  const loadProjectsWithCache = async () => {
    // First, try to load from sessionStorage for immediate display
    try {
      const cachedProjects = sessionStorage.getItem('projects')
      if (cachedProjects) {
        const parsedProjects = JSON.parse(cachedProjects)
        setProjects(parsedProjects)
        setProjectsLoaded(true)
      }
    } catch (err) {
      // Silently handle cache loading errors
    }

    // Then fetch fresh data in the background
    loadProjects()
  }

  const loadProjects = async () => {
    try {
      const response = await fetch('/api/projects')
      if (response.ok) {
        const data = await response.json()
        const projectsData = data.data || data || []
        setProjects(projectsData)
        setProjectsLoaded(true)

        // Store in sessionStorage for next time
        try {
          sessionStorage.setItem('projects', JSON.stringify(projectsData))
        } catch (err) {
          // Silently handle cache storage errors
        }
      } else if (response.status === 401) {
        const errorData = await response.json()
        if (errorData.error === 'API_KEY_MISSING') {
          // API key error is now handled by useApiValidation hook
          return
        }
      }
    } catch (err) {
      // Silently handle project loading errors
    } finally {
      // Mark as loaded even if there was an error
      setProjectsLoaded(true)
    }
  }

  const loadProjectChatsWithCache = async (projectId: string) => {
    // First, try to load from sessionStorage for immediate display
    try {
      const cachedChats = sessionStorage.getItem(`project-chats-${projectId}`)
      if (cachedChats) {
        const parsedChats = JSON.parse(cachedChats)
        setProjectChats(parsedChats)
      }
    } catch (err) {
      // Silently handle cache loading errors
    }

    // Then fetch fresh data in the background
    try {
      const response = await fetch(`/api/projects/${projectId}`)
      if (response.ok) {
        const data = await response.json()
        const chatsData = data.chats || []
        setProjectChats(chatsData)

        // Store in sessionStorage for next time
        try {
          sessionStorage.setItem(
            `project-chats-${projectId}`,
            JSON.stringify(chatsData),
          )
        } catch (err) {
          // Silently handle cache storage errors
        }
      }
    } catch (err) {
      // Silently handle project chats loading errors
    }
  }

  const handleProjectChange = async (newProjectId: string) => {
    if (newProjectId === 'new') {
      // Stay on homepage for new project
      setSelectedProjectId('new')
      setSelectedChatId('new')
      setProjectChats([])
    } else {
      // Redirect to the selected project page
      router.push(`/projects/${newProjectId}`)
    }
  }

  const handleChatChange = (newChatId: string) => {
    setSelectedChatId(newChatId)
  }

  const handleSubmit = async (
    prompt: string,
    settings: { modelId: string; imageGenerations: boolean; thinking: boolean },
    attachments?: { url: string; name?: string; type?: string }[],
  ) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: prompt,
          modelId: settings.modelId,
          imageGenerations: settings.imageGenerations,
          thinking: settings.thinking,
          ...(attachments && attachments.length > 0 && { attachments }),
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()

        // Check for API key error
        if (response.status === 401 && errorData.error === 'API_KEY_MISSING') {
          // API key error is now handled by useApiValidation hook
          return
        }

        // Check for rate limit error
        if (
          response.status === 429 &&
          errorData.error === 'RATE_LIMIT_EXCEEDED'
        ) {
          setRateLimitInfo({
            resetTime: errorData.resetTime,
            remaining: errorData.remaining,
          })
          setShowRateLimitDialog(true)
          return
        }

        setErrorMessage(errorData.error || 'Failed to generate app')
        setShowErrorDialog(true)
        return
      }

      const data = await response.json()

      // Redirect to the new chat
      if (data.id || data.chatId) {
        const newChatId = data.id || data.chatId
        const projectId = data.projectId || 'default' // Fallback project
        router.push(`/projects/${projectId}/chats/${newChatId}`)
        return
      }
    } catch (err) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Failed to generate app. Please try again.',
      )
      setShowErrorDialog(true)
    } finally {
      setIsLoading(false)
    }
  }

  // Show API key error page if needed
  if (showApiKeyError) {
    return <ApiKeyError />
  }

  return (
    <div className="relative min-h-dvh bg-background">
      {/* Special Offers Banner */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 py-3 px-4 text-center relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-sm font-semibold">
          <span>🎉 LIMITED TIME: Low Rates from 3.875% + Up to $5,000 Toward Closing!</span>
          <a href="/special-offers" className="underline hover:no-underline">
            View Offers →
          </a>
        </div>
      </div>

      {/* Homepage Welcome Message */}
      <div className="absolute inset-0 flex items-center justify-center pt-12">
        <div
          className="text-center px-4 sm:px-6 max-w-4xl mx-auto -translate-y-1/4"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 text-pretty">
            Terra Skyeview
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
            Discover your dream home in Las Vegas at Skyeview at Skye Canyon. 
            New construction homes from $479,990 in a master-planned community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="/communities/skyeview"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-base font-semibold transition-colors"
            >
              View Available Homes
            </a>
            <a
              href="/special-offers"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-6 py-3 rounded-lg text-base font-semibold transition-colors"
            >
              Special Offers
            </a>
            <a
              href="/communities/skyeview#contact"
              className="inline-flex items-center gap-2 border-2 border-foreground hover:bg-muted text-foreground px-6 py-3 rounded-lg text-base font-semibold transition-colors"
            >
              Schedule a Tour
            </a>
          </div>

          <div className="text-sm text-muted-foreground">
            <p>Your Local Expert: <span className="font-semibold text-foreground">Dr. Janet Duffy</span></p>
            <p className="mt-1">Call: <a href="tel:702-568-0333" className="text-blue-600 hover:underline">702.568.0333</a></p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                1
              </div>
              <p className="text-base font-bold text-gray-900">Get Pre-Qualified</p>
              <p className="text-sm text-gray-600">Determine your budget with loan pre-approval</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                2
              </div>
              <p className="text-base font-bold text-gray-900">Start Your Home Search</p>
              <p className="text-sm text-gray-600">Browse homes online or visit in person</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                3
              </div>
              <p className="text-base font-bold text-gray-900">Secure Your Home</p>
              <p className="text-sm text-gray-600">Complete form, pay deposit & sign contract</p>
            </div>
          </div>
        </div>
      </div>

      <PromptComponent
        onSubmit={handleSubmit}
        isLoading={isLoading}
        placeholder="Describe your app..."
        showDropdowns={projectsLoaded}
        projects={projects}
        projectChats={projectChats}
        currentProjectId={selectedProjectId}
        currentChatId={selectedChatId}
        onProjectChange={handleProjectChange}
        onChatChange={handleChatChange}
      />

      <RateLimitDialog
        isOpen={showRateLimitDialog}
        onClose={() => setShowRateLimitDialog(false)}
        resetTime={rateLimitInfo.resetTime}
        remaining={rateLimitInfo.remaining}
      />

      <ErrorDialog
        isOpen={showErrorDialog}
        onClose={() => setShowErrorDialog(false)}
        message={errorMessage}
      />
    </div>
  )
}
