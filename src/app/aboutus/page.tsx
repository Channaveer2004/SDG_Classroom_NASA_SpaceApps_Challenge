import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Import GitHub, LinkedIn, and Email icons from react-icons

// Member data
const members = [
  {
    name: 'CHANNAVEER B S',
    email: 'channaveerbs0905@gmail.com',
    github: 'https://github.com/Channaveer2004',
    linkedin: 'https://www.linkedin.com/in/channaveer-bs/'
  },
  {
    name: 'DHINAKAR G GOWDA',
    email: 'dhinakar@gmail.com',
    github: 'https://github.com/Dhinakar',
    linkedin: 'https://www.linkedin.com/in/dhinakarG/'
  },
  // {
  //   name: 'SHARATH M GOWDA',
  //   email: 'msharathgowda7@gmail.com',
  //   github: 'https://github.com/SharathxD',
  //   linkedin: 'https://www.linkedin.com/in/sharath-gowda-30525b307/'
  // },
  // {
  //   name: 'SHASHANK N',
  //   email: 'shashankrnagaraju@gmail.com',
  //   github: 'https://github.com/ShashankNagaraju',
  //   linkedin: 'https://www.linkedin.com/in/shashank-n-49a12825a/'
  // },
  // {
  //   name: 'SHASHIKIRAN B S',
  //   email: 'shashikiran.banagere@outlook.com',
  //   github: 'https://github.com/Shashi-bs',
  //   linkedin: 'https://www.linkedin.com/in/shashikiran-banagere-003352278/'
  // }
];

function App() {
  return (
    <div className="min-h-screen w-full bg-black px-4 py-12 text-gray-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <p className="inline-flex items-center justify-center rounded-full border border-blue-500/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-blue-300/90 sm:text-sm">
          The team
        </p>
        <h1 className="mt-4 text-3xl font-bold sm:text-4xl">About Us</h1>
        <p className="mt-3 max-w-3xl text-sm text-gray-300 sm:text-base">
          We are a group of learners and educators advocating for sustainable development. Connect with us through the channels below.
        </p>
      </div>
      <div className="mx-auto mt-10 grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
        {members.map((member, index) => (
          <div className="rounded-3xl border border-white/10 bg-gray-900/80 p-6 text-left shadow-xl transition hover:-translate-y-1 hover:border-blue-400/60 hover:shadow-2xl" key={index}>
            <h2 className="text-xl font-semibold text-white sm:text-2xl">{member.name}</h2>
            <a href={`mailto:${member.email}`} className="mt-4 flex items-center gap-3 rounded-2xl border border-white/10 px-4 py-3 text-sm text-gray-200 transition hover:border-blue-400/60 hover:bg-gray-800/70 sm:text-base">
              <FaEnvelope className="text-blue-300" />
              <span className="break-all">{member.email}</span>
            </a>

            {/* Social Links */}
            <div className="mt-5 flex flex-col gap-3">
              <a href={member.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-gray-200 transition hover:text-blue-300 sm:text-base">
                <FaGithub className="text-blue-300" />
                <span>GitHub</span>
              </a>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-gray-200 transition hover:text-blue-300 sm:text-base">
                <FaLinkedin className="text-blue-300" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
