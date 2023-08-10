/*
* @Param path: 要遍历的目录路径
* @Param data: Array, 遍历的数据结构
* @Param deep: Number, 遍历的深度
* @Return: Array, 返回遍历后的数据结构
* */
import {useSystemState} from "@/store/systemState";
import {defineAsyncComponent, shallowRef} from "vue";

export const loadingFiles = (path, data) => {
    const systemState = useSystemState()
    data.forEach((item, index) => {
        if (item.isShow) {
            item.component = shallowRef(_toComponent(systemState.theme, path, item.component))
        } else {
            console.log('未显示的菜单:' + item.name)
        }
    })
}
/*
* @Param path: 模板目录加载工具
* @Param theme: 要拼接的主题
* @Param path: 要拼接的路径
* */

const _toComponent = (theme, path, file) => {
    try {
        return defineAsyncComponent(() => import('../template/' + theme + path + '/' + file + '.vue'))
    } catch (e) {
    }
}
