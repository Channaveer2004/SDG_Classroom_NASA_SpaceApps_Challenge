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
    name: 'SHARATH M GOWDA',
    email: 'msharathgowda7@gmail.com',
    github: 'https://github.com/SharathxD',
    linkedin: 'https://www.linkedin.com/in/sharath-gowda-30525b307/'
  },
  {
    name: 'SHASHANK N',
    email: 'shashankrnagaraju@gmail.com',
    github: 'https://github.com/ShashankNagaraju',
    linkedin: 'https://www.linkedin.com/in/shashank-n-49a12825a/'
  },
  {
    name: 'SHASHIKIRAN B S',
    email: 'shashikiran.banagere@outlook.com',
    github: 'https://github.com/Shashi-bs',
    linkedin: 'https://www.linkedin.com/in/shashikiran-banagere-003352278/'
  }
];

function App() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen p-5">
      <h1 className="text-5xl text-center mb-12">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {members.map((member, index) => (
          <div className="bg-gray-800 text-white p-5 rounded-lg transform transition-transform hover:scale-105" key={index}>
            <h2 className="text-2xl mb-4">{member.name}</h2>
            <p>
              <a href={`mailto:${member.email}`} className="flex items-center mb-3 text-white no-underline">
                <FaEnvelope className="mr-3" /> {/* Email Icon */}
                <span className="text-base">{member.email}</span>
              </a>
            </p>

            {/* Social Links */}
            <div className="mt-4">
              <div>
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="flex items-center mb-2 text-white no-underline">
                  <FaGithub className="mr-3" /> {/* GitHub Icon */}
                  <span className="text-base">GitHub</span>
                </a>
              </div>
              <div>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-white no-underline">
                  <FaLinkedin className="mr-3" /> {/* LinkedIn Icon */}
                  <span className="text-base">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
