"use client"
import React from "react";
import { Vortex } from "../components/ui/vortex";

export default function VortexDemo() {
  return (
    <div className="w-full mx-auto rounded-md h-[30rem] overflow-hidden mt-8">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"> 
      </Vortex>
    </div>
  );
}
