
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { KanbanSquare, ArchiveX, MoreHorizontal } from 'lucide-vue-next'
import { User } from '@supabase/supabase-js'

import AppButton from './ui/AppButton.vue'
import { supabase } from '../lib/supabase-client'

const budgets = ref<Budget[]>()

onMounted(async () => {
    const { data } = await supabase
        .from('budgets')
        .select('id, name, description, createdAt:created_at')
        .order('created_at')

    budgets.value = data as Budget[]
})

const user = ref<User | null>()

onMounted(async () => {
    const { data } = await supabase.auth.getUser()
    user.value = data?.user
})
</script>

<template>
    <div class="h-full px-3 bg-gray-100 grid grid-rows-[1fr_2rem] overflow-y-hidden border-r">
        <nav class="flex flex-col">
            <div class="pt-3.5 sticky">
                <AppButton class="w-full">
                    <KanbanSquare class="w-4 h-4 mr-2" /> Nuevo Presupuesto
                </AppButton>
            </div>
            <ol v-show="budgets?.length" class="mt-5 ">
                <li v-for="budget of budgets" :key="budget.id" class="group relative rounded-lg">
                    <AppButton variant="ghost" as-child class="w-full p-2 justify-start">
                        <RouterLink :to="`/budgets/${budget.id}`"
                            class="relative grow overflow-hidden whitespace-nowrap text-left">
                            {{ budget.name }}
                            <div class="absolute bottom-0 right-0 top-0 w-8 group-hover:w-20">
                            </div>
                        </RouterLink>
                    </AppButton>
                    <div class="absolute bottom-0 right-0 top-0 items-center gap-1.5 pr-2 hidden group-hover:flex">
                        <!-- TODO: Add menu and archive button functionality -->
                        <AppButton variant="ghost" size="icon">
                            <MoreHorizontal class="w-4 h-4" />
                        </AppButton>
                        <AppButton variant="ghost" size="icon">
                            <ArchiveX class="w-4 h-4" />
                        </AppButton>
                    </div>
                </li>
            </ol>
        </nav>
        <div class="flex flex-col items-center">
            {{ user?.email }}
        </div>
    </div>
</template>