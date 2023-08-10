import {defineStore} from "pinia";

import {shallowRef} from "vue";
/*选项API*/
export const useAppState = defineStore('userState', {
    state: () => ({
        apps: [{
            id: 1,
            name: '邮箱',
            icon: '@/assets/icons/mail.svg',
            component: 'Mail',
            active: false,
            disabled: false,
            hidden: false,
            meta: {}
        }]
    }),
    getters: {},
    actions: {
        addApp(app) {
            this.apps.push(app)
        },
        removeApp(app) {
            const index = this.apps.findIndex(item => item.id === app.id)
            this.apps.splice(index, 1)
        },
        updateApp(app) {
            const index = this.apps.findIndex(item => item.id === app.id)
            this.apps.splice(index, 1, app)
        },
        initApps(apps) {
            this.apps = apps
        }
    }
})
