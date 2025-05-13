import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useLenisScroll = () => {
  const nuxtApp = useNuxtApp()
  const lenis = nuxtApp.$lenis as any

  ScrollTrigger.scrollerProxy(document.body, {
    scrollTop(value) {
      return arguments.length ? lenis.scrollTo(value, { immediate: true }) : lenis.scroll
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      }
    },
    pinType: document.body.style.transform ? 'transform' : 'fixed',
  })

  lenis.on('scroll', ScrollTrigger.update)

  onMounted(() => {
    ScrollTrigger.refresh()
  })
}
