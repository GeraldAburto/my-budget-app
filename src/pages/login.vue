<template>
    <form @submit.prevent="login">
        <label for="email">
            Email:
            <input type="email" name="email" id="email" v-model="email">
        </label>
        <label for="email">
            Password:
            <input type="password" name="password" id="password" v-model="password">
        </label>

        <button type="submit">Entrar</button>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { supabase } from '../lib/supabase-client'

const router = useRouter()

const email = ref<string>('')
const password = ref<string>('')

async function login() {
    const { error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value
    })

    if (!error) router.push({ name: '/' })
}
</script>
../lib/supabase