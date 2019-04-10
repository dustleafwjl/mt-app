<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{nav.title}}</dt>
      <dd v-for="(item, index) in nav.list" 
            :class="{active: kind == item.tab}" 
            :data-type="item.tab" 
            :key="index">{{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in list" :key="index">
        <el-card :body-style="{ padding: '0px' }">
          <img
            :src="item.img"
            class="image"
          >
          <div class="cbody">
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title" title="item.sub_title">{{item.sub_title}}</div>
            <div class="price-info" v-if="item.rentNum != 0">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price_info.current_price}}</span>
              </span>
              <span class="old-price">门市价¥{{item.price_info.old_price}}</span>
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
            <div class="price-info" v-else-if="item.rentNum == 0">
                <span class="current-price-wrapper">
                    <span class="price-symbol numfont">¥</span>
                    <span class="current-price numfont">抢光了！</span>
                </span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
    data() {
        return {
            kind: "all",
            list: [{
                img: "//p1.meituan.net/msmerchant/ad24d49e211fa8fcd069166aa844ca0b1885568.jpg@368w_208h_1e_1c",
                title: "希尔顿酒店万斯阁西餐厅（王府井店）",
                sub_title: "单人自助午餐",
                price_info: {
                    current_price: 198,
                    old_price: 354.2,
                },
                rentNum: 0,
                address: "王府井/东单"
            },
            {
                img: "https://p1.meituan.net/msmerchant/606fde7049c2ff8c224f90ff6383e3f730729.jpg@368w_208h_1e_1c",
                title: "希尔顿酒店万斯阁西餐厅（王府井店）",
                sub_title: "单人自助午餐",
                price_info: {
                    current_price: 198,
                    old_price: 354.2,
                },
                address: "王府井/东单"
            },
            {
                img: "https://p0.meituan.net/poi/c2b482474377fc31a8311f46055f40b0442616.png@368w_208h_1e_1c",
                title: "希尔顿酒店万斯阁西餐厅（王府井店）",
                sub_title: "单人自助午餐",
                price_info: {
                    current_price: 198,
                    old_price: 354.2,
                },
                address: "王府井/东单"
            },
            {
                img: "https://p1.meituan.net/deal/bd9a5c59a6646c683b214139056b7fe1332966.jpg@368w_208h_1e_1c",
                title: "希尔顿酒店万斯阁西餐厅（王府井店）",
                sub_title: "单人自助午餐",
                price_info: {
                    current_price: 198,
                    old_price: 354.2,
                },
                address: "王府井/东单"
            },
            {
                img: "https://p1.meituan.net/poi/ac64050e681b71087101b0ee0079766a182272.jpg@368w_208h_1e_1c",
                title: "希尔顿酒店万斯阁西餐厅（王府井店）",
                sub_title: "单人自助午餐",
                price_info: {
                    current_price: 198,
                    old_price: 354.2,
                },
                address: "王府井/东单"
            },
            {
                img: "https://p1.meituan.net/deal/__29661209__6853522.jpg@368w_208h_1e_1c",
                title: "希尔顿酒店万斯阁西餐厅（王府井店）",
                sub_title: "单人自助午餐",
                price_info: {
                    current_price: 198,
                    old_price: 354.2,
                },
                address: "王府井/东单"
            }]

        }
    },
    props: [
        'nav'
    ],
    methods: {
        over(e) {
            let dom = e.target;
            let tagName = dom.tagName.toLowerCase();
            if(tagName != 'dd') {
                return false;
            }
            this.kind = dom.getAttribute('data-type');
            // 动态获取数据 ajax请求

        }
    }
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>