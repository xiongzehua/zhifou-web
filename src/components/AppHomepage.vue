<template>
    <div>
        <div class="nav affix card-1">
            <el-row :gutter="50">
                <el-col :span="88">
                    <el-input v-model="input" placeholder="请输入内容" suffix-icon="el-icon-search"></el-input>
                </el-col>
                <el-col :span="4">
                    <el-tabs style="display: inline-block" v-model="activeName">
                        <el-tab-pane label="首页" name="home"></el-tab-pane>
                        <el-tab-pane label="提问" name="third"></el-tab-pane>
                        <el-tab-pane label="我的主页" name="fourth"></el-tab-pane>
                    </el-tabs>
                    <!--<el-button type="text">首页</el-button>-->
                </el-col>
                <el-col :span="8">
                    <el-button type="primary" v-on:click="to4()">主要按钮</el-button>
                </el-col>
            </el-row>

        </div>
    </div>
</template>

<script>
    export default {
        name: "AppNav",
        data() {
            return {
                activeName: 'first',
                input: ''
            };
        },
        methods: {
            to4() {
                this.activeName='fourth'
            }
            // tabChange (name) {
            //     console.log(name)
            //     this.$router.push({name: name})
            // }
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
    .content {
        margin-top: 60px;
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