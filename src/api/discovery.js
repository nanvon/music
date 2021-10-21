import {request} from '@/utils/axios';

export function getBanners() {
    return request({
        url: '/banner?type=0',
        method: 'GET',
        withCredentials: true
    })
}

export function getPersonalized() {
    return request({
        url: '/personalized?limit=10',
        method: 'GET',
        withCredentials: true
    })
}
