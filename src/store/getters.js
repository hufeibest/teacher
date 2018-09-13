const getters = {
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  name: state => state.user.name,
  roles: state => state.user.roles,
  routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  authority: state => state.user.authority
}
export default getters
