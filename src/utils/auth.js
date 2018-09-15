import Cookies from 'js-cookie'

const TokenKey = 'X-Access-Token'
const Identity = 'name'
const authority = 'authority'
const version = 'version'
const student = 'student'
const group = 'group'
const issue = 'issue'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getIdentity() {
  return Cookies.get(Identity)
}

export function setIdentity(token) {
  return Cookies.set(Identity, token)
}

export function removeIdentity() {
  return Cookies.remove(Identity)
}
export function getAuthority() {
  return Cookies.get(authority)
}

export function setAuthority(auth) {
  return Cookies.set(authority, auth)
}

export function removeAuthority() {
  return Cookies.remove(authority)
}
export function getVersion() {
  return Cookies.get(version)
}

export function setVersion(data) {
  return Cookies.set(version, data)
}

export function removeVersion() {
  return Cookies.remove(version)
}

export function getStudent() {
  const word = Cookies.get(student)
  if (word === '""' || !word) {
    return {}
  } else {
    return JSON.parse(word)
  }
}

export function getGroup() {
  const word = Cookies.get(group)
  if (word === '""' || !word) {
    return {}
  } else {
    return JSON.parse(word)
  }
}

export function getIssue() {
  const word = Cookies.get(issue)
  if (word === '""' || !word) {
    return []
  } else {
    return JSON.parse(word)
  }
}
