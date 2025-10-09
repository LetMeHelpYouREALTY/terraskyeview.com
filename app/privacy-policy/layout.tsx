import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Terra at Skyeview by Century Communities',
  description: 'Privacy Policy for Terra at Skyeview. Learn how we collect, use, and protect your personal information. Dr. Jan Duffy S.0197614.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

