import applyMixin from './mixin'
import Vue from 'vue'
export class Stark {
  constructor(options = {}) {
    console.log('options', options)
    this.options = options
    this.mutations = {}
    const { commit } = this
    this.commit = type => {
      return commit.call(this, type)
    }
    forEachValue(options.mutations, (mutationFn, mutationName) => {
      registerMutation(this, mutationName, mutationFn)
    })
    // 数据响应式
    this._vm = new Vue({
      data: {
        state: options.state,
      },
    })
  }
  get state() {
    return this.options.state
  }

  commit(type) {
    this.mutations[type]()
  }
}

function registerMutation(store, mutationName, mutationFn) {
  store.mutations[mutationName] = () => {
    mutationFn.call(store, store.state)
  }
}

function forEachValue(obj, fn) {
  Object.keys(obj).forEach(key => fn(obj[key], key))
}

export function install(Vue) {
  applyMixin(Vue)
}
