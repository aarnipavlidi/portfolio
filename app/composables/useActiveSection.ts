export const useActiveSection = () => {
  const activeSection = ref<string>("about");

  onMounted(() => {
    const getSections = (): HTMLElement[] =>
      Array.from(document.querySelectorAll("section[id]"));

    const updateActive = () => {
      const sections = getSections();
      if (!sections.length) return;

      const { scrollY } = window;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Near the bottom of the page: always activate the last section.
      // Fixes large screens where the last section never crosses the trigger line.
      const SCROLL_BOTTOM_THRESHOLD = 10;
      if (scrollY + windowHeight >= docHeight - SCROLL_BOTTOM_THRESHOLD) {
        const LAST_SECTION_INDEX = sections.length - 1; // eslint-disable-line no-magic-numbers
        activeSection.value = sections[LAST_SECTION_INDEX]!.id;

        return;
      }

      // Find the last section whose top edge has crossed 30% down the viewport.
      const TRIGGER_THRESHOLD = 0.3;
      const triggerY = windowHeight * TRIGGER_THRESHOLD;
      const FIRST_SECTION_INDEX = 0;
      let current = sections[FIRST_SECTION_INDEX]!;

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= triggerY) {
          current = section;
        }
      }

      activeSection.value = current.id;
    };

    window.addEventListener("scroll", updateActive, { passive: true });
    updateActive();

    onUnmounted(() => window.removeEventListener("scroll", updateActive));
  });

  return { activeSection };
};
