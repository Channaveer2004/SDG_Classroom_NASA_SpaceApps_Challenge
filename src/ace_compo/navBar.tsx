"use client";
import Link from 'next/link';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import newpage from "../app/newsapp/newpage";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center mt-15">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ", className)}
    >
      <Menu setActive={setActive} >
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/teachers">Teachers Role</HoveredLink>
            <HoveredLink href="/QuizApp">Student Role</HoveredLink>
            
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Explore SDG's">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/teachers">Teachers Role</HoveredLink>
            <HoveredLink href="/QuizApp">Student Role</HoveredLink>
            
          </div>
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="About Us">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/aboutus">Teachers Role</HoveredLink>
            
            
          </div>
        </MenuItem>
        
      </Menu>
    </div>
  );
}
