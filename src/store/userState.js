import {defineStore} from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        user: {},
        role: {},
        apps: {},
    }),
    getters: {},
    actions: {},
})
