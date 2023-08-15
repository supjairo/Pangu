import {defineStore} from "pinia";
/*选项API*/
export const useAppState = defineStore('userState', {
    state: () => ({
        apps: [{
            id: 1,
            name: 'music',
            play: false,
            cover: 'https://www.beacon-fire.com/zhangjie.webp',
            author: '张杰',
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
