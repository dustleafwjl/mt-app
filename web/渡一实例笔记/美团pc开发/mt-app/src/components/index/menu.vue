<template>
    <div class="m-menu">
        <dl class="nav">
            <dt>全部分类</dt>
            <dd v-for="(item, index) in menuList" :key="index" @mouseenter="menuEnter(index)" @mouseleave="menuLeave">
                <i :class="item.icon"/>
                {{item.title}}
                <i class="arrow"/>
            </dd>
        </dl>
        <div class="detail" v-show="hascurDetail" @mouseenter="detailEnter" @mouseleave="detailLeave">
            <template v-for="(item, index) in menuList[dIndex].children">
                <h4 :key="index">{{item.title}}</h4>
                <span v-for="(v, i) in item.children" :key="v+'_'+i">{{v}}</span>
            </template>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            hascurDetail: false,
            menuList: [{
                title: '美食',
                icon: 'food',
                children: [{
                    title: '美食',
                    children: ['代金券', '甜点饮品', '火锅自处餐', '小吃快餐', '日韩料理', '西餐', '聚餐宴请', '烧烤烤肉']
                }]
            },
            {
                title: '美食',
                icon: 'food',
                children: [{
                    title: '美食',
                    children: ['代金券', '甜点饮品', '火锅自处餐', '小吃快餐', '日韩料理', '西餐', '聚餐宴请', '烧烤烤肉']
                }]
            },
            {
                title: '美食',
                icon: 'food',
                children: [{
                    title: 'fff',
                    children: ['代金券', '甜点饮品', '火锅自处餐', '小吃快餐', '日韩料理', '西餐', '聚餐宴请', '烧烤烤肉']
                }]
            }],
            dIndex: 0,
            timer: null
        }
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