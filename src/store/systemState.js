import {defineStore} from "pinia";

export const useSystemState = defineStore('systemState', {
    state: () => ({
        theme: 'default',
        mode: 'light',
        menuPath: '/header/menu',
        pluginPath: '/home',
        isMobile: false,
    }), getters: {}, actions: {
        setTheme(theme) {
            this.theme = theme
        },
        setMode(mode) {
            this.mode = mode
        },
        setIsMobile(isMobile) {
            this.isMobile = isMobile
        }
    }
})

