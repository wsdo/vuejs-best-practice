<template>
  <div :class="$style.hello">
    <h1>{{ count }}</h1>
    <button @click="add">add</button>
  </div>
</template>

<script>
import stark from './stark.css'
export default {
  name: 'HelloWorld',
  computed: {
    count() {
      return this.$stark.state.count
    },
  },
  created() {
    console.log('stark', this.$stark.state)
  },
  methods: {
    add(){
      this.$stark.commit('increment')
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style module>
/* .hello {
  color:red;
} */

@import './stark.css';
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
