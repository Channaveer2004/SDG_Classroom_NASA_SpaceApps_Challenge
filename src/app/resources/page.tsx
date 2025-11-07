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
    <div className="min-h-screen w-full bg-gray-900 px-4 py-10 text-gray-100 sm:px-6 lg:px-10">
      {isClient ? (
        <>
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="rounded-full border border-blue-500/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-blue-300/90 sm:text-sm">
              SDG learning hub
            </p>
            <p className="text-3xl font-semibold text-blue-400 sm:text-4xl">Resources</p>
            <p className="max-w-2xl text-sm text-gray-300 sm:text-base">
              Search by name or filter by language to find videos and articles that support your sustainability lessons.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-6">
            <input
              type="text"
              placeholder="Search for resources..."
              className="w-full rounded-2xl border border-gray-700 bg-gray-800 px-4 py-3 text-sm text-gray-100 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/40 sm:text-base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="flex flex-col gap-6 lg:flex-row">
              <aside className="rounded-3xl border border-white/10 bg-gray-800/80 p-5 shadow-lg backdrop-blur lg:w-64 xl:w-72">
                <div className="flex items-center justify-between">
                  <h2 className="text-base font-semibold sm:text-lg">Filter by Language</h2>
                  <span className="rounded-full bg-blue-500/20 px-2 py-1 text-xs text-blue-300">
                    {selectedLanguages.size || 'All'}
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm sm:grid-cols-1">
                  {Array.from(new Set(courses.flatMap((course) => course.languages))).map((language) => (
                    <label
                      key={language}
                      className="flex cursor-pointer items-center gap-2 rounded-2xl border border-transparent px-2 py-2 transition hover:border-blue-400/40 hover:bg-gray-700/70"
                    >
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-500 text-blue-500 focus:ring-blue-500"
                        checked={selectedLanguages.has(language)}
                        onChange={() => toggleLanguage(language)}
                      />
                      <span>{language}</span>
                    </label>
                  ))}
                </div>
                {selectedLanguages.size > 0 && (
                  <button
                    className="mt-4 w-full rounded-xl border border-gray-600 px-3 py-2 text-xs font-semibold text-gray-200 transition hover:bg-gray-700/80"
                    onClick={() => setSelectedLanguages(new Set<string>())}
                  >
                    Clear filters
                  </button>
                )}
              </aside>
              <div className="flex-1">
                <h2 className="text-lg font-semibold sm:text-xl">Courses</h2>
                <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredCourses.map((course, index) => (
                    <div
                      key={index}
                      className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gray-800/90 shadow-lg transition hover:-translate-y-1 hover:border-blue-400/60 hover:shadow-2xl"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img
                          className="h-full w-full object-cover"
                          src={`https://img.youtube.com/vi/${
                            course.link.split("v=")[1]
                          }/0.jpg`}
                          alt={`${course.title} Thumbnail`}
                        />
                      </div>
                      <div className="flex flex-1 flex-col gap-3 px-4 py-4 sm:px-5 sm:py-5">
                        <div>
                          <h3 className="text-lg font-semibold text-white sm:text-xl">{course.title}</h3>
                          <p className="mt-2 text-sm text-gray-300 sm:text-base">{course.description}</p>
                        </div>
                        <p className="text-xs text-gray-400 sm:text-sm">
                          Languages: {course.languages.join(", ")}
                        </p>
                        <a
                          href={course.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-auto inline-flex items-center justify-center rounded-full border border-blue-500/50 px-4 py-2 text-xs font-semibold text-blue-300 transition hover:bg-blue-500 hover:text-white sm:text-sm"
                        >
                          Go to Course
                        </a>
                      </div>
                    </div>
                  ))}
                  {filteredCourses.length === 0 && (
                    <div className="col-span-full rounded-2xl border border-white/10 bg-gray-800/80 p-6 text-center text-sm text-gray-300 sm:text-base">
                      No resources matched your filters yet. Try adjusting the search or removing a language.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex min-h-screen w-full items-center justify-center">
          <p className="text-2xl font-semibold text-blue-400 sm:text-3xl">Loading...</p>
        </div>
      )}
    </div>
  );
}
