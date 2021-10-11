import {request} from "@/utils/axios";

export function login(email, password) {
    return request({
        url: '/login',
        method: 'GET',
        params: {
            email,
            password
        }
    })
}
