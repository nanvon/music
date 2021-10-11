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

export function logout() {
    return request({
        url: '/logout',
        method: 'GET'
    })
}
