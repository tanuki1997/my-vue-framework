import http from '../http'


// 登录
export const login = data => {
  return http.fetchGet('/admin/login', data)
}

// 登出
export const logout = (data) => {
  return http.fetchGet('/admin/logout', data)
}
