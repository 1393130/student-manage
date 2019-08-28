import { register } from '../../api/user'
const state = {

}
const mutations = {
  
}
const actions = {
  async register({commit}:any,payload:any) {
    console.log(payload,'payload...')
    const data = await register(payload)
    console.log(data,'data/////')
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}