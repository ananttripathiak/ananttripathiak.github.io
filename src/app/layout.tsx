import type { Metadata } from 'next'
import './globals.css'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Anant Tripathi — AI & ML Engineer',
  description:
    'Senior Data Scientist, ML Engineer & AI Engineer. Transforming data into intelligent solutions. 5+ years at Axtria building production ML & GenAI systems.',
  keywords: [
    'Anant Tripathi',
    'Data Scientist',
    'ML Engineer',
    'AI Engineer',
    'Marketing Mix Optimization',
    'LLMs',
    'RAG',
    'Python',
  ],
  openGraph: {
    title: 'Anant Tripathi — AI & ML Engineer',
    description: 'Transforming data into intelligence. 5+ years building production ML & AI at Axtria.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-t1 antialiased overflow-x-hidden">{children}</body>
    </html>
  )
}
