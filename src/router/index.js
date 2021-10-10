import Vue from 'vue'
import VueRouter from 'vue-router'

//懒加载
const Discovery = () => import('../views/discovery/index')
const SongList = () => import('../views/songList/index')

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
