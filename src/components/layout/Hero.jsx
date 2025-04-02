"use client";
import { motion } from "framer-motion";
import { FaGithub, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { BackgroundGradient } from "../background-gradient";
import { TypewriterEffectSmooth } from "./typewriter-effect";
import { getData } from "../../lib/data";
import { useTranslations } from "../../i18n/utils";

export const Hero = ({ lang = 'es' }) => {
  const t = useTranslations(lang);
  const data = getData(lang);
  const words = [
    {
      text: t("hero").title,
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
          <div className="absolute top-[-20px] right-4">
            {/* Redes sociales */}
            <div className="flex gap-4">
              {data.redesSociales.map((red, index) => (
                <a
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                  href={red.url}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-black dark:text-white p-2 rounded-full text-lg cursor-pointer"
                >
                  {red.icon === "github" ? <FaGithub /> : red.icon === "x" ? <FaXTwitter /> : <FaInstagram />}
                </a>
              ))}
            </div>
          </div>
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
              <h1 className="lg:text-8xl md:text-4xl text-3xl font-bold modern:text-pretty  text-black dark:text-white">
                Manuel Mendoza
              </h1>
              <p className="lg:text-8xl md:text-4xl text-3xl dark:text-purple-500 animate-bounce-slow">.</p>
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
          <p className="text-center text-sm lg:text-lg !z-20 text-black dark:text-white" style={{ fontFamily: 'monospace' }}>{t("hero").mesagge}</p>
        </BackgroundGradient>
      </div>
    </div>
  );
};
