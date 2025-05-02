<script setup lang='ts'>
</script>

<template>
  <LayoutNavbar/>
  <main class="overflow-hidden relative">
    <slot/>

    <div class="bg-gradient-to-t from-dark to-transparent  fixed bottom-0 inset-x-0 h-24 z-50"></div>
  </main>
</template>