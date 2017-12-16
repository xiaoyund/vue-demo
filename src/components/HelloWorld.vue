<template>
  <div class="hello">
      <p><router-link to="/a">div 1</router-link></p>
    <p><router-link to="/b">div 2</router-link></p>
    <p><router-link to="/c">div 3</router-link></p>
    <p><router-link to="/d">div 4</router-link></p>
    <p><router-link to="/e">div 5</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
