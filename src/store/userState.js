import {defineStore} from "pinia";
import {useSystemState} from "@/store/systemState";
import {loadMenu, readConfig} from "@/helper/AutoLoadingSupport";

export const useUserStore = defineStore('user', {
    state: () => ({
        user: {
            id: 0,
            name: '',
            nickname: '',
            email: '',
            avatar: '',
            status: 0,
            created_at: '',
            updated_at: '',
            token: '',
            isLogin: false,
        }, /*权限*/
        roles: [{
            id: 0, name: '', display_name: '', description: '', created_at: '', updated_at: '',
        }, {
            id: 0, name: '', display_name: '', description: '', created_at: '', updated_at: '', lastLogin_at: '',
        }], /*菜单*/
        menus: [{
            id: 0,
            name: '',
            description: '',
            isShow: true,
            component: 'MailPanel',
        }]
    }), getters: {}, actions: {
        setMockUser() {
            this.user = {
                id: 1,
                name: 'admin',
                nickname: 'admin',
                email: '981110007@qq.com',
                avatar: 'https://www.beacon-fire.com/wp-content/uploads/thumb/2023/07/fill_w192_h192_g0_mark_1688697512-%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230707103817_1_avatar_iH5Tl19355.jpg',
                status: 1,
                created_at: '2021-09-14 16:24:18',
                updated_at: '2021-09-14 16:24:18',
                lastLogin_at: '2021-09-14 16:24:18',
                token: 'DASDd554s54fs5a4d5',
                isLogin: true,
            }
        }, setMockRoles() {
            this.roles = [{
                id: 1,
                name: 'admin',
                display_name: '管理员',
                description: '管理员',
                created_at: '2021-09-14 16:24:18',
                updated_at: '2021-09-14 16:24:18',
            }, {
                id: 2,
                name: 'user',
                display_name: '普通用户',
                description: '普通用户',
                created_at: '2021-09-14 16:24:18',
                updated_at: '2021-09-14 16:24:18',
            }]
        }, setMockMenus() {
            const systemState = useSystemState()
            /*公共菜单配置文件读取*/
            readConfig(systemState.theme, 'menus').then((res) => {
                /*模板目录加载*/
                loadMenu(systemState.theme, res).then((result) => {
                    this.menus = result
                })
            })
            /*远程菜单配置文件读取*/

        },
        /*隐藏菜单*/
        hideMenu(id) {
            this.menus.forEach((item) => {
                if (item.id === id) {
                    item.isShow = false
                }
            })
        },
        /*显示菜单*/
        showMenu(id) {
            this.menus.forEach((item) => {
                if (item.id === id) {
                    item.isShow = true
                }
            })
        }
    },
})
