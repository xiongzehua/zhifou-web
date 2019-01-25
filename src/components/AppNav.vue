<template>
  <div >
    <div class="nav affix card-1">
      <el-tabs v-model="activeName">
        <el-tab-pane label="用户管理" name="first">
          <div class="qqq"></div>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
      <el-button type="primary" v-on:click="to4()">主要按钮</el-button>
    </div>

    <div class="nav">

    </div>
  </div>
</template>

<script>
  export default {
    name: "AppNav",
    data() {
      return {
        activeName: 'first',
      };
    },
    methods: {
        to4() {
            this.activeName='fourth'
        }
    }
  }
</script>

<style scoped>
.nav {
  height: 60px;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  border-top: 3px solid #009a61;
  background-color: #ffffff;
}
.affix {
  position: fixed;
  top: 0;
  width: 100%;
}
.qqq {
  width: 80px;
  height: 80px;
  background-color: red;
}
</style>