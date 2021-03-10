import { extend } from 'umi-request'
function errorHandler (error) {
  const codeMap = {
    500: '系统异常',
    404: '请求无效',
    403: '请求403'
  }
  if (error.response) {
    const status = codeMap[error.response.status]
    if (status) {
      alert(status)
    } else {
      throw error
    }
  } else {
    throw error
  }
  //
}
const request = extend({
  prefix: 'xxx', // 相当于baseurl
  timeout: 10000,
  errorHandler
})

// request拦截器, 改变url 或 options.
request.interceptors.request.use((url, options) => {
  return {
    url,
    options: { ...options, interceptors: true }
  }
})

// 局部拦截器使用
request.interceptors.response.use((response, options) => {
  return response
})

export default request
