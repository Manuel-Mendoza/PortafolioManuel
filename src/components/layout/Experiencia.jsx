import { BackgroundGradient } from "../background-gradient.jsx";

export default function Experiencia() {
    return (
        <section class="mt-16 grid grid-cols-2 gap-4 container mx-auto px-4">
            <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 dark:bg-zinc-900 flex justify-center items-center">
                <img src="/src/assets/cool.webp" alt="yo" className="h-80" />
            </BackgroundGradient>

            <div class="container mx-auto px-4">
                <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 dark:bg-zinc-900">
                    <p className="text-balance">
                        I am a passionate developer focused on creating efficient and
                        elegant technology solutions. I specialize in Frontend web
                        development, with backend experience.
                    </p>
                </BackgroundGradient>
                <br />
            </div>
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-bold text-center mb-8">Experiencia</h2>
            </div>
        </section>
    );
}
