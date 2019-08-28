import http from '@/utils/request'
//注册
export function register(params) {
  console.log(params,'params....')
  return http.post('/emstu/teacher/register',params)
}