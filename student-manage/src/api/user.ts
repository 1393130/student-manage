import http from '@/utils/request'
//注册
export function register(params:object) {
  return http.post('teacher/register',params)
}
//登录
export function getLogin(params:object) {
  return http.post('teacher/login',params)
}