import {request} from '@/utils/axios';

//新歌推荐
export function getNewSong() {
    return request({
        url: '/top/song',
        method: 'GET',
        withCredentials: true
    })
}
