"use client";
import Cards from "@/components/Cards";
import { HeroParallaxDemo } from "@/components/Hero";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { navItems } from "@/data";
import { MoonStar, SunMoon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
 
  return (
    <main className="bg-[#ffffff] h-screen dark:bg-black  mx-auto sm:px-40 px-10">
      <div className="w-full">
        <Navbar />
        <HeroSection/>
        <Cards />
      </div>
    </main>
  );
}
