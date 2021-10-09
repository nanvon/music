import {request} from "../utils/axios";

export function test() {
    return request({
        url: '/artist/top/song?id=5771'
    })
}
