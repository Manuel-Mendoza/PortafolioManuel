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
      className: "text-white dark:text-purple-500",
    },
  ];
  return (
    <div className="w-full flex justify-center min-h-full text-primary-content pt-24">
      <div className="w-[93%] lg:w-[70%] flex flex-col">
        <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 dark:bg-zinc-900 w-full">
          <div className="flex flex-col w-full">
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
              <h1 className="lg:text-8xl md:text-4xl text-2xl font-bold modern:text-pretty  text-black dark:text-white">
                Manuel Mendoza
              </h1>
              <p className="lg:text-8xl md:text-4xl text-2xl dark:text-purple-500 animate-bounce-slow">.</p>
            </motion.div>
            <motion.img
              src="/saludo.webp"
              alt="yo"
              className="!z-0 lg:h-40 absolute right-0 bottom-0 object-center h-24 md:block hidden"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.43, 0.13, 0.23, 0.96],
                delay: 1,
              }}
            />
          </div>
          <TypewriterEffectSmooth className="my-1" words={words} />
          <p className="text-center text-sm lg:text-lg !z-20 text-black dark:text-white" style={{ fontFamily: 'monospace' }}>"Si lo puedes imaginar, lo puedes programar."</p>
        </BackgroundGradient>
      </div>
    </div>
  );
};
