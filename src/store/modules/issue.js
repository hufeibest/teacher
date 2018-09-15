import Cookies from 'js-cookie'
import { getIssue } from '@/utils/auth'

const issue = {
  state: {
    issue: getIssue()
  },
  mutations: {
    SetIssue: (state, data) => {
      state.issue = data
      Cookies.set('issue', JSON.stringify(state.issue))
    }
  },
  actions: {
    setIssue: ({ commit }, data) => {
      commit('SetIssue', data)
    }
  }
}

export default issue
