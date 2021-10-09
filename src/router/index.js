import Vue from 'vue'
import VueRouter from 'vue-router'

import Discovery from '../views/discovery/index'
import SongList from '../views/songList/index'

Vue.use(VueRouter)

const routes = [
    {
        path: "",
        redirect: "/discovery"
    },
    {
        path: "/discovery",
        component: Discovery
    },
    {
        path: "/songList",
        component: SongList
    }
]

const router = new VueRouter({
    routes,
    mode: "history"
})

export default router
