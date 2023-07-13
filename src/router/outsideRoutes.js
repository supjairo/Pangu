/*
* 白名单路由
* 默认挂载到/下
* 无需权限即可访问publicRoutes
* */

const outsideRoutes = [{
    path: '/login',
    name: 'login',
    component: () => import('@/pages/public/LoginPage.vue')
}, {
    path: '/register',
    name: 'register',
    component: () => import('@/pages/public/RegisterPage.vue')
}, {
    path: '/index',
    alias: '/',
    name: 'welcome',
    component: () => import('@/pages/public/IndexPage.vue')
}
]
export default outsideRoutes
