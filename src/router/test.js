/**
 * Created by mcqueen on 2017-11-09.
 */
import Layout from '../views/layout/Layout'
const issue = [{
  path: '/issueList',
  component: Layout,
  name: 'Dashboard',
  meta: { title: '问题列表', icon: 'list' },
  children: [{
    path: 'issue',
    meta: { title: '设置问题', icon: 'list' },
    component: () => import('@/views/issue/index')
  }, {
    path: 'list',
    meta: { title: '问题列表', icon: 'list' },
    component: () => import('@/views/test/index')
  }]
}]

export default issue
