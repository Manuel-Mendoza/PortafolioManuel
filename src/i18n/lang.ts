export const listLang: Record<string, string> = {
    es: 'Español',
    en: 'English',
}

export const defaultLang: string = 'es';

export const ui: Record<string, Record<string, string | Record<string, string | Record<string, string>>>> = {
    es: {
        nav: 'Bienvenido a mi portafolio',
        hero: {
            title: 'Desarrollador de software',
            mesagge: 'Si lo puedes imaginar, lo puedes programar'
        },
        experiencia: {
            title: 'Experiencia',
            data: {
                one: 'Soy un desarrollador apasionado por crear soluciones tecnológicas eficientes y elegantes. Me especializo en el desarrollo web Frontend, con experiencia en el backend.',
                two: 'Tengo un año de experiencia en el desarrollo de aplicaciones web y móviles, utilizando tecnologías como React, Astro, Tailwind CSS, entre otros.',
                three: 'Estoy comprometido con el aprendizaje continuo y el desarrollo de mis habilidades, siempre buscando nuevas oportunidades para crecer como desarrollador.',
            }
        }
    },
    en: {
        nav: 'Welcome to my portfolio',
        hero: {
            title: 'Software Developer',
            mesagge: 'If you can imagine it, you can program it'
        },
        experiencia: {
            title: 'Experiencia',
            data: {
                one: 'I am a passionate developer focused on creating efficient and elegant technology solutions. I specialize in Frontend web development, with backend experience.',
                two: 'I have one year of experience in the development of web and mobile applications, using technologies such as React, Astro, Tailwind CSS, among others.',
                three: 'I am committed to continuous learning and improving my skills, always seeking new opportunities to grow as a developer.',
            }
        }
    }
} as const;