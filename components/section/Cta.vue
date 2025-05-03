<script setup>
</script>

<template>
  <section class="max-w-5xl mx-auto px-4 lg:px-0">
    <div class="mesh-gradient flex items-center flex-col rounded-3xl border bg-[#0b061a] border-white/10 p-10 relative">
        <h2 class="text-center !max-w-xl section-title ">{{ CTA.label }}</h2>
        <p class="paragraph max-w-xl text-center mt-8">
          {{ CTA.description }}
        </p>
        <Button class="mt-10" variant="btn-primary" label="Start Collaboration"/>

        <div
          class="absolute  bottom-0 w-60 h-[1px] z-10 bg-gradient-to-r from-[#0b50e5]/0 via-[#0b50e5] to-[#0b50e5]/0 ADAWDDWDAWDAWD"
        ></div>
        <div class="-z-10 absolute bottom-4 w-96 bg-[#0b50e5] rounded-full blur-2xl h-40 animate-pulse"></div>
    </div>
  </section>
</template>