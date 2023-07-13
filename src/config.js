/*
* @Author: Jairo
* @Date: 2021-07-13 16:04:02
* @Last Modified by: Jairo
* @Last Modified time: 2021-07-13 16:04:02
* @Description:项目全局配置工具
* */
//项目信息版本配置
export const config = {
    /*项目名称*/
    name: 'Jairo',
    /*项目版本*/
    version: '1.0.0',
    /*项目描述*/
    description: 'A simple vue3 project'
}

//项目api配置
export const apiConfig = {
    /*api基础路径*/
    baseURL: "http://localhost:3000/api",
    /*api请求超时时间*/
    timeout: 5000,
    /*线上使用反代还是直接使用明文接口地址
    * true:使用反代
    * false:使用明文接口地址
     */
    proxy: true,
    /*反代地址*/
    proxyURL: "http://localhost:3000/api"
}
