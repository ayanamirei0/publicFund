<template>
  <ul class="baseCampWrap">
    <li class="item" v-for="(item,index) of list" :key="index">
      <div class="left">
        <p>
          <strong>{{ item.rate }}</strong>
          <span>%</span>
        </p>
        <p>近一周</p>
      </div>
      <div class="right">
        <div>
          <p class="title">{{ item.intro }}</p>
          <ul>
            <li class="tags mainColor taglineColor" v-for="(tag, i) of item.tags" :key="i">{{ tag }}</li>
          </ul>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../common/style/mixin.less";
@import "../../common/style/ui-style.less";
.baseCampWrap {
  .item {
    margin-bottom: 20px;
    padding: 0 10px;
    background: url("../../assets/img/bg_productitem1.png") no-repeat left
        center / auto 100%,
      url("../../assets/img/bg_productitem4.png") no-repeat right center / auto
        100%;
    &:last-child {
      margin-bottom: 0;
    }
    .flex();
    .left {
      padding: 40px 0 50px 10px;
      background: url("../../assets/img/bg_productitem2.png") repeat-x left
        center / auto 100%;
      p {
        padding-left: 18px;
        font-size: 24px;
        color: #999;
        strong {
          font-size: 52px;
          color: #db2a36;
        }
        span {
          font-size: 24px;
          color: #db2a36;
        }
      }
    }
    .right {
      position: relative;
      flex: 1;
      padding: 0 6px 0 62px;
      box-sizing: border-box;
      overflow: hidden;
      background: url("../../assets/img/bg_productitem3.png") no-repeat left
        center / auto 100%;
      > div {
        .flex_direction(y, space-around);
        position: relative;
        padding: 40px 30px 50px 10px;
        height: 100%;
        text-align: left;
        background: url("../../assets/img/bg_productitem2.png") repeat-x left center / auto 100%;
        &::before{
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          display: block;
          background: url("../../assets/img/bg_productitem_text.png") no-repeat left bottom / contain;
        }
        .title {
          z-index: 1;
          margin-bottom: 10px;
          font-size: 32px;
          .ellipsis(1);
        }
        ul {
          .flex(flex-start);
          z-index: 1;
          .tags {
            padding: 0 10px;
            height: 40px;
            line-height: 40px;
            font-size: 24px;
            background-color: rgba(168, 150, 129, 0.1);
            border-radius: 20px;
          }
        }
      }
    }
  }
}
</style>