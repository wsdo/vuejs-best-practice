import Vue from 'vue'
import Vuex from '../starkx'
import { state } from './state'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Stark({
  state,
  strict: debug,
})
