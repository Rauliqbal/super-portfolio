<script setup lang='ts'>
</script>

<template>
  <section class="container">
    
    <div class="grid items-center grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Content -->
      <div>
        <p class="badge">{{ ABOUT.label }}</p>
        <h2
      class="max-w-[700px] text-2xl md:text-3xl lg:text-4xl text-white font-semibold mt-4 !leading-snug"
    >
      {{ PROFILE.fullname }}
    </h2>

    <p class="desc mt-4" v-for="intro in ABOUT.introduce">
      {{intro}}
    </p>

    <Button class="mt-8" label="Connect Me" to="#contact" variant="btn-dark"/>
      </div>      

      <!-- Image -->
       <div class="card">
        <img class="rounded-lg" :src="PROFILE.avatar" :alt="`${PROFILE.fullname} - ${PROFILE.role}`"/>
        <!-- Remove if u want -->
        <p class="absolute text-white/20 font-medium p-2">Photo by <a href="https://unsplash.com/@sooprun?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Alex Suprun</a> on <a href="https://unsplash.com/photos/a-man-standing-in-front-of-a-purple-wall-1RAZcvtAxkk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        </p>
       </div>
    </div>
  </section>
</template>