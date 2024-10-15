"use client"; // This is necessary to enable client-side state management
import { useState, useEffect } from "react";

// Courses data
const courses = [
  {
    title: 'No Poverty',
    description: 'End poverty in all its forms everywhere.',
    languages: ['Spanish'],
    link: 'https://www.youtube.com/watch?v=T7qiM0quEf4'
  },
  {
    title: 'Zero Hunger',
    description: 'End hunger, achieve food security and improved nutrition.',
    languages: ['German'],
    link: 'https://www.youtube.com/watch?v=ifCQ4LqT8G8'
  },
  {
    title: 'Good Health and Well-Being',
    description: 'Ensure healthy lives and promote well-being for all.',
    languages: ['English'],
    link: 'https://www.youtube.com/watch?v=ARmBCl4nid0'
  },
  {
    title: 'Quality Education',
    description: 'Ensure inclusive and equitable quality education.',
    languages: ['Spanish'],
    link: 'https://www.youtube.com/watch?v=LIExX9St4oA'
  },
  {
    title: 'Gender Equality',
    description: 'Achieve gender equality and empower all women and girls.',
    languages: ['English'],
    link: 'https://www.youtube.com/watch?v=F-OURmsmEKo'
  },
  {
    title: 'Clean Water and Sanitation',
    description: 'Ensure availability and sustainable management of water and sanitation for all.',
    languages: ['German'],
    link: 'https://www.youtube.com/watch?v=dpaUBRl8c6A'
  },
  {
    title: 'Affordable and Clean Energy',
    description: 'Ensure access to affordable, reliable, sustainable, and modern energy for all.',
    languages: ['English'],
    link: 'https://www.youtube.com/watch?v=lVgvK8Kfxwc'
  },
  {
    title: 'Decent Work and Economic Growth',
    description: 'Promote sustained, inclusive and sustainable economic growth.',
    languages: ['Spanish'],
    link: 'https://www.youtube.com/watch?v=lj0JlrIWx2k'
  },
  {
    title: 'Industry, Innovation and Infrastructure',
    description: 'Build resilient infrastructure, promote inclusive and sustainable industrialization.',
    languages: ['English'],
    link: 'https://www.youtube.com/watch?v=J57rRolByqY'
  },
  {
    title: 'Reduced Inequalities',
    description: 'Reduce inequality within and among countries.',
    languages: ['German'],
    link: 'https://www.youtube.com/watch?v=-5wo1ArN88w'
  },
  {
    title: 'Sustainable Cities and Communities',
    description: 'Make cities and human settlements inclusive, safe, resilient, and sustainable.',
    languages: ['Spanish'],
    link: 'https://www.youtube.com/watch?v=7hEYtozmb5o'
  },
  {
    title: 'Responsible Consumption and Production',
    description: 'Ensure sustainable consumption and production patterns.',
    languages: ['English'],
    link: 'https://www.youtube.com/watch?v=dn-hLQk49eA'
  },
  {
    title: 'Climate Action',
    description: 'Take urgent action to combat climate change and its impacts.',
    languages: ['Spanish'],
    link: 'https://www.youtube.com/watch?v=jhoa3OHivN8'
  },
  {
    title: 'Life Below Water',
    description: 'Conserve and sustainably use the oceans, seas and marine resources.',
    languages: ['English'],
    link: 'https://www.youtube.com/watch?v=u-l3KfmFNx0'
  },
  {
    title: 'Life on Land',
    description: 'Protect, restore and promote sustainable use of terrestrial ecosystems.',
    languages: ['German'],
    link: 'https://www.youtube.com/watch?v=HRtua9GpzhY'
  },
  {
    title: 'Peace, Justice and Strong Institutions',
    description: 'Promote peaceful and inclusive societies for sustainable development.',
    languages: ['English'],
    link: 'https://www.youtube.com/watch?v=Ki33yMnfAso'
  },
  {
    title: 'Partnerships for the Goals',
    description: 'Strengthen the means of implementation and revitalize the global partnership for sustainable development.',
    languages: ['Spanish'],
    link: 'https://www.youtube.com/watch?v=jcfoWx14lv0'
  }
];

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState(new Set<string>());
  const [isClient, setIsClient] = useState(false);

  // Ensure rendering happens only after the component mounts on the client side
  useEffect(() => {
    setIsClient(true); // Set to true after component mounts
  }, []);

  const toggleLanguage = (language: string) => {
    setSelectedLanguages((prev) => {
      const newLanguages = new Set(prev);
      if (newLanguages.has(language)) {
        newLanguages.delete(language);
      } else {
        newLanguages.add(language);
      }
      return newLanguages;
    });
  };

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesLanguages =
      selectedLanguages.size === 0 ||
      course.languages.some((lang) => selectedLanguages.has(lang));
    return matchesSearch && matchesLanguages;
  });

  return (
    <div className="min-h-screen w-full bg-gray-900 text-gray-100 p-8 flex flex-col">
      {isClient ? (
        <>
          <div className="flex justify-center items-center mb-8">
            <p className="text-5xl text-blue-400 font-semibold">RESOURCES</p>
          </div>
          <input
            type="text"
            placeholder="Search for resources..."
            className="mb-4 p-2 rounded bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="flex space-x-8">
            <div className="w-1/4">
              <h2 className="text-lg font-semibold mb-2">Filter by Language</h2>
              <div className="bg-gray-800 rounded-lg p-4 space-y-2">
                {Array.from(
                  new Set(courses.flatMap((course) => course.languages))
                ).map((language) => (
                  <div key={language} className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2 rounded"
                      checked={selectedLanguages.has(language)}
                      onChange={() => toggleLanguage(language)}
                    />
                    <span>{language}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-3/4">
              <h2 className="text-lg font-semibold mb-2">Courses</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredCourses.map((course, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 p-4 rounded-lg shadow-lg"
                  >
                    <h3 className="text-xl font-bold">{course.title}</h3>
                    <img
                      className="mt-2 rounded"
                      src={`https://img.youtube.com/vi/${
                        course.link.split("v=")[1]
                      }/0.jpg`}
                      alt={`${course.title} Thumbnail`}
                    />
                    <p className="mt-2 text-gray-300">{course.description}</p>
                    <p className="mt-2 text-sm text-gray-500">
                      Languages: {course.languages.join(", ")}
                    </p>
                    <a
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-blue-400 hover:underline"
                    >
                      Go to Course
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-screen w-full flex justify-center items-center">
          <p className="text-5xl text-blue-400 font-semibold">Loading...</p>
        </div>
      )}
    </div>
  );
}
