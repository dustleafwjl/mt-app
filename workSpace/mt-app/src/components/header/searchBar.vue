<template>
    <div class="search-panel">
        <el-row class="m-header-searchbar">
            <el-col :span="3" class="left">
                <a href="/"><img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团"></a>
            </el-col>
            <el-col :span="15" class="center">
                <div class="wrapper">
                    <el-input v-model="searchWord" placeholder="请输入内容" @focus="focus" @blur="blur" @input="input"></el-input>
                    <el-button type="primary" icon="el-icon-search"></el-button>
                    <dl class="hotPlace" v-show="isHotPlace">
                        <dt>热门搜索</dt>
                        <dd v-for="(item, index) in hotPlaceList" :key="index">
                            <router-link :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
                        </dd>
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
import api from '@/api/index.js';
export default {
    data() {
        return {
            searchWord: '',
            isFocus: false,
            hotPlaceList: ["故宫博物院", "北京欢乐谷", "玉渊潭公园", "北京动物园"],
            searchList: ["故宫博物院", "北京欢乐谷", "玉渊潭公园", "北京动物园"],
            suggestList: []
        }
    },
    created() {
        // 获取热门搜索词
        api.getSearchHotWord().then(res => {
            this.hotPlaceList = res.data.data;
            this.suggestList = res.data.data;
        })
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
        },
        input() {
            let val = this.searchWord;
            // 动态获取搜索词的数组
            api.getSearchWords().then( res => {
                this.searchList = res.data.data.list.filter((item, index) => {
                    return item.indexOf(val) > -1;
                });
            })
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/css/public/header/index.scss";
@import "@/assets/css/public/header/search.scss";
</style>