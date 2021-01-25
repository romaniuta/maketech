import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user : {},
    organizations: {}
  },
  mutations: {
      auth_request(state){
          state.status = 'loading'
      },
      auth_success(state, user){
          state.status = 'success'
          state.user = user
      },
      auth_error(state){
          state.status = 'error'
      },
      logout(state){
          state.status = ''
          state.token = ''
      },
      save_token(state, token) {
          state.token = token;
      },
      organizations(state, org) {
        state.organizations = org;
      },
      update_organizations(state, org) {
          state.organizations.push(org);
      }
  },
  actions: {
      login({ commit, dispatch }, user){
          return new Promise((resolve, reject) => {
            commit('auth_request')
            axios({url: 'http://127.0.0.1:8000/auth/login', data: user, method: 'POST' })
                .then(resp => {
                  const token = resp.data.token
                  const user = resp.data.user
                  localStorage.setItem('token', token)
                  localStorage.setItem('email', user)
                  commit("save_token", token)
                  axios.defaults.headers.common['Authorization'] = token
                  dispatch('getUserOrganizations', 'fetchUser')
                  resolve(resp)
                })
                .catch(err => {
                  commit('auth_error')
                  localStorage.removeItem('token')
                  reject(err)
                })
          })
      },
      register({ commit }, user){
          return new Promise((resolve, reject) => {
              commit('auth_request')
              axios({url: 'http://127.0.0.1:8000/auth/register', data: user, method: 'POST' })
                  .then(resp => {
                      const token = resp.data.token
                      localStorage.setItem('token', token)
                      commit("save_token", token);
                      axios.defaults.headers.common['Authorization'] = token
                      commit('auth_success', token, user)
                      resolve(resp)
                  })
                  .catch(err => {
                      commit('auth_error', err)
                      localStorage.removeItem('token')
                      reject(err)
                  })
          })
      },
      logout({ commit }){
          return new Promise((resolve) => {
              commit('logout')
              localStorage.removeItem('token')
              localStorage.removeItem('email')
              delete axios.defaults.headers.common['Authorization']
              resolve()
          })
      },
      create({ commit }, data) {
          return new Promise((resolve, reject) => {
              axios({url: 'http://127.0.0.1:8000/api/create', data: data, method: 'POST' })
                  .then(resp => {
                      commit('update_organizations', resp.data.organization)
                      resolve(resp)
                  })
                  .catch(err => {
                      console.log(err);
                      reject(err)
                  })
          })
      },
      getUserOrganizations({ commit }) {
        return new Promise((resolve, reject) => {
           axios({url: 'http://127.0.0.1:8000/api/home', method: 'GET'})
               .then(resp => {
                commit('organizations', resp.data.organization);
               })
               .catch(err => {
                   console.log(err);
                   reject(err);
               })
        });
      },
      fetchUser({ commit }) {
          return new Promise((resolve, reject) => {
              axios({url: 'http://127.0.0.1:8000/auth/user', data: {'email': localStorage.getItem('email')}, method: 'POST'})
                  .then(resp => {
                      commit('auth_success', resp.data.user);
                  })
                  .catch(err => {
                      console.log(err);
                      reject(err);
                  })
          });
      }
  },
  getters : {
      isLoggedIn: state => !!state.token,
      authStatus: state => state.status,
      user: state => state.user,
      organizations: state => state.organizations
  }
})
