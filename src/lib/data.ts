import { useTranslations } from "../i18n/utils";
import { listLang } from "../i18n/lang";

export const getData = (lang: keyof typeof listLang) => {
    const t = useTranslations(lang);
    
    // redes sociales
    const redesSociales = [
        {
            nombre: "GitHub",
            url: "https://github.com/Manuel-Mendoza",
            icon: "github",
        },
        {
            nombre: "XTwitter",
            url: "https://x.com/itjosemendoza?s=21",
            icon: "x",
        },
        {
            nombre: "Instagram",
            url: "https://www.instagram.com/itmanuelmendoza?igsh=MXVzeG43ZTJpb3Y2&utm_source=qr",
            icon: "instagram",
        },
    ];

    // about me
    const aboutMe = [
        {
            text: t("experiencia").data.one
        },
        {
            text: t("experiencia").data.two
        },
        {
            text: t("experiencia").data.three
        },
    ];

    // experiencia
    const experiencia = [
        {
            nombre: "DoffyWeb",
            imagen: "/DoffyWeb.png",
            descripcion: "Landing Page del sistema operativo DoffyOS",
            tecnologias: ["Astro", "Tailwind", "React"],
            url: "#",
        },
        {
            nombre: "VigasApp",
            imagen: "/VigasApp.png",
            descripcion: "Sistema Backend de inventario de vigas de madera",
            tecnologias: ['Django', 'PostgreSQL'],
            url: "https://vigasapp-production.up.railway.app/api/",
        },
        {
            nombre: "Sistema de Gestion de Inventario",
            imagen: "/SGI.png",
            descripcion: "Sistema Frontend de inventario de vigas de madera",
            tecnologias: ['React', 'Tailwind'],
            url: "https://inventory-beams.vercel.app/app",
        },
        {
            nombre: "Terminal de Tunja",
            imagen: "/TerminalTunja.png",
            descripcion: "Landing Page de la pagina web de la terminal de Tunja",
            tecnologias: ['React', 'Sass'],
            url: "https://test-terminal-tunja.vercel.app/",
        },
        {
            nombre: "BePelican",
            imagen: "/BePelican.png",
            descripcion: "Landing Page de la pagina web de Be Pelican",
            tecnologias: ['HTML5', 'CSS3', 'JavaScript'],
            url: "https://landing-bepelican.vercel.app/",
        },
        {
            nombre: "LoremDiv",
            imagen: "/LoremDiv.png",
            descripcion: "Antigua pagina personal de FreeLancer de mi hermano",
            tecnologias: ['React', 'Bootstrap', 'Sass'],
            url: "https://lorem-div-page.vercel.app/",
        },
    ];

    return {
        redesSociales,
        aboutMe,
        experiencia
    };
};
