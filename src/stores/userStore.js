import {defineStore} from "pinia";
import {ref} from "vue";

export const useUserStore = defineStore('user', () => {
    const state = ref({
        userInfo: {
            name: '张三',
            avatar: 'https://avatars.githubusercontent.com/u/20692161?v=4',
            email: '123@qq.com',
            phone: '12345678901',
            address: '北京市海淀区'
        }
    })
    const actions = {
        changeName(name) {
            state.value.userInfo.name = name
        }
    }
    return {
        ...state.value,
        ...actions
    }
})
