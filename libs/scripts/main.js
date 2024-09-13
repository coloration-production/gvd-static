AOS.init({
  once: true,
  disable: 'phone',
  duration: 600,
  easing: 'ease-out-sine',
})


const { createI18n, useI18n } = VueI18n

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: i18nLocale
})


const { createApp, ref } = Vue

const app = createApp({})
.use(i18n)
.mount('#app')


const header = createApp({
  setup(_props, context) {
    const { locale } = useI18n()
    
    locale.value = localStorage.getItem('gvdLocale') || 'en'

    function changeLang(lang) {
      locale.value = lang
      localStorage.setItem('gvdLocale', lang)
    }

    return {
      locale,
      changeLang
    }
  },
  template: `
<div class="group hidden md:block pt-[0.7rem] absolute top-0 left-0 w-full z-10">
  <!-- -->
  <!-- <div class="bg-cool h-4 flex items-center justify-center text-xs tracking-wider text-white">Trading better than ever</div> -->
  <div class="the-align-container flex justify-between items-center h-24">
    <a href="/" :title="$t('button.home')" class="mr-14">
      <!-- <div class="bg-blue w-62 h-full">123</div> -->
      <img class=" w-62" src="/libs/images/logo.png" alt="">
    </a>
    
    <nav class="tracking-[-0.02em] flex-1 flex gap-1 h-full">
      <div class="the-header-nav-btn" v-text="$t('header.trading')"></div>
      <div class="the-header-nav-btn" v-text="$t('header.markets')"></div>
      <div class="the-header-nav-btn" v-text="$t('header.tools')"></div>
      <div class="the-header-nav-btn" v-text="$t('header.company')"></div>
      <div class="the-header-nav-btn" v-text="$t('header.partnership')"></div>
   
    </nav> 
    <div class="flex gap-4 pr-7">
      <div class="btn btn-primary" v-text="$t('header.register')"></div>
      <div class="btn btn-normal" v-text="$t('header.signIn')"></div>
    </div>

    <div class="flex items-center justify-end h-full gap-5">
      <a :title="$t('button.toggle_langs')" @click="toggleLocales()">
        <img src="/libs/images/icon-shop.png" class="w-6" alt="">
      </a>

      <a class="flex items-center gap-1" :title="$t('button.toggle_dark')">
        <img src="/libs/images/icon-lang.png" class="w-6" alt=""> 
        <span class="font-600 text-sm uppercase" v-text="locale" @click="changeLang(locale === 'en' ? 'zh' : 'en')"></span>
      </a>
    </div>

  </div>
  <div class="left-0 top-full h-30 bg-green-200 absolute w-full z-10 hidden group-hover:block">
    <div class="the-align-container ">
      <div class="flex gap-4">
        <a href="/company/aboutgvd">About GVD</a>
        <a href="/company/brand-milestones">Brand Milestones</a>
        <a href="/company/career">Career</a>
        <a href="/company/contact-us">Contact Us</a>
        <a href="/company/faq">FAQ</a>
        <a href="/company/honors-and-awards">Honors & Awards</a>
        <a href="/company/legal-notices">Legal Notices</a>
        <a href="/company/partnership">Partnership</a>
      </div>
    </div>
  </div>
</div>
  `
})
.use(i18n)
.mount('#the-header')


const footer = createApp({
  template: `
<div class="bg-white dark:bg-gray-700 pb-6">
  <!-- -->
  <div class="the-align-container">
    <div class="flex items-stretch flex-col md:flex-row">
      <div class="pl-6 w-46">
        <h4 class="font-700  pt-.5 tracking-[-0.03em] text-nowrap">Account type</h4>
        <ul class="text-sm flex flex-col gap-[0.2rem] font-700">
          <li>
            <a href="javascript:;">STD account</a>
          </li>
          <li>
            <a href="javascript:;">STP account</a>
          </li>
          <li>
            <a href="javascript:;">ECN account</a>
          </li>
        </ul>
      </div>
      <div class="the-footer-divider"></div>
      <div class="pl-6 w-51">
        <h4 class="font-700 pt-.5 tracking-[-0.03em]">Account Platforms</h4>
        <ul class="text-sm flex flex-col gap-[0.2rem] font-700">
          <li><a href="javascript:;">MT4 Windows</a></li>
          <li><a href="javascript:;">MT4 Android/iOS</a></li>
          <li><a href="javascript:;">MT5 Windows</a></li>
          <li><a href="javascript:;">MT5 Android/iOS</a></li>
          <li><a href="javascript:;">MT4 Web Version</a></li>
          <li><a href="javascript:;">MT5 Web Version</a></li>
          <li><a href="javascript:;">Acuity</a></li>
          <li><a href="javascript:;">Social Trading</a></li>
        </ul>
      </div>
      <div class="the-footer-divider"></div>
      <div class="pl-6 w-52">
        <h4 class="font-700 pt-.5 tracking-[-0.03em]">Markets</h4>
        <ul class="text-sm flex flex-col gap-[0.2rem] font-700">
          <li><a href="javascript:;">Forex</a></li>
          <li><a href="javascript:;">Stocks</a></li>
          <li><a href="javascript:;">INDICES</a></li>
          <li><a href="javascript:;">Energy</a></li>
          <li><a href="javascript:;">Precious Metals</a></li>
          <li><a href="javascript:;">Cryptocurrency CRYPTO</a></li>
        </ul>
      </div>
      <div class="the-footer-divider"></div>
      <div class="pl-6 w-64">
        <h4 class="font-700 pt-.5 tracking-[-0.03em]">Tools</h4>
        <ul class="text-sm flex flex-col gap-[0.2rem] font-700">
          <li><a href="javascript:;">Market Analyst</a></li>
          <li><a href="javascript:;">Markets News External Access</a></li>
          <li><a href="javascript:;">News</a></li>
          <li><a href="javascript:;">Trading Calculator</a></li>
          <li><a href="javascript:;">VPS</a></li>
        </ul>
      </div>
      <div class="the-footer-divider"></div>
      <div class="pl-6 w-52">
        <h4 class="font-700 pt-.5 tracking-[-0.03em]">Company</h4>
        <ul class="text-sm flex flex-col gap-[0.2rem] font-700">
          <li><a href="javascript:;">About GVD</a></li>
          <li><a href="javascript:;">Why GVD</a></li>
          <li><a href="javascript:;">Honors and Award</a></li>
          <li><a href="javascript:;">Brand milestones</a></li>
          <li><a href="javascript:;">Legal Notices</a></li>
          <li><a href="javascript:;">Contact Us</a></li>
          <li><a href="javascript:;">Career</a></li>
          <li><a href="javascript:;">FAQ</a></li>
        </ul>
      </div>
      <div class="the-footer-divider"></div>
      <div class="pl-6 w-40">
        <h4 class="font-700 pt-.5 tracking-[-0.03em]">Partnership</h4>
        <ul class="text-sm flex flex-col gap-[0.2rem] font-700">

        </ul>
      </div>
    </div>
    <div class="text-sm font-600 line-height-3.12 pt-10 md:pt-1 px-6 md:px-0">
      <strong class="mr-1 font-700">Risk Warning:</strong>
      <span class="text-xs tracking-[0.01em]">The above entities are officially authorized to conduct operational activities under the GVD Markets brand. Margin trading carries high risks and may not be suitable for all investors. Before deciding to trade forex, you should carefully consider your investment goals, level of experience, and risk tolerance. During the trading process, you may lose part of your investment, so if you cannot afford the loss, please do not invest. You should be aware of all the risks associated with forex trading, and if you have any questions, please ask advice for an independent financial advisor.</span>
      <br>
      <strong class="mr-1 font-700">Restricted areas:</strong>
      <span  class="text-xs tracking-[0.01em]">GVD Markets cannot provide services to residents of specific countries/regions, such as Israel, the Islamic Republic of Iran, and war-torn countries.</span>

    </div>
  </div>
</div> 
  `
})
.use(i18n)
.mount('#the-footer')

// console.log('vue', Vue)
// console.log('vue', VueI18n)