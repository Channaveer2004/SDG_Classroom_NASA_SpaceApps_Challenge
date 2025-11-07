"use client"
import { useState, useEffect } from 'react'
import { ArrowRight, ExternalLink, Globe } from 'lucide-react'

// Simulated data for SDGs and news (in a real application, this would come from an API)
const sdgs = [
  { id: 1, name: 'No Poverty', icon: '🚫💰', color: 'from-red-600 to-red-800', description: 'End poverty in all its forms everywhere' },
  { id: 2, name: 'Zero Hunger', icon: '🍽️', color: 'from-yellow-600 to-yellow-800', description: 'End hunger, achieve food security and improved nutrition' },
  { id: 3, name: 'Good Health and Well-being', icon: '🏥', color: 'from-green-600 to-green-800', description: 'Ensure healthy lives and promote well-being for all at all ages' },
  { id: 4, name: 'Quality Education', icon: '🎓', color: 'from-red-600 to-red-800', description: 'Ensure inclusive and equitable quality education for all' },
  { id: 5, name: 'Gender Equality', icon: '⚖️', color: 'from-orange-600 to-orange-800', description: 'Achieve gender equality and empower all women and girls' },
  { id: 6, name: 'Clean Water and Sanitation', icon: '💧', color: 'from-blue-600 to-blue-800', description: 'Ensure availability and sustainable management of water and sanitation for all' },
  // Add more SDGs as needed
]

const newsArticles = [
  {
    title: 'UN Report Shows Progress on SDGs, but Challenges Remain',
    source: 'United Nations',
    url: 'https://www.un.org/sustainabledevelopment/blog/2023/07/sdg-report-2023/',
    date: '2023-07-10',
  },
  {
    title: 'Private Sector Engagement Critical for Achieving SDGs',
    source: 'World Economic Forum',
    url: 'https://www.weforum.org/agenda/2023/06/private-sector-engagement-critical-for-achieving-sdgs/',
    date: '2023-06-22',
  },
  {
    title: 'Climate Change Threatens Progress on SDGs',
    source: 'IPCC',
    url: 'https://www.ipcc.ch/2023/03/20/climate-change-threatens-progress-on-sdgs/',
    date: '2023-03-20',
  },
  // Add more news articles as needed
]

export default function NewsPage() {
  const [currentSDG, setCurrentSDG] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSDG((prev) => (prev % sdgs.length) + 1)
    }, 2000) // Changed to 10 seconds
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-gradient-to-r from-gray-900 to-black px-4 py-10 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl">Sustainable Development Goals News</h1>
          <p className="text-base text-gray-300 sm:text-lg">
            Stay informed about the latest developments in global sustainability efforts
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">SDG Spotlight</h2>
          <div className={`rounded-3xl bg-gradient-to-br ${sdgs[currentSDG - 1].color} p-6 shadow-xl transition-all duration-500 ease-in-out sm:p-8`}>
            <div className="mb-6 flex flex-col items-center gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-4xl md:h-24 md:w-24 md:text-5xl">
                {sdgs[currentSDG - 1].icon}
              </div>
              <div className="max-w-2xl">
                <h3 className="text-2xl font-bold sm:text-3xl">{sdgs[currentSDG - 1].name}</h3>
                <p className="mt-2 text-base sm:text-lg">{sdgs[currentSDG - 1].description}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`https://sdgs.un.org/goals/goal${currentSDG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-opacity-90"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href={`https://unstats.un.org/sdgs/report/2023/goal-${currentSDG}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-black/30 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-black/50"
              >
                View Statistics <Globe className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">Latest SDG News</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsArticles.map((article, index) => (
              <div key={index} className="rounded-3xl bg-gray-900/80 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
                <h3 className="mb-2 text-lg font-semibold text-white sm:text-xl">{article.title}</h3>
                <p className="mb-4 text-sm text-gray-400">
                  {article.source} - {new Date(article.date).toLocaleDateString()}
                </p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-blue-400 transition hover:text-blue-300 sm:text-base"
                >
                  Read more <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">All SDGs</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {sdgs.map((sdg) => (
              <div key={sdg.id} className="rounded-2xl border border-white/10 bg-gray-900/70 p-4 text-center shadow-lg transition hover:border-blue-400/50">
                <span className="mb-3 block text-2xl sm:text-3xl">{sdg.icon}</span>
                <h3 className="text-sm font-semibold text-white sm:text-base">{sdg.name}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-8 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-300 mb-4">
            Stay informed and take action to support the Sustainable Development Goals.
          </p>
          <a
            href="https://sdgs.un.org/goals"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            Learn more about the SDGs
          </a>
        </div>
      </footer>
    </div>
  )
}