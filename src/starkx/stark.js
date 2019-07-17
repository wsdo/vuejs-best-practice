import applyMixin from './mixin'

export class Stark {
  constructor(options = {}) {
    console.log('options', options)
    this.options = options
  }
  get state() {
    return this.options.state
  }
}

export function install(Vue) {
  applyMixin(Vue)
}
