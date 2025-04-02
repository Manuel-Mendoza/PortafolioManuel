export const listLang: Record<string, string> = {
    es: '🇪🇸',
    en: '🇬🇧',
}

export const defaultLang: string = 'es';

export const ui: Record<string, Record<string, string>> = {
    es: {
        nav: 'Bienvenido a mi portafolio',
    },
    en: {
        nav: 'Welcome to my portfolio',
    }
} as const;