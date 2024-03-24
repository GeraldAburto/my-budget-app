<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router/auto'

import TheSidebar from '../components/TheSidebar.vue';

const route = useRoute()

const routesWithoutSideBar: string[] = ['/sign-in', '/sign-up']

const withoutSideBar = computed(() => routesWithoutSideBar.some((r) => route.path.includes(r)))
</script>

<template>
  <main v-if="withoutSideBar">
    <slot />
  </main>
  <div v-else class="grid grid-cols-main-layout min-h-full max-h-full overflow-hidden">
    <TheSidebar class="col-start-1 col-end-2" />
    <main class="flex col-start-2 col-end-3 overflow-y-auto p-3.5">
      <slot />
    </main>
  </div>
</template>