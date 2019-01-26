<template>
  <div class="big">
    <!--<div class="middle">-->
      <!--<div class="small"></div>-->
      <!--<div class="small"></div>-->
      <!--<div class="small"></div>-->
      <!--<div class="small"></div>-->
      <!--<div class="small"></div>-->
      <!--<div class="small"></div>-->
    <!--</div>-->
    <div class="middle">

      <div class="small"></div>
      <div class="small"></div>
      <div class="small"></div>
      <div class="small"></div>
      <div class="small"></div>
      <div class="small"></div>
      <div class="small"></div>
      <div class="small"></div>
      <div class="small"></div>
      <div class="small"></div>
    </div>
    <!--<div class="middle">-->
      <!--<div class="small"></div>-->
      <!--<div class="small"></div>-->
      <!--<div class="small"></div>-->
      <!--<div class="small"></div>-->
      <!--<div class="small"></div>-->
      <!--<div class="small"></div>-->
      <!--<div class="small"></div>-->
      <!--<div class="small"></div>-->
      <!--<div class="small"></div>-->
      <!--<div class="small"></div>-->
      <!--<div class="small"></div>-->
      <!--<div class="small"></div>-->
      <!--<div class="small"></div>-->
      <!--<div class="small"></div>-->
    <!--</div>-->
  </div>
</template>

<script>
  export default {
    components: {},
    props: {
      gmm: String,
    },
    data: function() {
      return {
        cnt: 0,
      }
    },
    methods: {
      add: function () {
        this.cnt = this.cnt + 1;
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .big {
    /*内部元素流式布局*/
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
  }
  .middle {
    /*盒子模型*/
    max-width: 800px;
    height: 200px;
    /*内部元素流式布局*/
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .small {
    /*盒子模型*/
    width: 400px;
    height: 400px;
    margin: 30px;
    background-color: red;
  }
</style>
