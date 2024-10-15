import React from "react"
import VortexDemo from "../ace_compo/vortexDemo"
import { NavbarDemo } from "@/ace_compo/navBar"
import { TextAnimate } from "@/ace_compo/HeaderText"
import { BookOpen } from 'lucide-react'
import { useState } from 'react';
import RoleSelectionComponent from "./RoleSelectionComponent"
import GlobePage from "./globe"
import SDGOverlay from "./globeBg"
import Footer from "./footer/page"




export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-black flex flex-col items-center p-4">
      <NavbarDemo />
      <div className="relative w-full h-[30rem]">
        <VortexDemo />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">

          <TextAnimate text="Sustainable Development Goals" type="fadeInUp" />
          <TextAnimate text="Working together for a better future through global actions and shared solutions.
                      This platform provides valuable resources to learn about the Sustainable Development Goals.
                      Explore insights, tools, and opportunities to contribute to a sustainable world." type="whipIn"
          />

        </div>

        <div className="relative w-[95vw] h-screen overflow-hidden overflow-x-hidden">
          <GlobePage />
          <SDGOverlay />
        </div>


        <div className="w-9/10 max-w-none mx-auto p-8 mt-12">
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4 max-w-[calc(100%+15px)] border border-radius-lg rounded-2xl">

            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
            <div className="relative p-8 sm:p-10">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-100 tracking-tight">SDG Education on Our Platform</h2>
                <BookOpen className="w-10 h-10 text-gray-300" />
              </div>
              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                Our platform is dedicated to providing education on the Sustainable Development Goals (SDGs), empowering learners to understand and contribute to a sustainable future. Through interactive content, expert insights, and real-world case studies, we make the 17 SDGs accessible and engaging for individuals of all ages and backgrounds.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                Our aim is to inspire action, foster critical thinking, and cultivate global citizenship, helping participants recognize their role in addressing issues like poverty, climate change, gender equality, and quality education. By integrating the SDGs into our curriculum, we equip learners with the knowledge and skills necessary to drive meaningful change in their communities and beyond.
              </p>
              <div className="mt-8 flex justify-end">
                <a
                  href="/resources"
                  className="inline-flex items-center px-6 py-3 border border-gray-600 text-base font-medium rounded-md text-gray-200 bg-gray-700 hover:bg-gray-600 transition duration-150 ease-in-out"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        <RoleSelectionComponent />

        <Footer />

      </div>
    </div>
  )
}
