import axios from 'axios'
import { Notification } from 'element-ui'
const state = {
  all: []
}

const mutations = {
  loadPost(state, posts) {
    state.all = posts
  }
}

const actions = {
  loadPost({ commit }) {
    const uri = 'http://localhost:3033/post'
    axios
      .get(uri)
      .then(function(res) {
        commit('loadPost', res.data)
      })
      .catch(function(err) {
        Notification.error({
          title: '错误',

          message: '加载数据出错'
        })
      })
  }
}

export default {
  state,
  mutations,
  actions
}
