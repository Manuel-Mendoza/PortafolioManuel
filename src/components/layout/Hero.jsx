"use client";
import { motion } from "framer-motion";
import { BackgroundGradient } from "../background-gradient";
import { TypewriterEffectSmooth } from "./typewriter-effect";

export const Hero = () => {
  const words = [
    {
      text: "Sotfware",
    },
    {
      text: " Developer",
    },
    {
      text: "</>",
      className: "text-green-500 dark:text-purple-500",
    },
  ];
  return (
    <div className="hero min-h-full bg-primary text-primary-content pt-48">
      <div className="hero-content flex flex-col">
        <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <div className="flex">
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
            <h1 className="text-9xl font-bold modern:text-pretty">
              Manuel Mendoza
            </h1>
            <p className="text-9xl text-[#d8973c] animate-bounce-slow">.</p>
          </motion.div>
          <motion.img
            src="/src/assets/saludo.webp"
            alt="yo"
            className="!z-0 h-2/3 fixed right-0 object-cover object-center max-h-screen animate-fade-in"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: [0.43, 0.13, 0.23, 0.96],
              delay: 0.5,
            }}
          />
          </div>
          <TypewriterEffectSmooth words={words} />
        </BackgroundGradient>
      </div>
    </div>
  );
};
