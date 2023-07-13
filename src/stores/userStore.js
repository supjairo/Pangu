import {defineStore} from "pinia";
import {ref} from "vue";

export const useUserStore = defineStore('user', () => {
    const state = {
        name: ref(''),
        /*是否登录*/
        isLogin: ref(false),
        /*token*/
        token: ref(''),
        /*菜单*/
        menu: ref([]),
        /*权限*/
        permission: ref([]),
        /*用户信息*/
        userInfo: ref({}),
    }
    const actions = {
        /*设置用户信息*/
        setUserInfo(userInfo) {
            state.userInfo = userInfo
        }
    }

    return {...state, actions}
})
