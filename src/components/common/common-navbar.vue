<template>
  <div class="header">
    <div class="content">
      <div class="back">
        <router-link :to="path"><img src="../../assets/navbar/back.png"></router-link>
      </div>
      <div class="header-title">
        {{title}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "common-navbar",
    props: ["path","title"]
  }
</script>

<style lang="less" scoped>
  .header {
    position: fixed;
    text-align: center;
    top: 0;
    z-index: 99;
    width: 100%;
    height: 88px;
    background-color: #FFFFFF;
    .content {
      text-align: center;
      .back img{
        margin-top: 30px;
        float: left;
        margin-left: 32px;
        width: 18px;
        height: 32px;
      }
      .header-title{
        position: absolute;
        text-align: center;
        top: 22px;
        width: 100%;
        font-size: 36px;
        color: #333333;
      }
    }
  }
</style>
