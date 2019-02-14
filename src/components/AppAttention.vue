<template>
  <div>
    <div class="nav">
      <el-row :gutter="10">
          <el-tabs style="display: inline-block" v-model="activeName">
            <el-tab-pane label="关注" name="attention"></el-tab-pane>
            <el-tab-pane label="热榜" name="list"></el-tab-pane>
          </el-tabs>
        <div class="h1">
          <div class="small"></div>
          <div class="small"></div>
          <div class="small"></div>
          <div class="small"></div>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AppAttention",
    components: {}
  }
</script>

<style scoped>
  .nav {
    /*盒子模型*/
    width: 1560px;
    padding: 20px 0px 0px 0px;
    margin: 50px 0px 50px 0px;
    /*内部元素流式布局*/
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
  }
  .h1 {
    /*盒子模型*/
    width: 700px;
    /*内部元素流式布局*/
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
  }
  .small {
    /*盒子模型*/
    width: 700px;
    height: 200px;
    margin: 30px;
    background-color: red;
  }
</style>