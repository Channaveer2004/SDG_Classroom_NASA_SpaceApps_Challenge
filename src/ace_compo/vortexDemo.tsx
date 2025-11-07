"use client";
import React from "react";
import { WavyBackground } from "../components/ui/vortex";

export function WavyBackgroundDemo() {
  return (
    <WavyBackground
      className="max-w-3xl mx-auto px-4 text-center"
      containerClassName="relative h-full w-full"
      backgroundFill="rgba(0,0,0,0.65)"
    >
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
       
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        
      </p>
    </WavyBackground>
  );
}
