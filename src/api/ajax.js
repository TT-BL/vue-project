import axios from 'axios'
import config from '../config'
const baseURL = config.baseURL

const ajax = axios.create({
  baseURL: baseURL,            //api请求的baseURL
  timeout: 0,
  withCredentials: true, // 允许跨域 cookie
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
  maxContentLength: 2000,
  transformResponse: [function (data) {
    try {
      data = JSON.parse(data);
    } catch (e) {
      data = {};
    }
    return data
  }]
})

// get
export const _get = (req) => {
  return ajax.get(req.url, { params: req.data })
}

// post
export const _post = (req) => {
  return ajax.post({ method: 'post', url: `/${req.url}`, data: req.data })
}

// patch
export const _put = (req) => {
  return ajax.post({ method: 'put', url: `/${req.url}`, data: req.data })
}

// delete
export const _delete = (req) => {
  return ajax.post({ method: 'delete', url: `/${req.url}`, data: req.data })
}

// post and no withCredentials
export const _postNoWithCredentials = (req) => {
  return axios({ method: 'post', url: `/${req.url}`, data: req.data, withCredentials: false })
}
