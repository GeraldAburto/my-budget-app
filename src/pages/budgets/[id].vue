<script setup lang="ts">
import { useRoute } from 'vue-router/auto'

const route = useRoute('/budgets/[id]')
</script>

<template>
    Budget #{{ route.params.id }}
</template>