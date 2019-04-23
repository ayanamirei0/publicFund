<template>
  <div id="app" class="jinfu">
    <router-view class="bg"/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="less">
@import "./common/style/base.less";
@import "./common/style/ui-style.less";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0 auto;
}

#app {
  width: 100%;
  min-height: 100%;
  text-align: center;
  -webkit-overflow-scrolling: touch;
  position: absolute;
}
</style>
