<template>
  <div class="wrap">
    <div class="header">
      <x-header :left-options="{backText: ''}">自选基金</x-header>
      <div class="middle-line"></div>

      <div class="middle-line"></div>
      <div class="content-header-list">
        <ul class="content-top-list">
          <li
            class="top-item"
            v-for="(item, index) of topTitleList"
            :key="index"
          >
            {{item}}
          </li>
        </ul>
      </div>
    </div>
    <div class="content" ref="content-list">
      <ul class="content-item-list">
        <li
          class="content-item"
          v-for="(item, index) of list"
          :key="index"
        >
          <span class="item">{{item.a}}</span>
          <span class="item">{{item.b}}</span>
          <span class="item">{{item.c}}</span>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { XHeader } from 'vux'

  export default {
    name: "optional-fund",
    components: {
      XHeader
    },
    data() {
      return {
        topTitleList: ["基金名称", "万份收益", "七日年化(%)"],
        list: [
          {"a": "2019-03-27", "b": "0.8888", "c": "2.96%"},
          {"a": "2019-03-28", "b": "0.8888", "c": "2.97%"},
          {"a": "2019-03-29", "b": "0.8888", "c": "2.97%"},
          {"a": "2019-03-30", "b": "0.8888", "c": "2.97%"},
          {"a": "2019-03-27", "b": "0.8888", "c": "2.97%"},
          {"a": "2019-03-29", "b": "0.8888", "c": "2.97%"},
          {"a": "2019-03-30", "b": "0.8888", "c": "2.97%"},
          {"a": "2019-03-27", "b": "0.8888", "c": "2.97%"},
          {"a": "2019-03-28", "b": "0.8888", "c": "2.97%"},
          {"a": "2019-03-29", "b": "0.8888", "c": "2.97%"},
          {"a": "2019-03-30", "b": "0.8888", "c": "2.979%"}
        ]
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
