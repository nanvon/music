import axios from 'axios'
import {Message, Notification} from "element-ui";

export function request(config) {
    // 1、创建axios实例
    const instance = axios.create({
        baseURL: 'http://118.31.188.129:3000',
        timeout: 5000
    })

    // 2、axios的拦截器
    // 2.1、请求拦截的作用
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        console.log(err);
    })

    // 2.2、响应拦截
    instance.interceptors.response.use(res => {
        const code = res.data.code;
        const msg = res.data.msg;
        if (code === 200) {
            return res.data
        } else {
            Notification({
                message: msg,
                type: 'error'
            })
        }
    }, err => {
        console.log(err)
    })

    // 3、发送真正的网络请求
    return instance(config)
}
