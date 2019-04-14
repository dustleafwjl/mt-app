<template>
    <div>
       <span class="name">按省份选择：</span>
       <m-select 
            :list="provinceList" 
            title="省份" 
            :value="province" 
            :showWrapActive="showProvinceActive" 
            @change_active="changeProvinceActive"
            @change="changeProvince"
            className="province"/>
       <m-select 
            :list="cityList" 
            title="城市" 
            :value="city" 
            :showWrapActive="showCityAcitve" 
            @change_active="changeCityACtive"
            @change="changeCity"
            :disabled="cityDisabled"
            className="city"/>
        <span>直接搜索:</span>
        <el-select
            v-model="searchWord"
            multiple
            filterable
            remote
            reserve-keyword
            placeholder="请输入关键词"
            :remote-method="remoteMethod"
            :loading="loading">
            <el-option
                v-for="item in searchList"
                :key="item"
                :label="item"
                :value="item">
            </el-option>
        </el-select>
    </div>
</template>
<script>
import MSelect from '@/components/changeCity/select.vue'
import api from '@/api/index.js'

export default {
    data() {
        return {
            provinceList: [],
            province: "省份",
            cityList: ["哈尔滨", "佳木斯", "牡丹江", "鹤岗"],
            city: "城市",
            showProvinceActive: false,
            showCityAcitve: false,
            searchList: ["哈尔滨", "佳木斯", "牡丹江", "鹤岗"],
            searchWord: '',
            loading: false,
            cityDisabled: true,
        }
    },
    created() {
        api.getProvince().then( res => {
            this.provinceList = res.data.data.map( ele => {
                ele.name = ele.provinceName;
                return ele;
            });
            console.log(this.provinceList);
        })
    },
    components: {
        MSelect
    },
    methods: {
        changeProvinceActive(flag) {
            this.showProvinceActive = flag;
            if(flag == true){
                this.showCityAcitve = false;
            }
        },
        changeCityACtive(flag) {
            console.log('sadfas')
            this.showCityAcitve = flag;
            if(flag == true) {
                this.showProvinceActive = false;
            }
        },
        remoteMethod(val) {
            // 请求后端借口
        },
        changeProvince(val) {
            this.cityDisabled = false;
            this.province = val.name;
            this.cityList = val.cityInfoList;
        },
        changeCity(val) {
            this.city = val.name;
            this.$store.dispatch('setPosition', val);
            this.$router.push({name: 'index'})
        }
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/changecity/iselect.scss'
</style>