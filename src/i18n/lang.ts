export const listLang: Record<string, string> = {
    es: 'Español',
    en: 'English',
}

export const defaultLang: string = 'es';

export const ui: Record<string, Record<string, string | Record<string, string>>> = {
    es: {
        nav: 'Bienvenido a mi portafolio',
        hero: {
            title: 'Desarrollador de software',
        }
    },
    en: {
        nav: 'Welcome to my portfolio',
        hero: {
            title: 'Software Developer',
        }
    }
} as const;