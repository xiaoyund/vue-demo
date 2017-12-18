<template>
  <div class="hello">
    <el-button>哈哈</el-button>
    <el-select v-model="value" placeholder="请选择" style="width:200px;">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
      <p><router-link to="/a">div 1</router-link></p>
    <p><router-link to="/b">div 2</router-link></p>
    <p><router-link to="/c">div 3</router-link></p>
    <p><router-link to="/d">div 4</router-link></p>
    <p><router-link to="/e">div 5</router-link></p>
    <div class="c1">
      <div class="c2">
        <div class="c3">
          <div class="c4">
            <div class="c5" id="id1">
              测试css权重
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="c10" v-for="i in items">div{{i}}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items: [],
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  },
  mounted () {
    let newArray = []
    for(let i=0; i< 100; i++) {
      newArray.push(i)
    }
    console.log(newArray)
    this.items = newArray

    window.onscroll = function() {
      var doms = document.getElementsByClassName('c10')
      for(let i = 0; i< doms.length; i ++) {
        console.log(doms[i].offsetTop)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  #id1
    color #42b983
  .c1 .c2 .c3 .c4 .c5
    color #000
  .c10
    height 50px
</style>
