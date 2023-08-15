/*模板配置文件
* 内容仅加载于初始化文件使用
* 如需动态修改state，请按照案例使用对应的store
* */

export default {
    /*头部左侧菜单配置
    * 动态控制显隐使用userStore.menus
    * */
    menus: [
        {
            id: 1, name: '音乐', description: '音乐', isShow: true, component: 'musicPlay',
        },
        {
            id: 0, name: '应用', description: '应用', isShow: true, component: 'appsPanel',
        },
        /*消息*/
        {
            id: 4, name: '消息', description: '消息管理', isShow: true, component: 'messagePanel',
        },
        /*用户卡片*/
        {
            id: 3, name: '用户', description: '用户信息', isShow: true, component: 'userPanel',
        },
    ],
}
