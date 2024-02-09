<script setup lang="ts">
import TheNav from '../components/TheNav.vue'
import TheSideBar from '../components/TheSideBar.vue'
</script>

<template>
  <div class="grid grid-cols-main-layout min-h-full max-h-full overflow-hidden">
    <TheSideBar class="col-start-1 col-end-2" />
    <main class="grid grid-rows-main-layout col-start-2 col-end-3 overflow-y-auto">
      <TheNav class="row-span-1" />
      <slot />
    </main>
  </div>
</template>