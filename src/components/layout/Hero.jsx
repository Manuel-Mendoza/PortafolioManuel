"use client";
import { motion } from "framer-motion";
import { BackgroundGradient } from "../background-gradient";
import { TypewriterEffectSmooth } from "./typewriter-effect";

export const Hero = () => {
  const words = [
    {
      text: "Software Developer",
    },
    {
      text: "</>",
      className: "dark:text-purple-500",
    },
  ];
  return (
    <div className="w-full flex justify-center min-h-full text-primary-content pt-24">
      <div className="max-md:w-[93%] flex flex-col">
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 w-full max-md:w-full">
            <div className="flex flex-col max-md:w-full">
              <motion.div
              className="flex !z-10 animate-slide-in modern:text-wrap-balance"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96],
              delay: 0.2,
            }}
          >
            <h1 className="text-8xl font-bold modern:text-pretty max-md:text-4xl">
              Manuel Mendoza
            </h1>
            <p className="text-8xl text-purple-500 animate-bounce-slow max-md:text-4xl">.</p>
          </motion.div>
          <motion.img
            src="/src/assets/saludo.webp"
            alt="yo"
            className="!z-0 h-40 absolute right-0 bottom-0 object-center max-md:h-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.43, 0.13, 0.23, 0.96],
              delay: 1,
            }}
            />
          </div>
          <TypewriterEffectSmooth className="max-md:my-1" words={words} />
          <p className="text-center max-md:text-start text-lg max-md:text-sm !z-20" style={{fontFamily: 'cursive'}}>"Si lo puedes imaginar, lo puedes programar."</p>
        </BackgroundGradient>
      </div>
    </div>
  );
};
