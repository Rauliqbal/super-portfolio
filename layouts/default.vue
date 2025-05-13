<script setup lang='ts'>
import gsap from 'gsap';
import Lenis from '@studio-freight/lenis'
import ScrollTrigger from 'gsap/ScrollTrigger';

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
      const lenis = new Lenis();
      lenis.on('scroll', ScrollTrigger.update)
      gsap.ticker.add((time)=>{
        lenis.raf(time * 1000)
      })
      gsap.ticker.lagSmoothing(0)

     
})
</script>

<template>
  <LayoutNavbar/>
  <main class="overflow-hidden relative">
    <slot/>
    <div class="bg-gradient-to-t from-dark to-transparent  fixed bottom-0 inset-x-0 h-24 z-50"></div>
  </main>
</template>
