<script setup lang="ts">
import { CustomSheet } from "@/components/CustomSheet";

const { isOpen, close } = useContactSheet();
</script>

<template>
  <div class="bg-background">
    <div class="max-w-5xl mx-auto min-h-screen md:flex md:items-start">
      <AppNav />
      <div class="flex-1 min-w-0">
        <main>
          <slot />
        </main>
        <AppFooter />
      </div>
    </div>
    <CustomSheet.Contact :open="isOpen" @update:open="(v) => !v && close()" />
  </div>
</template>
