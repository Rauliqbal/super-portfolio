<script setup lang="ts">
</script>

<template>
  <div class="container py-40">
    <p class="badge">{{ HERO.badge }}</p>
    <h1 class="max-w-4xl text-6xl text-white font-semibold mt-4 leading-snug">
      {{ HERO.headline }}
    </h1>
    <p class="desc mt-4 max-w-xl">
      {{ HERO.subline }}
    </p>
    <div class="flex gap-4 items-center mt-8">
     <Button label="View Work" to="#work" />
     <Button label="Contact Me" to="#contact"  variant="btn-dark"/>
    </div>


    <!-- Selected Work -->
    <div class="w-full inline-flex flex-nowrap relative overflow-hidden mt-16">
        <div class="h-full w-24 bg-gradient-to-r from-black to-transparent left-0 inset-y-0 absolute z-10"></div>
        <div class="h-full w-24 bg-gradient-to-l from-black to-transparent right-0 inset-y-0 absolute z-10"></div>
    <ul class="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll">
        <li>
            <img class="h-[300px] rounded-xl" src="https://sfveuafbpwhmzfiorbis.supabase.co/storage/v1/object/public/project/azurakit-preview.png" alt="Facebook" />
        </li>
        <li>
            <img class="h-[300px] rounded-xl" src="https://sfveuafbpwhmzfiorbis.supabase.co/storage/v1/object/public/project/azurakit-preview.png" alt="Disney" />
        </li>
        <li>
            <img class="h-[300px] rounded-xl" src="https://sfveuafbpwhmzfiorbis.supabase.co/storage/v1/object/public/project/azurakit-preview.png" alt="Airbnb" />
        </li>
        <li>
            <img class="h-[300px] rounded-xl" src="https://sfveuafbpwhmzfiorbis.supabase.co/storage/v1/object/public/project/azurakit-preview.png" alt="Apple" />
        </li>
        <li aria-hidden="true">
            <img class="h-[300px] rounded-xl" src="https://sfveuafbpwhmzfiorbis.supabase.co/storage/v1/object/public/project/azurakit-preview.png" alt="Facebook" />
        </li>
        <li aria-hidden="true">
            <img class="h-[300px] rounded-xl" src="https://sfveuafbpwhmzfiorbis.supabase.co/storage/v1/object/public/project/azurakit-preview.png" alt="Disney" />
        </li>
        <li aria-hidden="true">
            <img class="h-[300px] rounded-xl" src="https://sfveuafbpwhmzfiorbis.supabase.co/storage/v1/object/public/project/azurakit-preview.png" alt="Airbnb" />
        </li>
        <li aria-hidden="true">
            <img class="h-[300px] rounded-xl" src="https://sfveuafbpwhmzfiorbis.supabase.co/storage/v1/object/public/project/azurakit-preview.png" alt="Apple" />
        </li>
    </ul>    
</div>
  </div>
</template>
