<template>
  <div :class="$style.hello">
    <!-- <h1>{{ num }}</h1> -->
  </div>
</template>

<script>

import stark from './stark.css'
export default {
  name: 'HelloWorld',
  created() {
    console.log('stark',this.$stark.state)
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
