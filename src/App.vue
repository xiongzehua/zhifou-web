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
      <!--<app-test></app-test>-->
      <!--<app-box></app-box>-->
      <!--<app-box></app-box>-->
      <!--<app-box></app-box>-->
      <!--<app-box></app-box>-->
      <!--<div class="aa card-1"></div>-->
      <!--<div class="aa card-2"></div>-->
      <!--<div class="aa card-3"></div>-->
      <!--<div class="aa card-4"></div>-->
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
import AppTest from "./components/AppTest";

export default {
  name: 'app',
  components: {
      AppTest,
      AppHome,
      AppAttention
  },
  router
}
</script>

<style>
#app {
  background-color: #fafafa;
}

.main {
  min-height: 1000px;
}
</style>
