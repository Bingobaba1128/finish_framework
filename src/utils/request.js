// import axios from 'axios'
// import {
//   Message,
//   Loading
// } from 'element-ui'
// import router from '../router/index.js'  //注意路径与文件名

// const service = axios.create({
//   baseURL: process.env.API, // api 的 base_url
//   timeout: 50000 // request timeout
// })

// let loading // 定义loading变量

// function startLoading () { // 使用Element loading-start 方法
//   loading = Loading.service({
//     lock: true,
//     text: '加载中...',
//     background: 'rgba(0, 0, 0, 0.7)'
//   })
// }

// function endLoading () { // 使用Element loading-close 方法
//   loading.close()
// }

// // 请求拦截  设置统一header
// service.interceptors.request.use(
//   config => {
//     // 加载
//     startLoading()
//     if (localStorage.eleToken) {
//       config.headers.Authorization = localStorage.eleToken
//     }
//     return config
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )

// // 响应拦截  401 token过期处理
// service.interceptors.response.use(
//   response => {
//     endLoading()
//     return response
//   },
//   error => {
//     // 错误提醒
//     endLoading()
//     Message.error(error.response.data)

//     const { status } = error.response
//     if (status === 401) {
//       Message.error('token值无效，请重新登录')
//       // 清除token
//       localStorage.removeItem('eleToken')

//       // 页面跳转
//       router.push('/login')
//     }

//     return Promise.reject(error)
//   }
// )

// export default service
import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
// import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  // baseURL: '192.168.41.102:8088', // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    // if (store.getters.token) {
    //   // let each request carry token
    //   // ['X-Token'] is a custom headers key
    //   // please modify it according to the actual situation
    //   config.headers['X-Token'] = getToken()
    // }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
// service.interceptors.response.use(response => {
//   const res = response.data
//   // 如果返回的状态不是200 就主动报错
//   if (res.state !== 200) {
//     return Promise.reject(res.message || 'error')
//   }
//   return response
// }, error => {
//   return Promise.reject(error.response.data) // 返回接口返回的错误信息
// })

service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data

    if (response.status === 200) {
      return Promise.resolve(response)
    }
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 20000) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
