import { BackgroundGradient } from "../background-gradient.jsx";

export default function Experiencia() {
    return (
        <section class="mt-16 grid grid-cols-2 gap-x-4 gap-y-8 container mx-auto px-4">
            <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 dark:bg-zinc-900 flex justify-center items-center">
                <img src="/src/assets/Yopi.png" alt="yo" className="h-96" />
            </BackgroundGradient>
            <div className="flex flex-col justify-between">
                <BackgroundGradient className="rounded-[22px] p-3 sm:p-8 dark:bg-zinc-900">
                    <p className="text-balance">
                        I am a passionate developer focused on creating efficient and
                        elegant technology solutions. I specialize in Frontend web
                        development, with backend experience.
                    </p>
                </BackgroundGradient>
                <BackgroundGradient className="rounded-[22px] p-3 sm:p-8 dark:bg-zinc-900">
                    <p className="text-balance">
                        Soy un desarrollador apasionado enfocado en crear soluciones tecnológicas eficientes y elegantes. Me especializo en el desarrollo web Frontend, con experiencia en Backend.
                    </p>
                </BackgroundGradient>
                <BackgroundGradient className="rounded-[22px] p-3 sm:p-8 dark:bg-zinc-900">
                    <p className="text-balance">
                        Tengo experiencia en el desarrollo de aplicaciones web y móviles, utilizando tecnologías como React, Astro, Tailwind CSS, entre otras.
                    </p>
                </BackgroundGradient>
            </div>
            <div class="container mx-auto px-4 col-span-2">
                <h2 class="text-3xl font-bold text-center mb-8">Experiencia</h2>
            </div>
            <BackgroundGradient className="rounded-[22px] p-3 sm:p-8 dark:bg-zinc-900">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src="/src/assets/DoffyWeb.png" alt="DoffyWeb" className="border-2 border-zinc-700 rounded-lg" />
                    <br />
                    <p className="text-balance">DoffyWeb</p>

                </a>
            </BackgroundGradient>
        </section>
    );
}