import Vue from 'vue'
import Router from 'vue-router'

//  懒路由加载
const pageList = r => require.ensure([], () => r(require('@/pages/home/page-list')), 'page-list') //首页
const home = r => require.ensure([], () => r(require('@/pages/home/home')), 'home') //首页
const netWorth = r => require.ensure([], () => r(require('@/pages/net-worth/historical-net-worth')), 'historical-net-worth') //历史净值
const historicalGains = r => require.ensure([], () => r(require('@/pages/historical-gains/historical-gains')), 'historical-gains') //历史收益
const optionalFund  = r => require.ensure([], () => r(require('@/pages/optional-fund/optional-fund')), 'optional-fund') //自选基金
const themeLists  = r => require.ensure([], () => r(require('@/pages/theme-lists/theme-lists')), 'theme-lists') //主题列表
const themeDetails  = r => require.ensure([], () => r(require('@/pages/theme-details/theme-details')), 'theme-details') //主题详情

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pageList'
    },{
      path: '/pageList',
      meta: {
        index: 1
      },
      component: pageList
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/netWorth',
      name: 'netWorth',
      component: netWorth
    },
    {
      path: '/historicalGains',
      name: 'historicalGains',
      component: historicalGains
    },
    {
      path: '/optionalFund',
      name: 'optionalFund',
      component: optionalFund
    },
    {
      path: '/themeLists',
      name: 'themeLists',
      component: themeLists
    },
    {
      path: '/themeDetails',
      name: 'themeDetails',
      component: themeDetails
    }
  ]
})
