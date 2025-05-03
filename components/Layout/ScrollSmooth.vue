<script setup lang="ts">
const el = ref(null)
const { isVisible } = useInView(el)
</script>

<template>
  <div ref="el" :class="{ 'animate-fade': isVisible }">
    <slot/>
</div>
</template>

<style scoped>
.animate-fade {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.9s ease;
}
div {
  opacity: 0;
  transform: translateY(20px);
}
</style>
