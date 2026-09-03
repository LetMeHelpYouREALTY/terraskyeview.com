'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, User, Tag, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import RealScoutSearch from '@/app/components/realscout-search'

const categories = [
  'All Posts',
  'Home Buying Tips',
  'Las Vegas Market',
  'Neighborhood Guides',
  'Design & Style',
  'Investment Advice',
]

const blogPosts = [
  {
    id: 1,
    title: 'Should I Use a Realtor to Buy a Home in a Planned Community?',
    excerpt:
      'Discover why Dr. Jan Duffy is the preferred buyer\'s agent at Skyeview. Get the best price, expert negotiation, and $5,000 closing cost assistance—at NO COST to you!',
    author: 'Dr. Jan Duffy',
    date: 'February 25, 2025',
    category: 'Home Buying Tips',
    readTime: '8 min read',
    featured: true,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&q=80',
    link: '/blog/should-i-use-realtor-planned-community',
  },
  {
    id: 2,
    title: 'What Are Closing Costs? Complete Homebuyer Guide',
    excerpt:
      'Understand closing costs and how to reduce them. Learn how Dr. Jan Duffy helps clients access up to $5,000 in closing cost assistance through preferred lenders.',
    author: 'Dr. Jan Duffy',
    date: 'January 20, 2025',
    category: 'Home Buying Tips',
    readTime: '9 min read',
    featured: true,
    image: 'https://images.unsplash.com/photo-1554224311-beee460c201a?w=800&h=600&fit=crop&q=80',
    link: '/blog/what-are-closing-costs',
  },
  {
    id: 3,
    title: 'How We\'re Redefining the Homebuying Experience at Skyeview',
    excerpt:
      'Say goodbye to stress and bidding wars. Discover the modern, streamlined approach to buying new construction at Skyeview at Skye Canyon with Dr. Jan Duffy.',
    author: 'Dr. Jan Duffy',
    date: 'January 15, 2025',
    category: 'Home Buying Tips',
    readTime: '7 min read',
    featured: true,
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop&q=80',
    link: '/blog/redefining-homebuying-experience',
  },
  {
    id: 4,
    title: 'Why Skye Canyon is Las Vegas\' Hottest Master-Planned Community',
    excerpt:
      'Discover what makes Skye Canyon stand out from other Las Vegas communities. From top-rated schools to resort-style amenities, find out why families are choosing this northwest neighborhood.',
    author: 'Dr. Jan Duffy',
    date: 'January 10, 2025',
    category: 'Neighborhood Guides',
    readTime: '7 min read',
    featured: false,
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop&q=80',
  },
  {
    id: 5,
    title: 'New Home vs. Resale: Making the Right Choice for Your Family',
    excerpt:
      'Weigh the pros and cons of buying new construction versus an existing home. Learn about warranties, customization options, and long-term value.',
    author: 'Dr. Jan Duffy',
    date: 'December 20, 2024',
    category: 'Home Buying Tips',
    readTime: '5 min read',
    featured: false,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&q=80',
  },
  {
    id: 6,
    title: 'Investment Opportunities in Las Vegas Real Estate',
    excerpt:
      'Discover why Las Vegas continues to be a strong market for real estate investment. Learn about rental yields, appreciation trends, and emerging neighborhoods.',
    author: 'Dr. Jan Duffy',
    date: 'December 15, 2024',
    category: 'Investment Advice',
    readTime: '6 min read',
    featured: false,
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&h=600&fit=crop&q=80',
  },
  {
    id: 7,
    title: 'The Complete Guide to New Home Warranties',
    excerpt:
      'Understand what\'s covered under your new home warranty and how to maximize its benefits. Learn about structural warranties, appliance coverage, and claim processes.',
    author: 'Dr. Jan Duffy',
    date: 'December 10, 2024',
    category: 'Home Buying Tips',
    readTime: '7 min read',
    featured: false,
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop&q=80',
  },
  {
    id: 8,
    title: 'Best Schools in Northwest Las Vegas: A Parent\'s Guide',
    excerpt:
      'Explore the top-rated schools in Northwest Las Vegas, including Skye Canyon area. Get insights on academic performance, extracurriculars, and community involvement.',
    author: 'Dr. Jan Duffy',
    date: 'December 5, 2024',
    category: 'Neighborhood Guides',
    readTime: '9 min read',
    featured: false,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop&q=80',
  },
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Posts')
  const [featuredIndex, setFeaturedIndex] = useState(0)

  const filteredPosts = blogPosts.filter(
    (post) => selectedCategory === 'All Posts' || post.category === selectedCategory
  )

  const featuredPosts = blogPosts.filter((post) => post.featured)

  const nextFeatured = () => {
    setFeaturedIndex((prev) => (prev + 1) % featuredPosts.length)
  }

  const prevFeatured = () => {
    setFeaturedIndex((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-gray-900">Terra at Skyeview</span>
              <span className="text-xs text-gray-500 ml-2">by Century Communities</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-base font-semibold text-gray-900 hover:text-blue-600 transition">
                Home
              </Link>
              <Link href="/communities/skyeview" className="text-base font-semibold text-gray-900 hover:text-blue-600 transition">
                Available Homes
              </Link>
              <Link href="/about-dr-janet-duffy" className="text-base font-semibold text-gray-900 hover:text-blue-600 transition">
                About Dr. Jan
              </Link>
              <Link href="/special-offers" className="text-base font-semibold text-gray-900 hover:text-blue-600 transition">
                Special Offers
              </Link>
              <Link href="/blog" className="text-base font-semibold text-blue-600">
                Blog
              </Link>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                <a href="tel:702-919-7292">Call Dr. Jan</a>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              The Front Porch
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-4">
              Your Resource for Las Vegas Real Estate Insights
            </p>
            <p className="text-lg text-blue-100">
              Expert advice, market trends, and neighborhood guides from Dr. Jan Duffy
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Articles</h2>
            <div className="flex gap-2">
              <button
                onClick={prevFeatured}
                className="p-2 rounded-lg border border-gray-300 hover:bg-white transition"
                aria-label="Previous featured article"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextFeatured}
                className="p-2 rounded-lg border border-gray-300 hover:bg-white transition"
                aria-label="Next featured article"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img 
                  src={featuredPosts[featuredIndex].image} 
                  alt={featuredPosts[featuredIndex].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {featuredPosts[featuredIndex].category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {featuredPosts[featuredIndex].readTime}
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {featuredPosts[featuredIndex].title}
                </h3>

                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {featuredPosts[featuredIndex].excerpt}
                </p>

                <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{featuredPosts[featuredIndex].author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPosts[featuredIndex].date}</span>
                  </div>
                </div>

                <Link href={featuredPosts[featuredIndex].link || '/blog'}>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white w-fit">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {selectedCategory === 'All Posts' ? 'All Articles' : selectedCategory}
            </h2>
            <p className="text-gray-600 mt-2">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  <Link href={post.link || '/blog'}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Explore available homes at Skyeview at Skye Canyon or schedule a tour with Dr. Jan Duffy today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <a href="http://drjanduffy.realscout.com/" target="_blank" rel="noopener noreferrer">
                Search Available Homes
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
              <a href="tel:702-919-7292">
                Call: (702) 919-7292
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Advanced Property Search Widget */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-xl text-gray-700 mb-2">
              Search all available properties in Las Vegas
            </p>
            <p className="text-lg text-gray-600">
              Work with Dr. Jan Duffy to discover homes that match your lifestyle and budget
            </p>
          </div>
          <RealScoutSearch />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Terra Skyeview</h3>
              <p className="text-gray-400 text-sm mb-4">
                Your dream home in Las Vegas awaits.
              </p>
              <p className="text-gray-400 text-sm">
                <span className="text-white font-medium">Dr. Jan Duffy</span>
                <br />
                Your Local Real Estate Expert
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/communities/skyeview" className="text-gray-400 hover:text-white transition">
                    Available Homes
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Home Buying Tips</li>
                <li>Las Vegas Market</li>
                <li>Neighborhood Guides</li>
                <li>Design & Style</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>(702) 919-7292</li>
                <li>DrJanSells@TerraSkyeview.com</li>
                <li>8592 Vanhoy Creek Street<br />Las Vegas, NV 89166</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>
              &copy; 2025 Terra Skyeview | Homes By Dr. Jan Duffy S.0197614. All rights reserved. | Equal Housing Opportunity
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

