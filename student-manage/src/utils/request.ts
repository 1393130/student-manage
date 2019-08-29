/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-22 23:58:33
 * @LastEditTime: 2019-08-27 23:38:17
 * @LastEditors: Please set LastEditors
 */
import axios from "axios";
// import { getCookie } from "./index";
//axios.defaults.timeout = 5000 // 请求超时
const service=axios.create({
  baseURL: "http://148.70.121.59:9001",
})

service.interceptors.request.use(
  config=>{
    // if(getCookie()){
    //   config.headers['authorization']=getCookie() 
    // }
    return config
  },
  error=>{
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response=>response.data,
  error=>{
    return Promise.reject(error)
  }
)

export default service