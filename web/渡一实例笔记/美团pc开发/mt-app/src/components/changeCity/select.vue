<template>
    <div class="choose-wrap">
        <div class="choose">
            <span>{{value}}</span>
            <i class="el-icon-caret-bottom"></i>
            <div class="mt-content">
                <h2>{{title}}</h2>
                <div class="wrapper">
                    <div class="col">
                        <span class="mt-item" v-for="(item, index) in list" :key="index">{{item}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: [
        "list",
        "value",
        "title"
    ]
}
</script>

<style lang="scss">
    @import "@/assets/css/changeCity/select.scss"
</style>