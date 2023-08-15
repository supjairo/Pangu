/*模板配置文件
* 内容仅加载于初始化文件使用
* 如需动态修改state，请按照案例使用对应的store
* */

export default {
    /*头部菜单配置
    * 动态控制显隐使用userStore.menus
    * */
    menus: [
        {
            id: 1, name: '邮箱', description: '网易邮箱', isShow: true, component: 'mailPanel',
        },
        {
            id: 2, name: '文件', description: '文件管理', isShow: true, component: 'filePanel',
        },
        /*消息*/
        {
            id: 4, name: '消息', description: '消息管理', isShow: true, component: 'messagePanel',
        },
        /*用户卡片*/
        {
            id: 3, name: '用户', description: '用户信息', isShow: true, component: 'userPanel',
        },
    ]
}
