<template>
    <form @submit.prevent="signUp">
        <label for="email">
            Email:
            <input type="email" name="email" id="email" v-model="email">
        </label>
        <label for="email">
            Password:
            <input type="password" name="password" id="password" v-model="password">
        </label>
        <label for="confirm">
            Email:
            <input type="password" name="confirmPassword" id="confirm" v-model="confirmPassword">
        </label>

        <button type="submit">Registrar</button>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';

import { supabase } from '../lib/supabase-client';

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

    if (!error) router.push({ name: '/login' })
}
</script>
../lib/supabase