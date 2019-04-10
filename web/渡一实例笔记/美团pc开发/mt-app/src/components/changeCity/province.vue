<template>
    <div>
       <span class="name">按省份选择：</span>
       <m-select :list="provinceList" title="省份" :value="province"/>
       <m-select :list="cityList" title="城市" :value="city"/>
    </div>
</template>
<script>
import MSelect from '@/components/changeCity/select.vue'
export default {
    data() {
        return {
            provinceList: ["山东", "甘肃", "江苏", "北京"],
            province: "省份",
            cityList: ["哈尔滨", "佳木斯", "牡丹江", "鹤岗"],
            city: "城市"
        }
    },
    components: {
        MSelect
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/changecity/iselect.scss'
</style>