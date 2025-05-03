export function useInView(targetRef: Ref<HTMLElement | null>) {
  const isVisible = ref(false)

  onMounted(() => {
    if (!targetRef.value) return

    const observer = new IntersectionObserver(([entry]) => {
      isVisible.value = entry.isIntersecting
    }, { threshold: 0.1 })

    observer.observe(targetRef.value)
  })

  return { isVisible }
}
