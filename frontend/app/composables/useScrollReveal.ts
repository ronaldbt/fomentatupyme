export function useScrollReveal(selector = '.scroll-reveal') {
  onMounted(() => {
    if (!import.meta.client) return
    const nodes = document.querySelectorAll(selector)
    if (!nodes.length) return

    if (!('IntersectionObserver' in window)) {
      nodes.forEach((el) => el.classList.add('scroll-reveal--in'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-reveal--in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    nodes.forEach((el) => io.observe(el))
  })
}
