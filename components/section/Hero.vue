<script setup lang="ts"></script>

<template>
  <div id="hero" class="container relative py-40">
    <!-- Content -->
    <div class="z-10 relative flex flex-col items-center">
    <div class="badge  flex items-center gap-2"> 
      <div class="animate-pulse w-2 h-2 bg-primary rounded-full"></div> 
      <p class="text-center">{{ HERO.badge }}</p>
    </div>
    <h1
      class="max-w-4xl mx-auto text-center text-4xl md:text-5xl lg:text-6xl text-white font-bold mt-4 !leading-snug"
    >
      {{ HERO.headline }}
    </h1>
    <p class="paragraph mt-4 text-center max-w-xl mx-auto">
      {{ HERO.subline }}
    </p>
    <div class="flex gap-4 items-center mt-8">
      <Button label="View Work" to="#work" />
      <Button label="Contact Me" to="#contact" variant="btn-dark" />
    </div>
    </div>

    <!-- Selected Work -->
    <div class="w-full inline-flex flex-nowrap relative overflow-hidden mt-16">
      <div
        class="h-full w-24 bg-gradient-to-r from-dark to-transparent left-0 inset-y-0 absolute z-10"
      ></div>
      <div
        class="h-full w-24 bg-gradient-to-l from-dark to-transparent right-0 inset-y-0 absolute z-10"
      ></div>
      <ul
        class="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll hover:animate-pause"
      >
        <li v-for="item in WORK.works" class="overflow-hidden group">
          <img
            class="h-[300px] rounded-xl group-hover:scale-105 group-hover:opacity-70 transition-all"
            :src="'/images/work/' + item.thumbnails"
          />
        </li>

        <li v-for="item in WORK.works" class="overflow-hidden group" aria-hidden="true">
          <img
            class="h-[300px] rounded-xl group-hover:scale-105 group-hover:opacity-70 transition-all"
            :src="'/images/work/' + item.thumbnails"
          />
        </li>
      </ul>
     
    </div>

    <div class="absolute -top-40 right-40 rotate-45 w-14 h-[800px] bg-blue-700 blur-[100px]"></div>
    <div class="absolute top-0 left-0 w-screen h-screen index-bg">
        <div class="h-0">
            <div class="star"></div>
            <div class="star" style="top: 80px; left: 800px; animation-delay: 3s;"></div>
            <div class="star" style="top: 40px; left: 646px; animation-delay: 2s;"></div>
            <div class="star" style="top: 120px; left: 395px; animation-delay: 4s;"></div>
            <div class="star" style="top: 160px; left: 765px; animation-delay: 1s;"></div>
            <div class="star" style="top: 170px; left: 1200px; animation-delay: 2s;"></div>
            <div class="star" style="top: 200px; left: 1000px; animation-delay: 1s;"></div>
        </div>
    </div>
  </div>
</template>
<style>
        @-webkit-keyframes star-opacity {
            0% {
                opacity: 0
            }

            40% {
                opacity: 1
            }

            60% {
                opacity: 1
            }

            100% {
                opacity: 0
            }
        }

        @keyframes star-opacity {
            0% {
                opacity: 0
            }

            40% {
                opacity: 1
            }

            60% {
                opacity: 1
            }

            100% {
                opacity: 0
            }
        }

        @-webkit-keyframes star-pos {
            0% {
                transform: scale(0) rotate(0) translate3d(0, 0, 0);
                -webkit-transform: scale(0) rotate(0) translate3d(0, 0, 0);
                -moz-transform: scale(0) rotate(0) translate3d(0, 0, 0)
            }

            100% {
                transform: scale(1) rotate(0) translate3d(-450px, 450px, 0);
                -webkit-transform: scale(1) rotate(0) translate3d(-450px, 450px, 0);
                -moz-transform: scale(1) rotate(0) translate3d(-450px, 450px, 0)
            }
        }

        @keyframes star-pos {
            0% {
                transform: scale(0) rotate(0) translate3d(0, 0, 0);
                -webkit-transform: scale(0) rotate(0) translate3d(0, 0, 0);
                -moz-transform: scale(0) rotate(0) translate3d(0, 0, 0)
            }

            100% {
                transform: scale(1) rotate(0) translate3d(-450px, 450px, 0);
                -webkit-transform: scale(1) rotate(0) translate3d(-450px, 450px, 0);
                -moz-transform: scale(1) rotate(0) translate3d(-450px, 450px, 0)
            }
        }

        .index-bg .star {
            display: block;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: #fff;
            top: 100px;
            left: 400px;
            position: relative;
            -webkit-transform-origin: 100% 0;
            transform-origin: 100% 0;
            -webkit-animation: star-opacity 5s infinite ease-in, star-pos 5s infinite ease-in;
            animation: star-opacity 5s infinite ease-in, star-pos 5s infinite ease-in;
            -webkit-box-shadow: 0 0 5px 5px rgba(255, 255, 255, .3);
            box-shadow: 0 0 5px 5px rgba(255, 255, 255, .3);
            opacity: 0;
            z-index: 2
        }

        .index-bg .star:after {
            content: '';
            display: block;
            top: 0;
            left: 4px;
            border: 0 solid #fff;
            border-width: 0 90px 2px;
            border-color: transparent transparent transparent rgba(255, 255, 255, .3);
            -webkit-transform: rotate(-45deg) translate3d(1px, 3px, 0);
            transform: rotate(-45deg) translate3d(1px, 3px, 0);
            -webkit-box-shadow: 0 0 1px 0 rgba(255, 255, 255, .1);
            box-shadow: 0 0 1px 0 rgba(255, 255, 255, .1);
            -webkit-transform-origin: 0% 100%;
            transform-origin: 0% 100%
        }
    </style>
