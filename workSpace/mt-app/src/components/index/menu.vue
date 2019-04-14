<template>
    <div class="m-menu">
        <dl class="nav">
            <dt>全部分类</dt>
            <dd v-for="(item, index) in menuList" :key="index" @mouseenter="menuEnter(index)" @mouseleave="menuLeave">
                <i :class="item.type"/>
                {{item.name}}
                <i class="arrow"/>
            </dd>
        </dl>
        <div class="detail" v-show="hascurDetail" @mouseenter="detailEnter" @mouseleave="detailLeave">
            <template v-for="(item, index) in menuList[dIndex].items">
                <h4 :key="index">{{item.title}}</h4>
                <span v-for="(v, i) in item.items" :key="v+'_'+i">{{v}}</span>
            </template>
        </div>
    </div>
</template>
<script>
import api from '@/api/index.js'
export default {
    data() {
        return {
            hascurDetail: false,
            menuList: [],
            dIndex: 0,
            timer: null
        }
    },
    created() {
        api.getMenuList().then( res => {
            console.log(res.data.data);
            this.menuList = res.data.data;
        })
    },
    methods: {
        menuEnter(index) {
            clearTimeout(this.timer)
            this.dIndex = index;
            this.hascurDetail = true;
        },
        menuLeave() {
            let self = this;
            this.timer = setTimeout(() => {
                 self.hascurDetail = false;
            }, 100);
        },
        detailEnter() {
            clearTimeout(this.timer)
        },
        detailLeave() {
            this.hascurDetail = false;
        }
    }
}
</script>