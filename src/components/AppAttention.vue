<template>
    <div>
        <div class="nav">
            <el-row :gutter="10">
                <el-col :span="4" class="h1">
                    <el-button type="info">关注</el-button>
                    <el-button type="info">热榜</el-button>
                </el-col>
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
        height: 100px;
        padding: 20px 0px 0px 0px;
        margin: 50px 0px 50px 0px;
        border-top: 1px solid #ffffff;
        background-color: #ffffff;
    }
    .h1 {
        width: 500px;
        margin: 0 auto;
        background: white;
        padding: 10px;
    }
</style>