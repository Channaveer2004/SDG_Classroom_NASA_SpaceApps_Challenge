import React from "react"
import { WavyBackgroundDemo } from "@/ace_compo/vortexDemo"
import { NavbarDemo } from "@/ace_compo/navBar"
import { TextAnimate } from "@/ace_compo/HeaderText"
import { BookOpen } from 'lucide-react'
import RoleSelectionComponent from "./RoleSelectionComponent"
import GlobePage from "./globe"
import SDGOverlay from "./globeBg"
import Footer from "./footer/page"


export default function Home() {
  const sdgHighlights = [
    "No Poverty",
    "Zero Hunger",
    "Good Health",
    "Quality Education",
    "Gender Equality",
    "Clean Water",
    "Clean Energy",
    "Climate Action",
    "Life Below Water",
    "Life On Land",
    "Economic Growth",
    "Innovation",
    "Reduced Inequalities",
    "Sustainable Cities",
    "Responsible Consumption",
    "Partnerships",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-black">
      <NavbarDemo />
      <div className="relative flex flex-col gap-12 pb-16  sm:pt-32">
        <section className="relative mx-auto w-full max-w-6xl ">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 px-4 py-12 text-left shadow-2xl backdrop-blur-lg sm:px-8 lg:px-12">
            <div className="absolute inset-0">
              <WavyBackgroundDemo />
            </div>

          
            <div className="relative z-10  flex min-h-[280px]  flex-col justify-center gap-6 items-start">
              <div className="hidden sm:block">

              <TextAnimate
                text="Sustainable Development Goals"
                type="fadeInUp"
                className="
                w-full 
                max-w-[100%]     /* prevents cutoff */
                text-left       /* left align */
                pl-2            /* small left shift */
                text-3xl        /* mobile size smaller */
                sm:text-4xl 
                md:text-5xl 
                lg:text-6xl 
                font-extrabold 
                leading-tight 
                text-white
                hidden sm:block"
                />
                </div>

              <div className="flex justify-center items-center h-full w-full sm:hidden">
                <div className="flex flex-col items-center text-center text-5xl font-extrabold text-white leading-tight space-y-1">
                  <span>Sustainable</span>
                  <span>Development</span>
                  <span>Goals</span>
                </div>
              </div>


              <TextAnimate
                text="Working together for a better future through global actions and shared solutions. This platform provides valuable resources to learn about the Sustainable Development Goals. Explore insights, tools, and opportunities to contribute to a sustainable world."
                type="whipIn"
                className="max-w-3xl px-4 text-sm font-medium leading-relaxed text-gray-200 sm:text-base md:text-lg"
              />
            </div>
          </div>
        </section>


        <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 shadow-2xl backdrop-blur-lg">
            <div className="relative h-[320px] sm:h-[420px] md:h-[520px]">
              <GlobePage />
              <div className="hidden h-full w-full items-center justify-center p-6 sm:flex">
                <SDGOverlay />
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs text-white sm:hidden">
            {sdgHighlights.map((item) => (
              <span key={item} className="rounded-full border border-white/20 px-3 py-1 text-[11px] uppercase tracking-wide text-white/80">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gray-900/80 shadow-2xl">
            <div className="absolute inset-0 hidden bg-grid-white/[0.04] bg-[size:20px_20px] sm:block" />
            <div className="relative space-y-6 px-6 py-8 sm:px-10 sm:py-12">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-2xl font-semibold text-gray-100 sm:text-3xl">SDG Education on Our Platform</h2>
                <BookOpen className="h-10 w-10 text-gray-300" />
              </div>
              <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
                Our platform is dedicated to providing education on the Sustainable Development Goals (SDGs), empowering learners to understand and contribute to a sustainable future. Through interactive content, expert insights, and real-world case studies, we make the 17 SDGs accessible and engaging for individuals of all ages and backgrounds.
              </p>
              <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
                Our aim is to inspire action, foster critical thinking, and cultivate global citizenship, helping participants recognize their role in addressing issues like poverty, climate change, gender equality, and quality education. By integrating the SDGs into our curriculum, we equip learners with the knowledge and skills necessary to drive meaningful change in their communities and beyond.
              </p>
              <div className="flex justify-center sm:justify-end">
                <a
                  href="/resources"
                  className="inline-flex items-center rounded-xl border border-gray-600 px-6 py-3 text-base font-medium text-gray-200 transition duration-150 ease-in-out hover:bg-gray-700"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6">
          <RoleSelectionComponent />
        </section>

        <Footer />
      </div>
    </div>
  )
}
