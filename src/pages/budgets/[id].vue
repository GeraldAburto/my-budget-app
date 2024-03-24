<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router/auto'
import { supabase } from '../../lib/supabase-client';

const route = useRoute('/budgets/[id]')

const budget = ref<Budget>()


onBeforeMount(async () => {
    const { data } = await supabase
        .from('budgets')
        .select('id, name, description, createdAt:created_at')
        .eq('id', route.params.id)

    budget.value = data?.[0] as Budget
})

</script>

<template>
    <section>
        <div>
            <h2 class="text-2xl font-bold tracking-tight">
                Settings
            </h2>
            <p class="text-muted-foreground">
                Manage your account settings and set e-mail preferences.
            </p>
        </div>
    </section>
</template>