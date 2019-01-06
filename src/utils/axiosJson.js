import axios from 'axios';
import { Message } from 'element-ui'
import store from '@/store/index';
import { getToken } from '@/utils/auth'


//以application/json进行提交
const axiosJson = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 4000,
    headers: {'Content-Type': 'application/json;charset=UTF-8'}
});

// request interceptor
axiosJson.interceptors.request.use(config => {
  // Do something before request is sent
  if (store.getters.token) {
    config.headers['Token'] = getToken() // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
  }
  return config
}, error => {
  // Do something with request error
  return Promise.reject(error)
})


axiosJson.interceptors.response.use((res) => {
    if (res.status !== 200) {
      Message({
        message: res.msg,
        type: 'error',
        duration: 5 * 1000
      })
    }
    return res.data;
  }, (error) => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
});

export default axiosJson;