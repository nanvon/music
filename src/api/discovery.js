import {request} from '@/utils/axios';

//Banner横幅
export function getBanners() {
    return request({
        url: '/banner?type=0',
        method: 'GET',
        withCredentials: true
    })
}

//推荐歌单
export function getPersonalized() {
    return request({
        url: '/personalized?limit=10',
        method: 'GET',
        withCredentials: true
    })
}

//最新音乐
export function getNewSong() {
    return request({
        url: '/personalized/newsong',
        method: 'GET',
        withCredentials: true
    })
}
