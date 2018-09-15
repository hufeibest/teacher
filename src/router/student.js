import Layout from '../views/layout/Layout'

const student = [{
  path: '/studentList',
  component: Layout,
  name: 'Dashboard',
  meta: { title: '学生', icon: 'list' },
  children: [{
    path: 'issue',
    meta: { title: '学生分组', icon: 'list' },
    component: () => import('@/views/student/index')
  }]
}]

export default student
