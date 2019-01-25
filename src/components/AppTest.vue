<template>
  <div>
    {{ cnt }}
    {{ gmm }}
    <button @click="add()"> +++ </button>
    <app-box></app-box>
  </div>
</template>

<script>
  import AppBox from "./AppBox";
  export default {
    components: {AppBox},
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

</style>
