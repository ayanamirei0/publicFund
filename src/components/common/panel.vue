<template>
  <div class="panelWrap">
    <h2>{{title}}<span>{{hasTime}}</span></h2>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    hasTime: String 
  }
};
</script>
<style lang="less" scoped>
.panelWrap {
  padding: 28px 24px;
  background-color: #fff;
  h2 {
    padding-bottom: 22px;
    font-size: 32px;
    text-align: left;
    line-height: 1;
    &::before {
      content: "";
      margin-right: 20px;
      display: inline-block;
      width: 8px;
      height: 28px;
      background: url("../../assets/icon/label_title@2x.png") no-repeat left
        center/cover;
    }
    span{
        color:#999;
        font-size:24px;
        margin-left:8px;
    }
  }
}
</style>
