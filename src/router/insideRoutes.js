/*
* 内部路由
* 自动挂载在/admin路由下
* 需要权限即可访问provider
* */

const insideRoutes = [
    {
        path: '/index',
        name: 'index',
        component: () => import('@/pages/admin/Index.vue')
    }, {
        path: '/user',
        name: 'user',
        component: () => import('@/pages/admin/User.vue')
    }
]
export default insideRoutes
