import request from '@/utils/request'

export function getAccountList(data) {
  return request({
    url: '/admins/list',
    method: 'post',
    data
  })
}

export function addAccount(data) {
  return request({
    url: '/admins/upsert',
    method: 'post',
    data
  })
}

export function delAccount(data) {
  return request({
    url: '/admins/delete/' + data,
    method: 'delete'
  })
}
