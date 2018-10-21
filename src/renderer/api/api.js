const axios = require('axios')
// require('babel-plugin-transform-node-env-inline')
// const env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev'
// const host = env === 'prod' ? 'https://www.easy-mock.com/mock/5b5005e53720ca0b98ba8265/prod' : 'https://www.easy-mock.com/mock/5b8ca430d6202f6d8a3d99d0/test/v1'
// axios.defaults.baseURL = '/v1'

axios.defaults.baseURL = ''
axios.defaults.timeout = 100000 // 超时时间
axios.defaults.withCredentials = true // 允许跨域携带cookie
axios.defaults.headers = {
  'Authentication-Token': localStorage.token,
  'Content-Type': 'application/json'
}

// axios请求拦截器
axios.interceptors.request.use(
  config => {
    // 在请求发出之前进行一些操作
    if (!axios.defaults.headers['Authentication-Token']) {
      console.log('没有toekn')
      axios.defaults.headers['Authentication-Token'] = localStorage.token
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// axios响应拦截器
axios.interceptors.response.use(
  // 在响应成功后
  res => res,
  // 响应失败后
  err => Promise.reject(err.response || '服务异常')
)



// login ⭐️
const login = (data) => axios({ method: 'post', url: '/login', data: data })
// 登出 ⭐️
const logout = (data) => axios({ method: 'put', url: '/logout', data: data })
// 注册 ⭐️
const register = (data) => axios({ method: 'post', url: '/register', data: data })

const test  = (data) => axios({ method: 'get', url: 'https://www.easy-mock.com/mock/5b8ca430d6202f6d8a3d99d0/test/v1/mykline', params: data })

// 账户信息 ⭐️
const acountInfo = (data) => axios({ method: 'get', url: '/account-info', params: data })



export {
  axios,test
}
