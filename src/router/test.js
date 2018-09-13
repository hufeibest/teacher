/**
 * Created by mcqueen on 2017-11-09.
 */
import Layout from '../views/layout/Layout'
const dashboard = [{
  path: '/test',
  component: Layout,
  name: 'Dashboard',
  meta: { title: '测试', icon: 'list' },
  children: [{
    path: 'test',
    meta: { title: '测试', icon: 'list' },
    component: () => import('@/views/test/index')
  }, {
    path: 'test2',
    meta: { title: '测试2', icon: 'list' },
    component: () => import('@/views/test/index')
  }]
}]

export default dashboard
