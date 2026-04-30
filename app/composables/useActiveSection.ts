export const useActiveSection = () => {
  const activeSection = ref<string>("about");

  onMounted(() => {
    const getSections = (): HTMLElement[] =>
      Array.from(document.querySelectorAll("section[id]"));

    const updateActive = () => {
      const sections = getSections();
      if (!sections.length) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Near the bottom of the page: always activate the last section.
      // Fixes large screens where the last section never crosses the trigger line.
      if (scrollY + windowHeight >= docHeight - 10) {
        activeSection.value = sections[sections.length - 1]!.id;
        return;
      };

      // Find the last section whose top edge has crossed 30% down the viewport.
      const triggerY = windowHeight * 0.3;
      let current = sections[0]!;

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= triggerY) {
          current = section
        };
      };

      activeSection.value = current.id
    };

    window.addEventListener("scroll", updateActive, { passive: true });
    updateActive();

    onUnmounted(() => window.removeEventListener("scroll", updateActive));
  })

  return { activeSection };
};
