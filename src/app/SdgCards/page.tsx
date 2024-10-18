'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Page() {
  const cards = [
    { 
      id: 1, 
      title: "No Poverty", 
      content: "End poverty in all its forms everywhere.\nEnsuring equal access to resources and opportunities for all.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Sustainable_Development_Goal_1.png/1200px-Sustainable_Development_Goal_1.png" 
    },
    { 
      id: 2, 
      title: "Zero Hunger", 
      content: "End hunger, achieve food security and improved nutrition.\nPromote sustainable agriculture and resilient food production systems.", 
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ybgz1OHr5KVQw72g3UbgCNiTV9AMnoODbw&s" 
    },
    { 
      id: 3, 
      title: "Good Health and Well-Being", 
      content: "Ensure healthy lives and promote well-being for all at all ages.\nUniversal health coverage and access to quality essential health services.", 
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Sustainable_Development_Goal_3.png" 
    },
    { 
      id: 4, 
      title: "Quality Education", 
      content: "Ensure inclusive and equitable quality education for all.\nPromote lifelong learning opportunities for everyone.", 
      imageUrl: "https://logowik.com/content/uploads/images/the-global-goals-quality-education7536.jpg" 
    },
    { 
      id: 5, 
      title: "Gender Equality", 
      content: "Achieve gender equality and empower all women and girls.\nEnd discrimination and violence against women and girls.", 
      imageUrl: "https://wmo.int/sites/default/files/styles/prose_1x/public/2023-03/E-WEB-Goal-05.png?itok=TXaIZCSt" 
    },
    { 
      id: 6, 
      title: "Clean Water and Sanitation", 
      content: "Ensure availability and sustainable management of water and sanitation.\nWater and sanitation for all, ensuring access for the most vulnerable.", 
      imageUrl: "https://ggiindia.in/wp-content/uploads/2020/06/goal6.png" 
    },
    { 
      id: 7, 
      title: "Affordable and Clean Energy", 
      content: "Ensure access to affordable, reliable, sustainable and modern energy.\nPromote renewable energy sources and improve energy efficiency.", 
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8TJwzrxplpeHh3U0p1h5jZnELaxylTW3u-g&s" 
    },
    { 
      id: 8, 
      title: "Decent Work and Economic Growth", 
      content: "Promote sustained, inclusive and sustainable economic growth.\nFull and productive employment and decent work for all.", 
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmveBB_ZENwm1fMHoLkelD_QenPOyefYAjJw&s" 
    },
    { 
      id: 9, 
      title: "Industry, Innovation and Infrastructure", 
      content: "Build resilient infrastructure, promote inclusive and sustainable industrialization.\nFoster innovation and support research and development.", 
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdbjz7b55tfkDnuf3dTveh5zWrrXKcSUV7Uw&s" 
    },
    { 
      id: 10, 
      title: "Reduced Inequality", 
      content: "Reduce inequality within and among countries.\nEnsure equal opportunities and promote social, economic, and political inclusion.", 
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Sustainable_Development_Goal_10ReducedInequalities.svg/1200px-Sustainable_Development_Goal_10ReducedInequalities.svg.png" 
    },
    { 
      id: 11, 
      title: "Sustainable Cities and Communities", 
      content: "Make cities and human settlements inclusive, safe, resilient and sustainable.\nAccess to safe and affordable housing and basic services.", 
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Sustainable_Development_Goal_11.png/1200px-Sustainable_Development_Goal_11.png" 
    },
    { 
      id: 12, 
      title: "Responsible Consumption and Production", 
      content: "Ensure sustainable consumption and production patterns.\nReduce waste generation through prevention, reduction, recycling, and reuse.", 
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Sustainable_Development_Goal_12.png" 
    },
    { 
      id: 13, 
      title: "Climate Action", 
      content: "Take urgent action to combat climate change and its impacts.\nIntegrate climate change measures into national policies and strategies.", 
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Sustainable_Development_Goal_13Climate.svg/1200px-Sustainable_Development_Goal_13Climate.svg.png" 
    },
    { 
      id: 14, 
      title: "Life Below Water", 
      content: "Conserve and sustainably use the oceans, seas and marine resources.\nPrevent and reduce marine pollution and protect marine ecosystems.", 
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/63/Sustainable_Development_Goal_14.png" 
    },
    { 
      id: 15, 
      title: "Life on Land", 
      content: "Protect, restore and promote sustainable use of terrestrial ecosystems.\nManage forests sustainably, combat desertification, and halt biodiversity loss.", 
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/18/Sustainable_Development_Goal_15.png" 
    },
    { 
      id: 16, 
      title: "Peace, Justice and Strong Institutions", 
      content: "Promote peaceful and inclusive societies for sustainable development.\nProvide access to justice for all and build effective, accountable institutions.", 
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Sustainable_Development_Goal_16.png/1200px-Sustainable_Development_Goal_16.png" 
    },
    { 
      id: 17, 
      title: "Partnerships for the Goals", 
      content: "Strengthen the means of implementation and revitalize the global partnership for sustainable development.\nEnhance international cooperation to facilitate access to science and technology.", 
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sustainable_Development_Goal_17Partnerships.svg/1200px-Sustainable_Development_Goal_17Partnerships.svg.png" 
    },
  ]

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-extrabold mb-12 text-center text-blue-300">Sustainable Development Goals</h1>
      <CardGrid cards={cards} />
    </div>
  )
}

// CardGrid Component
function CardGrid({ cards }: { cards: { id: number; title: string; content: string; imageUrl: string }[] }) {
  const [searchTerm, setSearchTerm] = useState('')

  // Filter cards based on the search term
  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <Input
        type="text"
        placeholder="Search cards..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-8 w-full p-4 border border-blue-600 rounded-lg shadow-md bg-gray-800 text-white focus:border-blue-400"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCards.map((card) => (
          <Link key={card.id} href={`/goal/${card.id}`}>
            <Card className="bg-gray-900 border border-blue-700 shadow-lg rounded-xl overflow-hidden transform transition hover:scale-105 hover:shadow-2xl">
              <CardHeader>
                <img 
                  src={card.imageUrl} 
                  alt={card.title} 
                  className="w-full h-72 object-cover" 
                />
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm">{card.content}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

// UI Components
function Input({ className, type = "text", ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type={type}
      className={`w-full p-3 border rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:outline-none ${className}`}
      {...props}
    />
  )
}

function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-xl bg-gray-900 shadow-lg hover:shadow-xl transition ${className}`}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`p-6 ${className}`} {...props} />
}

function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={`text-2xl font-semibold mt-4 mb-2 text-blue-300 ${className}`}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`p-4 ${className}`} {...props} />
}
