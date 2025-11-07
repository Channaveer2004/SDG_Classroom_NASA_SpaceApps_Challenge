"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Menu as MenuIcon, X } from "lucide-react";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center mt-4 md:mt-6">
      <Navbar className="top-3" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleToggle = () => setIsMobileOpen((prev) => !prev);
  const handleClose = () => setIsMobileOpen(false);

  const mobileLinks = [
    { label: "Teachers Role", href: "/teachers" },
    { label: "Student Role", href: "/QuizApp" },
    { label: "News page", href: "/newsapp" },
    { label: "Team Members", href: "/aboutus" },
  ];

  return (
    <div className={cn("fixed top-5 inset-x-0 z-50 px-4", className)}>
      <div className="mx-auto flex max-w-5xl flex-col gap-3">
        <div className="flex items-center justify-between rounded-full border border-white/20 bg-black/60 px-4 py-2 backdrop-blur-md md:hidden">
          <Link href="/" className="text-sm font-semibold uppercase tracking-wide text-white">
            SDG Classroom
          </Link>
          <button
            type="button"
            onClick={handleToggle}
            className="inline-flex items-center justify-center rounded-full border border-white/20 p-2 text-white transition hover:bg-white/10"
            aria-expanded={isMobileOpen}
            aria-label={isMobileOpen ? "Close navigation" : "Open navigation"}
          >
            {isMobileOpen ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>

        {isMobileOpen && (
          <div className="md:hidden">
            <div className="space-y-2 rounded-3xl border border-white/15 bg-black/80 p-4 text-sm shadow-lg backdrop-blur">
              {mobileLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={handleClose}
                  className="block rounded-2xl px-4 py-3 text-white transition hover:bg-white/10"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="hidden md:flex md:items-center md:justify-center">
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Home">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/teachers">Teachers Role</HoveredLink>
                <HoveredLink href="/QuizApp">Student Role</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Explore SDG's">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/newsapp">News page</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="About Us">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/aboutus">Team Members</HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}
