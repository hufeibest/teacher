import { version } from '@/utils/static'
import { getToken, setToken, removeToken, setIdentity, removeIdentity, getIdentity, removeAuthority, setAuthority, getAuthority, setVersion } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    name: getIdentity(),
    roles: [],
    authority: getAuthority(),
    username: 'du',
    password: '123456'
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_AUTH: (state, authority) => {
      state.authority = authority
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      // const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        const data = userInfo
        setToken(data.token)
        setVersion(version())
        setIdentity(data.name)
        setAuthority(data.mgr_type)
        commit('SET_TOKEN', data.token)
        commit('SET_ROLES', [data.name])
        commit('SET_NAME', data.name)
        commit('SET_AUTH', data.mgr_type)
        resolve(userInfo)
      })
    },
    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        commit('SET_TOKEN', '')
        removeToken()
        removeIdentity()
        removeAuthority()
        resolve()
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
        removeAuthority()
      })
    }
  }
}

export default user
