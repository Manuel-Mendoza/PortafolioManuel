export const listLang: Record<string, { flag: string; name: string }> = {
    es: { flag: '/flags/es.svg', name: 'Español' },
    en: { flag: '/flags/us.svg', name: 'English' },
};

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
            },
            // Traducir al español
            descripcion: {
                item1:'Landing Page del sistema operativo DoffyOS',
                item2:'Sistema Backend de inventario de vigas de madera',
                item3:'Frontend de inventario de vigas de madera',
                item4:'Landing Page de Terminal Tunja',
                item5:'Landing Page de Be Pelican',
                item6:'Landing Page de LoremDiv',
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
            title: 'Experience',
            data: {
                one: 'I am a passionate developer focused on creating efficient and elegant technology solutions. I specialize in Frontend web development, with backend experience.',
                two: 'I have one year of experience in the development of web and mobile applications, using technologies such as React, Astro, Tailwind CSS, among others.',
                three: 'I am committed to continuous learning and improving my skills, always seeking new opportunities to grow as a developer.',
            },
            descripcion: {
                item1:'Landing Page of the DoffyOS operating system',
                item2:'Sistema Backend of inventory of beams of wood',
                item3:'Frontend of inventory of beams of wood',
                item4:'Landing Page of Terminal Tunja',
                item5:'Landing Page of Be Pelican',
                item6:'Landing Page of LoremDiv',
            }
        }
    }
} as const;
