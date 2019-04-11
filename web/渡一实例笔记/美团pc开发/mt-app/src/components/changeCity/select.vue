<template>
    <div class="choose-wrap" @click="showWrap" v-document-click="documentClick">
        <div class="choose">
            <span>{{value}}</span>
            <i class="el-icon-caret-bottom"></i>
            <div :class="{'mt-content': true, 'active': showWrapActive}">
                <h2>{{title}}</h2>
                <div class="wrapper">
                    <div class="col">
                        <span :class="{'mt-item': true, 'active': item ==value}" v-for="(item, index) in list" :key="index" @click="changeValue(item)">{{item}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    // data() {
    //     return {
    //     }
    // },
    props: [
        "list",
        "value",
        "title",
        "showWrapActive"
    ],
    methods: {
        showWrap(e) {
            // console.log('dd', e)
            e.stopPropagation();
            // console.log(this.$emit)
            this.$emit('change_active', true);
        },
        documentClick() {
            this.$emit('change_active', false);
        },
        changeValue(val){
            this.$emit('change', val);
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/css/changeCity/select.scss"
</style>