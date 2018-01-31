import axios from 'axios'
import { Notification } from 'element-ui'

const state = {
  all: []
}

const mutations = {
  addComment(state, comment) {
    state.all.push(comment)
  },
  loadComments(state, comments) {
    state.all = comments
  }
}

const actions = {
  addComment({ commit }, { comment }) {
    const uri = 'http://localhost:3033/comment'
    axios
      .post(uri, { ...comment })
      .then(function(res) {
        commit('addComment', res.data)
      })
      .catch(function(err) {
        Notification.error({
          title: '错误',

          message: '服务错误'
        })
      })
  },
  loadComments({ commit }, { postId }) {
    const uri = `http://localhost:3033/comment?postId =${postId}`
    axios
      .get(uri)
      .then(function(res) {
        commit('loadComments', res.data)
      })
      .catch(function(err) {
        Notification.error({
          title: '错误',

          message: '加载评论错误'
        })
      })
  }
}

export default {
  state,
  mutations,
  actions
}
