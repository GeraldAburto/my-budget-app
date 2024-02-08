import { createRouter, createWebHistory } from 'vue-router/auto'

import { supabase } from '../lib/supabase-client'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
})

const unprotectedRoutes: string[] = ['/login', '/sign-up']

router.beforeEach(async (to, _from, next) => {
    const { data: { session } } = await supabase.auth.getSession()
    if(!unprotectedRoutes.includes(to.name as string) && session === null) next({ name: '/login' })
    else next()
})

export default router
