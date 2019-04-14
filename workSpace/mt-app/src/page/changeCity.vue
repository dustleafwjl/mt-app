<template>
    <div class="page-changeCity">
        <el-row>
            <province/>
        </el-row>
        <el-row>
            <hot title="热门城市" :list="hotList"/>
        </el-row>
        <el-row>
            <hot title="最近访问" :list="rencentList"/>
        </el-row>
        <el-row>
            <categroy/>
        </el-row>
    </div>
</template>
<script>
import Province from '@/components/changeCity/province.vue'
import Hot from '@/components/changeCity/hot.vue'
import Categroy from '@/components/changeCity/categroy.vue'
import api from '@/api/index.js'

export default {
    data() {
        return {
            hotList: [],
            rencentList: []
        }
    },
    created() {
        api.getHotCity().then( res => {
            this.hotList = res.data.data.map(ele => ele.name);
        });
        api.getRecentCity().then( res => {
            console.log(res);
            this.rencentList = res.data.data.map( ele => ele.name);
        })
    },
    components: {
        Province,
        Hot,
        Categroy
    }
}
</script>

<style scoped>

</style>