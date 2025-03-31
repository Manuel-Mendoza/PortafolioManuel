import { BackgroundGradient } from "../background-gradient.jsx";
import { experiencia } from "../../lib/data.ts";

export default function Experiencia() {
    return (
        <section className="my-16 grid grid-cols-2 gap-x-4 gap-y-8 container mx-auto px-4 max-md:flex max-md:flex-col">
            <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 dark:bg-zinc-900 flex justify-center items-center max-md:h-96 max-md:w-full">
                <img src="/real.jpg" alt="yo" className={`h-96 rounded-lg border-2 border-zinc-700`} />
            </BackgroundGradient>
            <div className="flex flex-col justify-between max-md:gap-y-4">
                <BackgroundGradient className="rounded-[22px] p-3 sm:p-8 dark:bg-zinc-900">
                    <p className="text-balance">
                        I am a passionate developer focused on creating efficient and
                        elegant technology solutions. I specialize in Frontend web
                        development, with backend experience.
                    </p>
                </BackgroundGradient>
                <BackgroundGradient className="rounded-[22px] p-3 sm:p-8 dark:bg-zinc-900">
                    <p className="text-balance">
                        I have one year of experience in the development of web and mobile applications, using technologies such as React, Astro, Tailwind CSS, among others.
                    </p>
                </BackgroundGradient>
                <BackgroundGradient className="rounded-[22px] p-3 sm:p-8 dark:bg-zinc-900">
                    <p className="text-balance">
                        I am committed to continuous learning and improving my skills, always seeking new opportunities to grow as a developer.
                    </p>
                </BackgroundGradient>
            </div>
            <div className="container mx-auto px-4 col-span-2">
                <h2 className="text-3xl font-bold text-center mb-8">Experiencia</h2>
            </div>
            {experiencia.map((item, index) => (
                <BackgroundGradient key={index} className="rounded-[22px] p-3 sm:p-8 dark:bg-zinc-900 max-md:h-full">
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                        <img src={item.imagen} alt={item.nombre} className="border-2 border-zinc-700 rounded-lg h-48 w-full object-cover" />
                        <br />
                        <p className="text-xl font-bold truncate">{item.nombre}</p>
                        <p className="text-balance text-sm">{item.descripcion}</p>
                    </a>
                    <div className="flex items-center gap-6 mb-2">
                        {item.tecnologias.map((tecnologia, index) => (
                            <span key={index} className="w-14 h-14 max-md:w-10 max-md:h-10 mt-2 flex flex-col items-center">
                                <img src={`/src/assets/${tecnologia}.svg`} alt={tecnologia} className="w-full border-2 border-zinc-700 rounded-lg p-2 bg-gradient-to-r from-blue-500 to-purple-500" />
                                <p className="text-balance text-xs text-center">{tecnologia}</p>
                            </span>
                        ))}
                    </div>
                </BackgroundGradient>
            ))}
        </section>
    );
}