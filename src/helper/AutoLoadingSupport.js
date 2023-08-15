const config = import.meta.glob('../template/*/config.js');
/*遍历template读取所有文件*/
const menuFiles = import.meta.glob('../template/*/header/menu/*.vue');
import {shallowRef} from "vue";
/*
* 模板config文件读取器
* @param theme 模板名称
* @param exName 需要读取的名
* @return Promise
* 注意
* 1. 读取的js文件必须是export default {}
* 2. 读取模板路径为 ../template/${theme}/config.js
* */
export const readConfig = (theme, exName) => {
    /*判断防止空指针*/
    if (config[`../template/${theme}/config.js`]) {
        /*读取对应的Config文件中对应name的参数*/
        return config[`../template/${theme}/config.js`]().then((res) => {
            /*读取对应的Menu文件*/
            return res.default[exName]
        })
    } else {
        console.log('您已经装载了一个不存在的模板,请排查')
        return Promise.resolve([])
    }
}
/*
* 模板Menu文件加载器
* 所有Menu文件必须在 ../template/${theme}/header/menu/*.vue
* @param theme 模板名称
* @return Promise
 */
export const loadMenu = (template, Array) => {
    /*防止空指针*/
    return Promise.all(Array.map((item) => {
        if (menuFiles[`../template/${template}/header/menu/${item.component}.vue`]) {
            return menuFiles[`../template/${template}/header/menu/${item.component}.vue`]().then((res) => {
                item.component = shallowRef(res.default)
                return item
            })
        } else {
            console.log('您已经装载了一个不存在的组件,请排查')
            return Promise.resolve(item)
        }
    }))
}
