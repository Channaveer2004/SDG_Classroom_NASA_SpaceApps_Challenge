'use client'

import { useState } from 'react'


export default function Page() {
  const cards:any = [
    { 
      id: 1, 
      title: "No Poverty", 
      content: "End poverty in all its forms everywhere.\nEnsuring equal access to resources and opportunities for all.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Sustainable_Development_Goal_1.png" 
    },
    { 
      id: 2, 
      title: "Zero Hunger", 
      content: "End hunger, achieve food security and improved nutrition.\nPromote sustainable agriculture and resilient food production systems.", 
      imageUrl: "https://www.alberts.edu.in/wp-content/uploads/2023/03/E_SDG-goals_icons-individual-rgb-02.png" 
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
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM60wa2OPbzFsfMS7MQ-iBFWwJulvqxMDa0g&s" 
    },
    { 
      id: 5, 
      title: "Gender Equality", 
      content: "Achieve gender equality and empower all women and girls.\nEnd discrimination and violence against women and girls.", 
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFOvSqto9EzhoTPF6x3nP-HqPaaxbsdHFkOg&s" 
    },
    { 
      id: 6, 
      title: "Clean Water and Sanitation", 
      content: "Ensure availability and sustainable management of water and sanitation.\nWater and sanitation for all, ensuring access for the most vulnerable.", 
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sustainable_Development_Goal_6.png" 
    },
    { 
      id: 7, 
      title: "Affordable and Clean Energy", 
      content: "Ensure access to affordable, reliable, sustainable and modern energy.\nPromote renewable energy sources and improve energy efficiency.", 
      imageUrl: "https://gccassociation.org/wp-content/uploads/2020/11/E-WEB-Goal-07.png" 
    },
    { 
      id: 8, 
      title: "Decent Work and Economic Growth", 
      content: "Promote sustained, inclusive and sustainable economic growth.\nFull and productive employment and decent work for all.", 
      imageUrl: "https://www.un.org/esa/ffd/ffddialogue/images/E_SDG%20goals_icons-individual-rgb-08.png" 
    },
    { 
      id: 9, 
      title: "Industry, Innovation and Infrastructure", 
      content: "Build resilient infrastructure, promote inclusive and sustainable industrialization.\nFoster innovation and support research and development.", 
      imageUrl: "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E-Goal-09-1024x1024.png" 
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
      imageUrl: "https://gccassociation.org/wp-content/uploads/2020/11/E-WEB-Goal-14.png" 
    },
    { 
      id: 15, 
      title: "Life on Land", 
      content: "Protect, restore and promote sustainable use of terrestrial ecosystems.\nManage forests sustainably, combat desertification, and halt biodiversity loss.", 
      imageUrl: "https://globalgoalscms.co.uk/wp-content/uploads/2021/09/Goal-15-A.jpg" 
    },
    { 
      id: 16, 
      title: "Peace, Justice and Strong Institutions", 
      content: "Promote peaceful and inclusive societies for sustainable development.\nProvide access to justice for all and build effective, accountable institutions.", 
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Sustainable_Development_Goal_16PeaceJusticeInstitutions.svg/1200px-Sustainable_Development_Goal_16PeaceJusticeInstitutions.svg.png" 
    },
    { 
      id: 17, 
      title: "Partnerships for the Goals", 
      content: "Strengthen the means of implementation and revitalize the global partnership for sustainable development.\nEnhance international cooperation to facilitate access to science and technology.", 
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3YVY-h6Lo_iGdU0jtJ6_m5m9W3B-ghum0xA&s" 
    },
  ]

  return (
    <div className="container mx-auto p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Sustainable Development Goals</h1>
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
        className="my-0 mx-auto mb-6 w-full p-2 border border-gray-700 rounded-full shadow-sm bg-gray-800 text-white"        />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCards.map((card) => (
          <Card key={card.id} className="bg-gray-800 border border-gray-700 shadow-lg rounded-lg overflow-hidden">
            <CardHeader>
              <CardTitle className="text-white">{card.title}</CardTitle>
              <img 
                src={card.imageUrl} 
                alt={card.title} 
                className="w-full h-auto object-contain my-4 border-b border-gray-700 p-4"
                style={{ maxHeight: '250px' }} // Adjust max height as needed
              />
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 p-4">{card.content.split('\n').map((line, index) => (
                <span key={index}>{line}<br /></span>
              ))}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

// UI Components
function Input({ 
  className, 
  type = "text", 
  ...props 
}: React.InputHTMLAttributes<HTMLInputElement>) {
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
      className={`rounded-lg border bg-gray-800 shadow-md transition-all duration-200 hover:shadow-xl ${className}`}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`p-4 ${className}`} {...props} />
}

function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={`text-xl font-semibold leading-none tracking-tight ${className}`}
      {...props}
    />
  
  )
}

function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`p-4 ${className}`} {...props} />
}
