<template>
  <div class="m-products-list">
    <ul>
      <li v-for="item in nav" :key="item.key" :class="{'s-nav-active': item.active}">{{item.name}}</li>
    </ul>
    <el-row>
        <item v-for="(item, index) in product" :key="index" :meta="item"/>
    </el-row>
  </div>
</template>
<script>
import Item from '@/components/products/item.vue'
import api from '@/api/index.js'
export default {
  data() {
    return {
      nav: [
        {
          key: "s-default",
          name: "智能排序",
          active: true
        },
        {
          key: "s-price",
          name: "价格最低",
          active: false
        },
        {
          key: "s-score",
          name: "人气最高",
          active: false
        },
        {
          key: "s-comment",
          name: "评价最高",
          active: false
        }
      ],
      product: []
    };
  },
  created() {
    api.getProductsList().then( res => {
      // console.log(res.data.data);
      this.product = res.data.data;
    })
  },
  components: {
      Item
  }
};
</script>

<style scoped>
</style>