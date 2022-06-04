// 环境配置封装
// environment setting

const env = import.meta.env.MODE || "prod";
const EnvConfig = {
    development: {
        baseApi: '/',
        mockApi: 'https://www.fastmock.site/mock/873953b5a549ef1446b38287452658f1/api'
    },
    test: {
        baseApi: '//test.futurefe.com/api',
        mockApi: 'https://www.fastmock.site/mock/873953b5a549ef1446b38287452658f1/api'
    },
    prod: {
        baseApi: '//futurefe.com/api',
        mockApi: 'https://www.fastmock.site/mock/873953b5a549ef1446b38287452658f1/api'
    },
}

export default {
    env,
    mock: true,
    ...EnvConfig[env]
}