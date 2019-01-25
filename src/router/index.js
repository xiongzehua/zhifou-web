import Vue from 'vue'
import VueRouter from 'vue-router'
import Test from "../components/AppTest"

// 全局注册Vue-router组件
Vue.use(VueRouter)

// 配置路由表并导出
export default new VueRouter({
  routes: [
    {
      path: '/test',
      component: Test,
    },
  ]
})


