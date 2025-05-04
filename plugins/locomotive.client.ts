import LocomotiveScroll from "locomotive-scroll";

export default defineNuxtPlugin((nuxtApp) => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]") as HTMLElement,
    smooth: true,
  });

  nuxtApp.provide("locomotive", scroll);
});
