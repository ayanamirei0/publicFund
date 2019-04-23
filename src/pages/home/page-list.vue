<template>
    <div class="list-page-wrap">
      <x-header :left-options="{showBack: false}">公募基金页面列表</x-header>
      <ul class="list-page">
        <li
          class="page-item"
          v-for="(item, index) of list"
          :key="index"
          @click="jumptoPage(item.path)"
        >
          {{item.name}}
        </li>
      </ul>
    </div>
</template>

<script>
  import { XHeader } from 'vux'

  export default {
    name: "page-list",
    components: {
      XHeader
    },
    data() {
      return {
        topTitleList: ["首页", "历史净值", "历史收益", "自选基金"],
        list: [
          {"name": "首页", "path": "/home"},
          {"name": "历史净值", "path": "/netWorth"},
          {"name": "历史收益", "path": "/historicalGains"},
          {"name": "自选基金", "path": "/optionalFund"},
          {"name": "主题推荐", "path": "/themeLists"},
          {"name": "主题详情", "path": "/themeDetails"}
        ]
      }
    },
    methods: {
      jumptoPage(path){
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="less" scoped>
  ul li {
    list-style: none;
  }
  .list-page {
    display: flex;
    flex-flow: column;
    padding: 0 32px;
    height: auto;
    background-color: white;
    .page-item {
      flex: 1;
      height: 100px;
      line-height: 100px;
      color: #333333;
      font-size: 30px;
      font-weight: 600;
      text-align: center;
      border-bottom: 2px solid #EBEBEB;
    }
    .page-item:last-child {
      border-bottom: 0px solid #EBEBEB;
    }
  }
</style>
