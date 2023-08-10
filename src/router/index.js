import {createRouter, createWebHistory} from "vue-router";
import Index from "@/template/index.vue";
import insideRoutes from "@/router/insideRoutes";
import outsideRoutes from "@/router/outsideRoutes";
import {addParentPath} from "@/tools/BasicFnSupport";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [{
        /*404*/
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('@/pages/NotFoundPage.vue')
    }, {
        path: '/admin',
        name: 'admin',
        component: Index,
        children: addParentPath(insideRoutes, '/admin'),
        redirect: '/admin/index'
    }, ...outsideRoutes]
})
console.log(router.getRoutes())
/*const whiteList = toRoutesPath(outsideRoutes)
router.beforeEach((to, from, next) => {
    if (whiteList.includes(to.path)) {
        next()
    } else {
        next({path: '/login'})
    }
})*/
export default router
