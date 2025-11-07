"use client"

export default function RoleSelectionComponent() {

  return (
    <div className="mx-auto w-full max-w-6xl rounded-3xl border border-white/10 bg-gray-900/80 px-4 py-10 text-gray-100 shadow-2xl backdrop-blur-sm sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center">
        <p className="rounded-full border border-blue-500/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-blue-300/90 sm:text-sm">
          Choose your journey
        </p>
        <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl">Select Your Role</h1>
        <p className="text-sm text-gray-300 sm:text-base">
          Tailor the SDG experience based on what you need. We have dedicated spaces for educators guiding learners and for students exploring new ideas.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {/* Teacher Card */}
        <div className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gray-800/80 shadow-lg transition hover:-translate-y-1 hover:border-blue-400/60 hover:shadow-2xl">
          <div className="flex h-full flex-col justify-between p-6 sm:p-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">Teacher</h2>
              <p className="text-sm text-gray-300 sm:text-base">Select if youre an educator</p>
              <ul className="space-y-2 text-sm text-gray-300 sm:text-base">
                <li>• Create and manage courses</li>
                <li>• Grade student assignments</li>
                <li>• Communicate with students</li>
              </ul>
            </div>
            <a href="/teachers" className="mt-6 w-full">
              <button
                className="flex w-full items-center justify-center rounded-2xl bg-gray-700 px-4 py-3 text-base font-semibold text-white transition hover:bg-gray-600"
              >
                Select Teacher Role
              </button>
            </a>
          </div>
        </div>

        {/* Student Card */}
        <div className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gray-800/80 shadow-lg transition hover:-translate-y-1 hover:border-blue-400/60 hover:shadow-2xl">
          <div className="flex h-full flex-col justify-between p-6 sm:p-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">Student</h2>
              <p className="text-sm text-gray-300 sm:text-base">Select if youre a learner</p>
              <ul className="space-y-2 text-sm text-gray-300 sm:text-base">
                <li>• Enroll in courses</li>
                <li>• Submit assignments</li>
                <li>• Interact with teachers and peers</li>
              </ul>
            </div>
            <a href="/QuizApp" className="mt-6 w-full">
              <button
                className="flex w-full items-center justify-center rounded-2xl bg-gray-700 px-4 py-3 text-base font-semibold text-white transition hover:bg-gray-600"
              >
                Select Student Role
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <a href="/SdgCards" className="inline-flex items-center justify-center rounded-full border border-blue-500/60 px-6 py-3 text-sm font-semibold text-blue-300 transition hover:bg-blue-500 hover:text-white sm:px-10 sm:py-4 sm:text-base">
          Explore Sustainable Development Goals
        </a>
      </div>
    </div>
  );
}
