// import api from '../../api'
import axios from 'axios'
const state = {
  articleList: {}
}

const getters = {
  getArticleListState: state => state.articleList
}

const mutations = {
  ARTICLE_LIST: (state, data) => {
    console.log('data', data);
    state.articleList = data.data.article
  }
}

const actions = {
  getArticleList(data, id) {
    console.log('dataqq', data)
    return axios.get(`v1/article/list`).then((response) => {
      // if (response.statusText === 'OK') {
      // commit('ARTICLE_LIST', response)
      // }
    }).catch((error) => {
      console.log(error)
    })

    // return api.get(`/theme/${id}`).then((response) => {
    //   commit('THEME_DTAILE', response)
    // }).catch((error) => {
    //   console.log(error)
    // })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
