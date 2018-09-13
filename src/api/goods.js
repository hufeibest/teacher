import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/goods/types/upsert', // 产品分类添加
    method: 'post',
    data: {
      mobile: username,
      pass: password
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function upsertGoods(data) {
  return request({
    url: '/goods/upsert',
    method: 'post',
    data: data
  })
}

export function goodsList(data) {
  return request({
    url: '/goods/list',
    method: 'post',
    data: data
  })
}

export function goodsDelete(id) {
  return request({
    url: '/goods/delete/' + id,
    method: 'delete'
  })
}

export function goodsTypesList() {
  return request({
    url: '/goods/types/list',
    method: 'get'
  })
}

export function upsertGoodsType(name, id) {
  return request({
    url: '/goods/types/upsert',
    method: 'post',
    data: {
      name: name || null,
      id: id || null
    }
  })
}

export function deleteGoodsType(id) {
  return request({
    url: '/goods/types/delete/' + id,
    method: 'delete'
  })
}

export function upsertGoodsInventor(data) {
  return request({
    url: '/goods/inventory',
    method: 'post',
    data: data
  })
}

export function warehouse() {
  return request({
    url: '/goods/warehouse',
    method: 'get'
  })
}
