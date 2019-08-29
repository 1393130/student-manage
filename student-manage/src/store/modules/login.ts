import { register , getLogin } from '../../api/user'
const state = {
  loginInof: null,
}
const mutations = {
  getuserInof(state:any,payload:any) {
    state.loginInof = payload
  }
}
const actions = {
  //注册
  async register({commit}:any,payload:any) {
    const data = await register(payload)
  },
  //登录
  async getLogin({ commit }:any,payload:any) {
    const data = await getLogin(payload)
    commit('getuserInof',data)
    console.log('登录...',data)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}