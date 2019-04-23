<template>
    <div>
        <x-header :left-options="{backText: ''}">基金详情</x-header>
        <div class="topWrap">
            <div class="item left">
                <p class="descript">最新净值(12-25)</p>
                <strong>0.8323</strong>
                <p class="tag">10000元起购</p>
            </div>
            <div class="item center">
                <p>日涨幅(%)</p>
                <strong>+0.23</strong>
            </div>
            <div class="item right">
                <p>低风险</p>
                <p class="type">股票型</p>
            </div>
        </div>
        <div class="tabsWrap">
            <div class="titleBox"></div>
        </div>
    </div>
</template>

<script>
import { XHeader } from "vux";
export default {
    
}
</script>

<style lang="less" scoped>
    
</style>