<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <!--<p>-->
      <!--<router-link to="/test">Go to test</router-link>-->
      <!--<router-link to="/dev">Go to dev</router-link>-->
    <!--</p>-->
    <!--<router-view msg="Welcome to zhifou App"></router-view>-->
    <div class="header">
      <app-home></app-home>
    </div>
    <div class="main">
      <app-attention></app-attention>
    </div>
  </div>
</template>

<script>
// vue + vue router + vuex
import router from './router'
import Vue from 'vue';
Vue.use(ElementUI);

// element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// css reset
import './assets/global.css'
import './assets/reset.css'

// components
import AppHome from "./components/AppHome";
import AppAttention from "./components/AppAttention"

export default {
  name: 'app',
  components: {
      AppHome,
      AppAttention
  },
  router
}
</script>

<style>
#app {
  /*盒子模型*/
  width: 1000px;
  /*内部元素流式布局*/
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
}

.main {
  min-height: 1000px;
  padding: 0px 0px 0px 100px;
  margin: 0px 0px 0px 600px;
}
</style>
