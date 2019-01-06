const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  // 1、角色权限
  roles: state => state.user.roles,  
  // 2、根据权限获取的所有路由
  permissionRouters: state => state.permission.routers,
  // 3、动态添加的路由(asyncRouterMap)
  addRouters: state => state.permission.addRouters, // 添加动态访问路由
}
export default getters
