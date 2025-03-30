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
      className: "dark:text-purple-500",
    },
  ];
  return (
    <div className="hero min-h-full text-primary-content pt-24">
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
            <h1 className="text-8xl font-bold modern:text-pretty">
              Manuel Mendoza
            </h1>
            <p className="text-8xl text-purple-500 animate-bounce-slow">.</p>
          </motion.div>
          <motion.img
            src="/src/assets/saludo.webp"
            alt="yo"
            className="!z-0 h-40 absolute right-0 bottom-0 object-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: [0.43, 0.13, 0.23, 0.96],
              delay: 1,
            }}
            />
          </div>
          <TypewriterEffectSmooth words={words} />
          <p className="text-center text-lg" style={{fontFamily: 'cursive'}}>"Si lo puedes imaginar, lo puedes programar."</p>
        </BackgroundGradient>
      </div>
    </div>
  );
};
