import axios from 'axios'

const apiInstance = axios.create({
  baseURL: 'http://localhost:3009'
})

const createRequest = method => {
  return function(url, params = {}, data = {}) {
    return apiInstance.request({
      method,
      url: url,
      data,
      params
    })
  }
}

export const get = createRequest('get')
export const post = createRequest('post')
export const put = createRequest('put')
export const del = createRequest('delete')