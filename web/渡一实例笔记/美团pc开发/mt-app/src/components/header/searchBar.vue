<template>
    <div class="search-panel">
        <el-row class="m-header-searchbar">
            <el-col :span="3" class="left">
                <a href="/"><img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团"></a>
            </el-col>
            <el-col :span="15" class="center">
                <div class="wrapper">
                    <el-input v-model="searchWord" placeholder="请输入内容" @focus="focus" @blur="blur"></el-input>
                    <el-button type="primary" icon="el-icon-search"></el-button>
                    <dl class="hotPlace" v-show="isHotPlace">
                        <dt>热门搜索</dt>
                        <dd v-for="(item, index) in hotPlaceList" :key="index">
                            <router-link :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
                        </dd>
                        <!-- <dd>
                            <router-link to="/">北京欢乐谷</router-link>
                        </dd>
                        <dd>
                            <router-link to="/">玉渊潭公园</router-link>
                        </dd>
                        <dd>
                            <router-link to="/">北京动物园</router-link>
                        </dd>
                        <dd>
                            <router-link to="/">北京野生动物园</router-link>
                        </dd>
                        <dd>
                            <router-link to="/">颐和园</router-link>
                        </dd> -->
                    </dl>
                    <dl class="searchList" v-show="isSearchList">
                        <dd v-for="(item, index) in searchList" :key="index">
                            <router-link :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
                        </dd>
                    </dl>
                </div>
                <div class="suggest">
                    <a href="#" v-for="(item, index) in suggestList" :key="index">{{item}}</a>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            searchWord: '',
            isFocus: false,
            hotPlaceList: ["故宫博物院", "北京欢乐谷", "玉渊潭公园", "北京动物园"],
            searchList: ["故宫博物院", "北京欢乐谷", "玉渊潭公园", "北京动物园"],
            suggestList: ["故宫博物院", "北京欢乐谷", "玉渊潭公园", "北京动物园", "北京野生动物园", "颐和园", "北京园博园"]
        }
    },
    computed: {
        isHotPlace() {
            return this.isFocus && !this.searchWord;
        },
        isSearchList() {
            return this.isFocus && this.searchWord;
        }
    },
    methods: {
        focus() {
            this.isFocus = true;
        },
        blur() {
            let self = this;
            setTimeout(()=>{
                self.isFocus = false;
            }, 200)
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/css/public/header/index.scss";
@import "@/assets/css/public/header/search.scss";
</style>