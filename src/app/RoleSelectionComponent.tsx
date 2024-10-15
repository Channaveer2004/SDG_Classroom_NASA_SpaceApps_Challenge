"use client"
import { useState } from 'react';

export default function RoleSelectionComponent() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleSelect = (role: string) => {
    setSelectedRole(role);
  };

  return (

    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6 max-w-[calc(100%-55px)] border border-radius-lg rounded-2xl ml-7">

      <h1 className="text-3xl font-bold mb-8 text-gray-100">Select Your Role</h1>
      <div className="flex flex-wrap justify-center gap-8 max-w-4xl w-9/10 mx-auto">
        {/* Teacher Card */}
        <div className="w-[340px] h-[450px] bg-gray-800 hover:bg-gray-700 transition-colors rounded-xl shadow-xl overflow-hidden">
          <div className="p-8 h-full flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-100 mb-3">Teacher</h2>
              <p className="text-xl text-gray-400 mb-6">Select if you're an educator</p>
              <ul className="list-disc list-inside text-lg text-gray-300 mb-6">
                <li>Create and manage courses</li>
                <li>Grade student assignments</li>
                <li>Communicate with students</li>
              </ul>
            </div>
            <a href="/teachers">
              <button
                className="w-full bg-gray-600 hover:bg-gray-500 text-white py-3 rounded-2xl transition-colors text-xl font-semibold"
              >
                Select Teacher Role
              </button>
            </a>
          </div>
        </div>

        {/* Student Card */}
        <div className="w-[340px] h-[450px] bg-gray-800 hover:bg-gray-700 transition-colors rounded-xl shadow-xl overflow-hidden">
          <div className="p-8 h-full flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-100 mb-3">Student</h2>
              <p className="text-xl text-gray-400 mb-6">Select if you're a learner</p>
              <ul className="list-disc list-inside text-lg text-gray-300 mb-6">
                <li>Enroll in courses</li>
                <li>Submit assignments</li>
                <li>Interact with teachers and peers</li>
              </ul>
            </div>
            <a href="/QuizApp">
              <button
                className="w-full bg-gray-600 hover:bg-gray-500 text-white py-3 rounded-2xl transition-colors text-xl font-semibold"
                onClick={() => handleSelect('student')}
              >
                Select Student Role
              </button>
            </a>
          </div>
        </div>
      </div>

      <a href="SdgCards">
        <button className="mt-8 mb-8 px-12 py-6 border-4 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-500 ease-in-out rounded-full bg-gray-900 text-2xl font-bold">
          Explore Sustainable Development Goals
        </button>
      </a>
    </div>


  );
}
