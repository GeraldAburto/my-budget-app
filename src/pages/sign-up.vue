<template>
    <section class="max-w-xs mx-auto my-96">
        <AppCard>
            <AppCardHeader>
                <AppCardTitle>
                    Crea una cuenta
                </AppCardTitle>
                <AppCardDescription>
                    Ingresa tus datos para crear una cuenta.
                </AppCardDescription>
            </AppCardHeader>
            <AppCardContent>
                <form id="sign-up" @submit.prevent="signUp" class="flex flex-col space-y-4">
                    <div>
                        <AppLabel for="email">Email:</AppLabel>
                        <AppInput id="email" type="email" placeholder="Email" v-model="email" />
                    </div>
                    <div>
                        <AppLabel for="password">Contraseña:</AppLabel>
                        <AppInput id="password" type="password" placeholder="Password" v-model="password" />
                    </div>
                    <div>
                        <AppLabel for="confirm-password">Confirmar Contraseña:</AppLabel>
                        <AppInput id="confirm-password" type="password" placeholder="Password" v-model="confirmPassword" />
                    </div>
                </form>
            </AppCardContent>
            <AppCardFooter class="flex flex-col items-start gap-y-3">
                <AppButton type="submit" form="sign-up">
                    Entrar
                </AppButton>
                <AppSeparator />
                <p class="text-sm text-muted-foreground">Ya tienes una cuenta? <RouterLink to="/sign-in">
                        Inicia sesi&oacute;n</RouterLink>
                </p>
            </AppCardFooter>
        </AppCard>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';

import { AppCard, AppCardHeader, AppCardTitle, AppCardDescription, AppCardContent, AppCardFooter } from '../components/ui/AppCard'
import { supabase } from '../lib/supabase-client'
import AppButton from '../components/ui/AppButton.vue'
import AppLabel from '../components/ui/AppLabel.vue'
import AppInput from '../components/ui/AppInput.vue'
import AppSeparator from '../components/ui/AppSeparator.vue'

const router = useRouter()

const email = ref<string>('')
const password = ref<string>('')
const confirmPassword = ref<string>('')

async function signUp() {
    if (password.value !== confirmPassword.value) return alert('Password do not match.')

    const { error } = await supabase.auth.signUp({
        email: email.value,
        password: password.value
    })

    if (!error) router.push({ name: '/sign-in' })
}
</script>
