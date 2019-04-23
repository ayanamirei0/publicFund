import Vue from 'vue'
import Vuex from 'vuex'//应用程序开发的状态管理模式,它采用集中式存储管理应用的所有组件的状态
import mutations from './mutations'//同步的写到mutation里面
import actions from './action'//有异步请求或者异步的修改数据的时候，写到actions里面
import getters from './getters'//getters是为了方便我们生成一些直接在应用里可以用的数据，因为有时候从后台拿过来的数据，并不适合直接拿过来在vue层使用，我们当然可以在computed里面去做这些数据的处理和组装，但是有时候我们这些数据可能不仅仅是在当前页面要用，为了避免重复工作，我们可以利用getter

Vue.use(Vuex)

const state = {
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
