import React from "react";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import GradualSpacing from "./magicui/gradual-spacing";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";

function HeroSection() {
  return (
    <section>
      <div className="flex flex-col md:flex-row">
  <div className="w-full md:w-1/2">
    <HeroHighlight>
      <GradualSpacing
        className="font-display text-center text-4xl font-bold tracking-[-0.1em] text-black dark:text-white md:text-6xl md:leading-[5rem] mb-[-10px]"
        text={`Split office space. Save money.`}
      />
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 3,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto mt-[-40px]"
      >
        <br />
        <Highlight className="text-black dark:text-white">
          Meet cool people.
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  </div>
  
  <div className="w-full md:w-1/2">
    <div className="h-[40rem] w-full flex items-center justify-center">
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 3,
          ease: [0.4, 0.0, 0.2, 1],
        }}
      >
      <PinContainer
        title="Cool Spaces"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[35rem] h-[35rem]">
          <Image
            src="/hero-section.webp"
            width={700}
            height={700}
            alt={"logo"}
          />
        </div>
      </PinContainer>
      </motion.div>
    </div>
  </div>
</div>
    </section>
  );
}

export default HeroSection;
