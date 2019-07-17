export default function(Vue) {
  Vue.mixin({ beforeCreate: starkInit })
  function starkInit() {
    const options = this.$options
    if (options.stark) {
      this.$stark = typeof options.stark === 'function' ? options.stark() : options.stark
    } else if (options.parent && options.parent.$stark) {
      this.$stark = options.parent.$stark
    }
  }
}
