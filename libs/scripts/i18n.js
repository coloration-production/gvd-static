// the default locale
// you can for example take it from the URL.
// here we take it from the localStorage, if it exist & default to en.
let locale = localStorage.getItem('locale') || 'en'


document.addEventListener('alpine:init', () => {
  Alpine.data('i18n', () => ({
    locale: localStorage.getItem('locale') || 'en',

    changeLang(lang) {
      this.locale = lang
      AlpineI18n.locale = lang
      localStorage.setItem('locale', lang)
    },
  }))
})


document.addEventListener('alpine-i18n:ready', function () {
  AlpineI18n.create(locale, i18nLocale)
})



// define the RTL locales you support
// var rtlLocales = ['ar', 'fa']
// // listen to locale changes and update direction
// document.addEventListener('alpine-i18n:locale-change', function () {
//   if (rtlLocales.includes(AlpineI18n.locale)) {
//     document.body.setAttribute('dir', 'rtl')
//   } else {
//     document.body.removeAttribute('dir')
//   }
// })
