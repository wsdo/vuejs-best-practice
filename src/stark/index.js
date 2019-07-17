import Vue from 'vue'
import Vuex from '../starkx'
import { state } from './state'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Stark({
  state,
  mutations: {
    increment(state) {
      state.count = state.count + 10
      console.log('当前状态为', state.count)
    },
  },
  strict: debug,
})
