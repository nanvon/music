import Vue from 'vue'
import VueRouter from 'vue-router'

//懒加载
const Discovery = () => import('../views/discovery/index')
const SongList = () => import('../views/songList/index')
const NewSong = () => import('../views/newSong/index')

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
    },
    {
        path: "/newSong",
        component: NewSong
    }
]

const router = new VueRouter({
    routes,
    mode: "history"
})

export default router
