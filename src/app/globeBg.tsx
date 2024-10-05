import React from 'react';

const SDGOverlay = () => {
  return (
    <div className="absolute inset-0 pointer-events-none flex justify-center items-center z-10">
      {/* SDG Words - Dispersed with Different Font Sizes and Boldness */}
      <span className="absolute top-5 left-1/4 transform -translate-x-1/2 text-white font-bold text-2xl md:text-3xl lg:text-4xl drop-shadow-md">
        No Poverty
      </span>
      <span className="absolute top-10 right-[20%] text-white font-semibold text-lg md:text-xl lg:text-2xl drop-shadow-md">
        Zero Hunger
      </span>
      <span className="absolute top-[30%] left-[15%] text-white font-medium text-base md:text-lg lg:text-xl drop-shadow-md">
        Good Health & Well-being
      </span>
      <span className="absolute top-[30%] right-[1%] text-white font-bold text-3xl md:text-4xl lg:text-5xl drop-shadow-md">
        Quality Education
      </span>
      <span className="absolute top-[10%] right-[10%] text-white font-semibold text-lg md:text-xl lg:text-2xl drop-shadow-md">
        Gender Equality {/* Moved to the top-right corner */}
      </span>
      <span className="absolute bottom-[20%] right-[15%] text-white font-light text-lg md:text-xl lg:text-2xl drop-shadow-md">
        Clean Water & Sanitation
      </span>
      <span className="absolute bottom-[30%] left-[5%] text-white font-medium text-lg md:text-xl lg:text-2xl drop-shadow-md">
        Affordable Clean Energy
      </span>
      <span className="absolute top-[15%] left-[10%] text-white font-bold text-3xl md:text-4xl lg:text-5xl drop-shadow-md">
        Climate Action
      </span>
      <span className="absolute bottom-[5%] right-[30%] text-white font-medium text-base md:text-lg lg:text-xl drop-shadow-md">
        Life Below Water {/* Moved away from globe, now in bottom-right */}
      </span>
      <span className="absolute top-[5%] right-[5%] text-white font-light text-sm md:text-base lg:text-lg drop-shadow-md">
        Life On Land
      </span>
      <span className="absolute top-[50%] left-[10%] transform -translate-y-1/2 text-white font-bold text-2xl md:text-3xl lg:text-4xl drop-shadow-md">
        Economic Growth
      </span>
      <span className="absolute bottom-[10%] left-[10%] text-white font-semibold text-lg md:text-xl lg:text-2xl drop-shadow-md">
        Industry, Innovation, & Infrastructure {/* Moved to the bottom-left corner */}
      </span>
      <span className="absolute top-[45%] right-[10%] text-white font-light text-lg md:text-xl lg:text-2xl drop-shadow-md">
        Reduced Inequalities
      </span>
      <span className="absolute bottom-[15%] left-[5%] text-white font-medium text-sm md:text-base lg:text-lg drop-shadow-md">
        Sustainable Cities & Communities
      </span>
      <span className="absolute bottom-[40%] right-[60%] text-white font-bold text-xl md:text-2xl lg:text-3xl drop-shadow-md">
        Responsible Consumption
      </span>
      <span className="absolute top-[25%] left-[30%] text-white font-semibold text-lg md:text-xl lg:text-2xl drop-shadow-md">
        Partnerships for the Goals
      </span>
    </div>
  );
};

export default SDGOverlay;
