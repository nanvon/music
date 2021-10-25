import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Notification, Message, Carousel} from 'element-ui'
import './plugins/element.js'
import "assets/fonts/index"; // 执行自动引入

Vue.config.productionTip = false

Vue.component(Notification.name, Notification);
Vue.component(Message.name, Message);
Vue.component(Carousel.name, Carousel);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
