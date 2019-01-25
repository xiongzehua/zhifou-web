<template>
    <div>
        <div class="nav affix card-1">
            <el-tabs v-model="activeName">
                <el-tab-pane label="首页" name="first"></el-tab-pane>
                <!--<el-input v-model="input" placeholder="请输入内容" suffix-icon="el-icon-date"></el-input>-->
                <el-tab-pane label="提问" name="third"></el-tab-pane>
                <el-tab-pane label="我的主页" name="fourth"></el-tab-pane>
            </el-tabs>
            <!--<el-button type="primary" v-on:click="to4()">主要按钮</el-button>-->
        </div>

        <div class="nav">
            <!--<el-row :gutter="20">-->
                <!--<el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>-->
                <!--<el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>-->
            <!--</el-row>-->
            <el-tabs v-model="we">
                <el-tab-pane label="推荐" name="first"></el-tab-pane>
                <el-tab-pane label="热榜" name="fourth"></el-tab-pane>
            </el-tabs>
        </div>

    </div>
</template>

<script>
    export default {
        name: "AppNav",
        data() {
            return {
                activeName: 'first',
                we: 'first'
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
        background-color: black;
    }

    .tabs {
        background-color: aquamarine;
        width: 500px;
    }
</style>