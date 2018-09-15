import Cookies from 'js-cookie'
import { getStudent, getGroup } from '@/utils/auth'

const student = {
  state: {
    student: getStudent(),
    group: getGroup()
  },
  mutations: {
    SetStudent: (state, data) => {
      state.student = data
      Cookies.set('student', JSON.stringify(state.student))
    },
    SetGroup: (state, data) => {
      state.group = data
      Cookies.set('group', JSON.stringify(state.group))
    }
  },
  actions: {
    setStudent: ({ commit }, data) => {
      commit('SetStudent', data)
    },
    setGroup: ({ commit }, data) => {
      commit('SetGroup', data)
    }
  }
}

export default student
