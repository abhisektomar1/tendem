"use client";
import Cards from "@/components/Cards";
import HeroSection from "@/components/HeroSection";
import { CanvasRevealEffectDemo } from "@/components/HoverCrads";
import { ImageSlider } from "@/components/ImageSlider";
import Navbar from "@/components/Navbar";

export default function Home() {
 
  return (
    <main className="bg-[#ffffff] h-screen dark:bg-black  mx-auto sm:px-20 px-10">
      <div className="w-full">
        <Navbar />
        <HeroSection/>
        <ImageSlider />
        <Cards />
        <CanvasRevealEffectDemo />
       
      </div>
    </main>
  );
}
