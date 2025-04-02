import { BackgroundGradient } from "../background-gradient.jsx";
import { getData } from "../../lib/data";

export default function Experiencia() {
    const data = getData('es');
    return (
        <section className="md:w-[90%] my-16 lg:grid grid-cols-2 lg:gap-4 mx-auto px-4 md:flex md:flex-col gap-4">
            <BackgroundGradient className="rounded-[22px] p-4 sm:p-10  dark:bg-zinc-900 flex justify-center items-center ">
                <img src="/real.JPG" alt="yo" className={`h-96 rounded-lg border-2 border-zinc-700`} />
            </BackgroundGradient>
            <div className="flex flex-col justify-between gap-4 mt-4 lg:mt-0">
                {data.aboutMe.map((item, index) => {
                    return (
                        <BackgroundGradient key={index} className="rounded-[22px] p-8 dark:bg-zinc-900">
                            <p className="lg:text-base text-base text-black dark:text-white">
                                {item.text}
                            </p>
                        </BackgroundGradient>
                    )
                })}
            </div>
            <div className="container mx-auto mt-4 px-4 col-span-2">
                <h2 className="lg:text-3xl md:text-5xl font-bold text-center mb-8">Experiencia</h2>
            </div>
            {data.experiencia.map((item, index) => (
                <div className="mb-4 lg:mb-0">
                    <BackgroundGradient key={index} className="rounded-[22px] p-8 dark:bg-zinc-900">
                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-black dark:text-white">
                            <img src={item.imagen} alt={item.nombre} className="border-2 border-zinc-700 rounded-lg lg:h-48 md:h-60 w-full object-cover" />
                            <br />
                            <p className="lg:text-xl md:text-4xl font-bold truncate">{item.nombre}</p>
                            <p className="text-balance lg:text-sm md:text-2xl">{item.descripcion}</p>
                        </a>
                        <div className="flex items-center gap-6 mb-2 text-black dark:text-white">
                            {item.tecnologias.map((tecnologia, index) => (
                                <span key={index} className="w-10 h-10 mt-2 flex flex-col items-center">
                                    <img src={`/${tecnologia}.svg`} alt={tecnologia} className="w-full border-2 border-zinc-700 rounded-full p-2 bg-gradient-to-r from-blue-500 to-purple-500" />
                                    <p className="text-balance lg:text-xs md:text-lg text-center">{tecnologia}</p>
                                </span>
                            ))}
                        </div>
                    </BackgroundGradient>
                </div>

            ))}
        </section>
    );
}