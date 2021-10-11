import Vue from 'vue'
import Vuex from 'vuex'

// 1、安装插件
Vue.use(Vuex)

// 2、创建对象
const store = new Vuex.Store({
    state: {
        account: {},
        token: '',
        profile: {},
        cookie: '',
    },
    mutations: {
        setUserInfo(state, userInfo) {
            state.account = userInfo.account;
            state.token = userInfo.token;
            state.profile = userInfo.profile;
            state.cookie = userInfo.cookie;
        }
    },
    actions: {},
    modules: {}
})

//导出store对象
export default store
