<template>
    <section class="max-w-xs mx-auto my-96">
        <AppCard>
            <AppCardHeader>
                <AppCardTitle>
                    Inicia Sessión
                </AppCardTitle>
                <AppCardDescription>
                    Ingresa tus datos para acceder.
                </AppCardDescription>
            </AppCardHeader>
            <AppCardContent>
                <form id="login" @submit.prevent="login" class="flex flex-col space-y-4">
                    <div>
                        <AppLabel for="email">Email:</AppLabel>
                        <AppInput id="email" type="email" placeholder="Email" v-model="email" />
                    </div>
                    <div>
                        <AppLabel for="password">Contraseña:</AppLabel>
                        <AppInput id="password" type="password" placeholder="Password" v-model="password" />
                    </div>
                </form>
            </AppCardContent>
            <AppCardFooter>
                <AppButton type="submit" form="login">
                    Entrar
                </AppButton>
            </AppCardFooter>
        </AppCard>
    </section>
</template>

<script setup lang="ts">
import { defineModel } from 'vue'
import { useRouter } from 'vue-router'

import { AppCard, AppCardHeader, AppCardTitle, AppCardDescription, AppCardContent, AppCardFooter } from '../components/ui/AppCard'
import { supabase } from '../lib/supabase-client'
import AppButton from '../components/ui/AppButton.vue'
import AppLabel from '../components/ui/AppLabel.vue'
import AppInput from '../components/ui/AppInput.vue'

const router = useRouter()

const email = defineModel<string>('email', { default: '' })
const password = defineModel<string>('password', { default: '' })

async function login() {
    const { error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value
    })

    if (!error) router.push({ name: '/' })
}
</script>
../lib/supabase