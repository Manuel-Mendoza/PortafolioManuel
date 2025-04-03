import { defineMiddleware } from "astro:middleware";
import { defaultLang, listLang } from "./i18n/lang";

export const onRequest = defineMiddleware((context, next) => {
  const { pathname, origin } = new URL(context.request.url);

  // Si ya estamos en una ruta con idioma, continuamos
  if (pathname.match(/^\/(es|en)\/?/)) {
    return next();
  }

  // Obtener el idioma preferido del navegador
  const acceptLanguage = context.request.headers.get("accept-language");
  let preferredLang = defaultLang;

  if (acceptLanguage) {
    const browserLangs = acceptLanguage.split(",").map(lang => lang.split(";")[0].trim());
    const supportedLangs = Object.keys(listLang);
    
    // Encontrar el primer idioma soportado
    const matchedLang = browserLangs.find(lang => 
      supportedLangs.some(supported => lang.startsWith(supported))
    );

    if (matchedLang) {
      preferredLang = matchedLang.substring(0, 2);
    }
  }

  // Redirigir a la ruta con el idioma
  const domain = context.url;
  return Response.redirect(new URL(`/${preferredLang}${pathname}`, domain));
});
