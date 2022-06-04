// axios encapsulation (axios的二次封装)
import axios from "axios";
import { ElMessage } from "element-plus";


import config from "../config";
import router from "../router";

const NETWORK_ERROR = "Internent request error, please try again later"

//创建axios实例对象，添加全局配置
//create axios object, add global config
const service = axios.create({
    baseURL: config.baseApi,
    timeout: 8000
})

//请求拦截
//interceptors.request
service.interceptors.request.use((req) => {
    //TO-DO
    const headers = req.headers
    if(!headers.Authorization) headers.Authorization = "Michael Cheng"

    return req
})

//相应拦截
//interceptors.response
service.interceptors.response.use((res) => {
    const {code, msg, data} = res.data
    if(code === 200){
        return data
    } else if (code === 40001){
        ElMessage.error(msg)
        setTimeout(() => {
            router.push('/login')
        }, 1500)

        return Promise.reject(msg)
    } else {
        ElMessage.error(msg || NETWORK_ERROR)
        return Promise.reject(msg || NETWORK_ERROR)
    }
})

/**
 * 请求核心函数
 * @param {*} options 请求配置
 */
 function request(options) {
    options.method = options.method || 'get'
    if (options.method.toLowerCase() === 'get') {
        options.params = options.data;
    }
    let isMock = config.mock;
    if (typeof options.mock != 'undefined') {
        isMock = options.mock;
    }
    if (config.env === 'prod') {
        service.defaults.baseURL = config.baseApi
    } else {
        service.defaults.baseURL = isMock ? config.mockApi : config.baseApi
    }

    return service(options)
}

['get', 'post', 'put', 'delete', 'patch'].forEach((item) => {
    request[item] = (url, data, options) => {
        return request({
            url,
            data,
            method: item,
            ...options
        })
    }
})

export default request