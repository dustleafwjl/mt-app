<template>
    <div class="m-product.categroy">
        <dl class="classic">
            <dt>分类</dt>
            <dt>全部</dt>
            <dd>美食</dd>
            <dd v-for="(item, index) in classicList" :key="index">
                <m-select :name="item.title" :list="item.subList"/>
            </dd>
        </dl>
        <dl class="classic">
            <dt>区域</dt>
            <dt>全部</dt>
            <dd>美食</dd>
            <dd v-for="(item, index) in areaList" :key="index">
                <m-select :name="item.title" :list="item.subList"/>
            </dd>
        </dl>
    </div>
</template>
<script>
import MSelect from './select.vue'
export default {
  data() {
    return {
      classicList: [
        {
          title: "美食",
          type: "food",
          subList: [
            {
              name: "日本菜",
              id: "Japan"
            }
          ]
        },
        {
          title: "酒店住宿",
          type: "hotal",
          subList: [
            {
              name: "温泉酒店",
              id: "hot_spring"
            },
            {
              name: "温泉酒店",
              id: "hot_spring"
            }
          ]
        },
        {
          title: "美食",
          type: "food",
          subList: [
            {
              name: "日本菜",
              id: "Japan"
            }
          ]
        },
        {
          title: "酒店住宿",
          type: "hotal",
          subList: [
            {
              name: "温泉酒店",
              id: "hot_spring"
            },
            {
              name: "温泉酒店",
              id: "hot_spring"
            }
          ]
        },
        {
          title: "美食",
          type: "food",
          subList: [
            {
              name: "日本菜",
              id: "Japan"
            }
          ]
        },
        {
          title: "酒店住宿",
          type: "hotal",
          subList: [
            {
              name: "温泉酒店",
              id: "hot_spring"
            },
            {
              name: "温泉酒店",
              id: "hot_spring"
            }
          ]
        }
      ],
      areaList: [

      ]
    };
  },
  components: {
      MSelect
  }
};
</script>
