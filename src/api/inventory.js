import request from '@/utils/request'

export function ownApplyList(data) {
  return request({
    url: '/inventory/apply/list/own', // 我的申请列表
    method: 'post',
    data
  })
}

export function allApplyList(data) {
  return request({
    url: '/inventory/apply/list/all', // 我的申请列表
    method: 'post',
    data
  })
}

export function addInventory(data) {
  return request({
    url: '/inventory/apply', // 申请
    method: 'post',
    data
  })
}

export function cancelInventory(data) {
  return request({
    url: '/inventory/apply/check',
    method: 'post',
    data
  })
}

export function getInventoryLog(data) {
  return request({
    url: '/inventory/log',
    method: 'post',
    data: data
  })
}
