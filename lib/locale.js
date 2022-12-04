import es from '@locales/es'
import en from '@locales/en'

export function getTranslate(router) {
    const { locale } = router
    return (locale === 'en') ? en : es
}

export function getLocale(router) {
    const { locale } = router
    return locale 
}