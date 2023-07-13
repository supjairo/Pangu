/*@作者:Jairo
* @创建日期:2023年7月13日
* @功能说明:工具集解决应用加载时的一些基本问题
* */

/*
* @功能说明:将路由数组转换为路由路径数组
* @参数:routes:路由数组
* @返回值:路由路径数组
* @创建日期:2023年7月13日
* @作者:Jairo
* */
export const toRoutesPath = (routes) => {
    let routesPath = []
    routes.forEach((route) => {
        if (route.path) {
            routesPath.push(route.path)
        }
        if (route.children) {
            routes.concat(toRoutesPath(route.children)).forEach((path) => routesPath.push(path))
        }
    })
    console.log(routesPath)
    return routesPath
}
/*
* @功能说明:将子路由path加上父路由path
* @参数:routes:路由数组,父路由path
* @返回值:路由数组
* @创建日期:2023年7月13日
* @作者:Jairo
* */
export const addParentPath = (routes, parentPath) => {
    routes.forEach((route) => {
        if (route.path) {
            route.path = parentPath + route.path
        }
        if (route.children) {
            addParentPath(route.children, parentPath)
        }
    })
    return routes
}
