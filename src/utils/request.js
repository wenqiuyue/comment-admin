import axios from 'axios';
import type from '../commons/type'
import { Message } from "element-ui";
import router from "../router";

// 定义一个缓存池用来缓存数据
let cache = {}
const EXPIRE_TIME = 1800000
// 利用axios的cancelToken来取消请求
const CancelToken = axios.CancelToken

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  // timeout: 20000,
})
// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 如果需要缓存--考虑到并不是所有接口都需要缓存的情况
  if (config.data.cache) {
    let source = CancelToken.source()
    config.cancelToken = source.token
    // 去缓存池获取缓存数据
    let data = cache[config.url]
    // 获取当前时间戳
    let expire_time = getExpireTime()
    // 判断缓存池中是否存在已有数据 存在的话 再判断是否过期
    // 未过期 source.cancel会取消当前的请求 并将内容返回到拦截器的err中
    if (data && expire_time - data.expire < EXPIRE_TIME) {
      source.cancel(data)
    }else{
      config.headers = {
        'Content-Type': 'application/json;charset=utf-8'
      }
      let token=null
      if(router.history.current.name=='reclogin' || router.history.current.name=='reception'){
        token=localStorage.getItem(type.RECTOKEN);
      }else{
        token=localStorage.getItem(type.TOKEN);
      }
      if (token) {
        config.headers.Authorization = token;
      }
    }
  }else{
    config.headers = {
      'Content-Type': 'application/json;charset=utf-8'
    }
    let token=null
    if(router.history.current.name=='reclogin' || router.history.current.name=='reception'){
      token=localStorage.getItem(type.RECTOKEN);
    }else{
      token=localStorage.getItem(type.TOKEN);
    }
    if (token) {
      config.headers.Authorization = token;
    }
  }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// 响应拦截器
instance.interceptors.response.use(
  response => {
    const result = response.data;
    if (typeof response.config.data=='string'&&JSON.parse(response.config.data).cache) {
      // 缓存数据 并将当前时间存入 方便之后判断是否过期
      let data = {
        expire: getExpireTime(),
        data: result
      }
      cache[`${response.config.url}`] = data
    }
    if(result.res==300){
      Message.warning({ message: result.msg })
    }else if(result.res!=200){
      Message.error({ message: result.msg })
    }
    return result
  },
  error => {
    if (axios.isCancel(error)) return Promise.resolve(error.message.data)
    Message.error({ message: error })
    return Promise.reject(error)
  }
)
// 获取当前时间
function getExpireTime() {
  return new Date().getTime()
}
/**
 * GET
 * @param url
 * @param config
 * @returns {Promise<unknown>}
 */
export function fetchGet (url, config) {
  return new Promise((resolve, reject) => {
    instance
      .get(url, config)
      .then(
        response => resolve(response),
        error => reject(error)
      )
      .catch(reject)
  })
}
/**
 * POST
 * @param url
 * @param params
 * @param config
 * @returns {Promise<unknown>}
 */
export function fetchPost (url, params, config) {
  return new Promise((resolve, reject) => {
    instance
      .post(url, params, config)
      .then(
        response => resolve(response),
        error => reject(error)
      )
      .catch(reject)
  })
}

export default instance
