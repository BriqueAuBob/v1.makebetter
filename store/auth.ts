import axios from '@/composables/Axios'
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isAuthenticated: false,
        user: null
    }),
    getters: {
        getUser: async (state) => {
            if(state.isAuthenticated && !state.user) {
                try {
                    const { data } = await axios.get('/auth/user', {
                        headers: {
                            Authorization: 'Bearer ' + localStorage.getItem('access_token')
                        }
                    })
                    state.user = data.user
                } catch(err) {
                    state.isAuthenticated = false
                    localStorage.removeItem('access_token')
                    return
                }
            }
            return state.user;
        }
    },
    actions: {
        hasToken() {
            this.isAuthenticated = localStorage.getItem('access_token') ? true : false;
            return this.isAuthenticated
        },
        login(user, token = null) {
            this.isAuthenticated = true;
            this.user = user;
            if(token) {
                localStorage.setItem('access_token', token);
            }
        },
        logout() {
            this.isAuthenticated = false;
            this.user = null;
            localStorage.removeItem('access_token');
        }
    }
})