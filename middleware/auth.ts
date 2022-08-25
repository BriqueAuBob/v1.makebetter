import { useAuthStore } from '@/store/auth';

export default defineNuxtRouteMiddleware((to, from) => {
    if(process.server) return;
    if(!localStorage.getItem('access_token')) {
        return navigateTo(from.name === 'account' ? '/' : from);
    }
})