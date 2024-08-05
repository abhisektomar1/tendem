"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import GradualSpacing from "./magicui/gradual-spacing";

export function ImageSlider() {
  const images = [
    "https://tandem.space/landing-carousel-image-1.jpg",
    "https://tandem.space/landing-carousel-image-2.jpg",
    "https://tandem.space/landing-carousel-image-3.jpg",
    "https://tandem.space/landing-carousel-image-4.jpg",
    "https://tandem.space/landing-carousel-image-5.jpg",
    "https://tandem.space/landing-carousel-image-6.jpg",
  ];
  return (  
    <>
      <GradualSpacing
        className="mt-12 font-display text-center text-2xl font-medium tracking-[-0.1em]  text-black dark:text-white md:text-5xl md:leading-[8rem]"
        text="250+ unique office spaces in SF, NY, and LA"
      />
      <ImagesSlider className="h-[40rem] rounded-lg" images={images}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center"
          >
            {/* <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
              The hero section slideshow <br /> nobody asked for
            </motion.p> */}
            <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
              <span>Join now →</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </button>
          </motion.div>
      </ImagesSlider>
    </>
  );
}
