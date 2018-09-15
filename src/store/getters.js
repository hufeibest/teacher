
const getters = {
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  name: state => state.user.name,
  username: state => state.user.username,
  password: state => state.user.password,
  roles: state => state.user.roles,
  routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  authority: state => state.user.authority,
  student: state => state.student.student,
  group: state => state.student.group,
  issue: state => state.issue.issue
}
export default getters
