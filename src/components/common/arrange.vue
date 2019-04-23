<template>
  <ul class="arrange">
    <li v-for="(item,index) in arrange" :key="index">
      <p>{{item.a}}</p>
      <p>{{item.b}}%</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "arrange",
  props: {
      arrange: Array
  }
};
</script>

<style lang="less" scoped>
@import "../../common/style/mixin.less";
.arrange {
  .flex(space-between);
  .flex_wrap();
  margin-top:20px;
  li {
    .flex_num(1);
    margin: 20px 0 38px;
    p {
      width: 229px;
      &:nth-child(1) {
        font-size: 28px;
        line-height: 40px;
        margin-bottom: 16px;
      }
      &:nth-child(2) {
        font-size: 36px;
        line-height: 50px;
        color: #db2a36;
      }
    }
  }
}
</style>
