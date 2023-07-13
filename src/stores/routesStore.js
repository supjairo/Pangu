import {ref} from "vue";
import {defineStore} from "pinia";
import routes from "~pages";

export const useRoutesStore = defineStore('routes', () => {
    const routesList = ref([{
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('@/pages/NotFoundPage.vue')
    }])
    const setRoutes = () => {
        routesList.value = routes
    }
    return {routesList, setRoutes}
})
