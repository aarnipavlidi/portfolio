<script setup lang="ts">
import { Github, Linkedin } from "lucide-vue-next";
import { cn } from "@/lib/utils";

const { activeSection } = useActiveSection();

const navItems = [
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
]

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (!el) return
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior: "smooth" })
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}
</script>

<template>
  <!-- Mobile: in-flow top header -->
  <header class="flex flex-col w-full px-4 pt-4 bg-background md:hidden">

    <!-- Row 1: AP. + Avatar -->
    <div class="flex items-center justify-between mb-4">
      <button
        @click="scrollToTop"
        class="font-mono font-bold text-primary text-lg leading-none"
        aria-label="Back to top"
      >
        AP.
      </button>
      <img
        src="/avatar.webp"
        alt="Aarni Pavlidi"
        width="48"
        height="48"
        class="w-12 h-12 rounded-full object-cover object-top"
      />
    </div>

    <!-- Row 2: Nav links horizontal -->
    <nav class="flex gap-4 overflow-x-auto pb-4" aria-label="Page sections">
      <button
        v-for="item in navItems"
        :key="item.id"
        @click="scrollTo(item.id)"
        :class='cn(
          "font-mono text-xs tracking-widest uppercase whitespace-nowrap transition-colors duration-200",
          activeSection === item.id
            ? "text-primary font-semibold"
            : "text-muted-foreground hover:text-primary"
        )'
      >
        {{ item.label }}
      </button>
    </nav>

    <!-- Separator -->
    <div class="h-px bg-border -mx-4" />
  </header>

  <!-- Desktop: sticky left sidebar (in-flow within centered container) -->
  <aside class="hidden md:flex sticky top-0 h-screen w-55 shrink-0 flex-col pt-16 pb-8 px-8 bg-background">

    <!-- AP. + Avatar group -->
    <div class="mb-8">
      <button
        @click="scrollToTop"
        class="font-mono font-bold text-primary text-lg block mb-8 leading-none"
        aria-label="Back to top"
      >
        AP.
      </button>
      <img
        src="/avatar.webp"
        alt="Aarni Pavlidi"
        width="96"
        height="96"
        class="w-24 h-24 rounded-full object-cover object-top"
      />
    </div>

    <!-- Nav links + social icons -->
    <div class="flex flex-col flex-1">
      <nav class="flex flex-col gap-4" aria-label="Page sections">
        <button
          v-for="item in navItems"
          :key="item.id"
          @click="scrollTo(item.id)"
          :class='cn(
            "text-left font-mono text-xs tracking-widest uppercase transition-colors duration-200",
            activeSection === item.id
              ? "text-primary font-semibold"
              : "text-muted-foreground hover:text-primary"
          )'
        >
          {{ item.label }}
        </button>
      </nav>

      <!-- Social icons sit just below nav links -->
      <div class="flex items-center gap-4 pt-8">
        <a
          href="https://linkedin.com/in/aarnipavlidi"
          target="_blank"
          rel="noopener noreferrer"
          class="text-muted-foreground hover:text-foreground transition-colors duration-200"
          aria-label="LinkedIn"
        >
          <Linkedin :size="16" aria-hidden="true" />
        </a>
        <a
          href="https://github.com/AarniPavlidi"
          target="_blank"
          rel="noopener noreferrer"
          class="text-muted-foreground hover:text-foreground transition-colors duration-200"
          aria-label="GitHub"
        >
          <Github :size="16" aria-hidden="true" />
        </a>
      </div>
    </div>

  </aside>
</template>
