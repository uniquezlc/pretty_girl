import axios from 'axios'

//2。可直接返回，因为默认返回就是Promise类型
export function request(config){
  const instance = axios.create({
    baseURL : 'http://123.207.32.32:8000'
  })
  //拦截器

  //请求拦截
  instance.interceptors.request.use(config => {
    //进行请求处理如：登陆验证，显示加载图标等
    //console.log(config)
    //返回配置
    return config
  },err => {
    //请求错误
    //console.log(err)
  })
  //响应拦截
  instance.interceptors.response.use(res => {
    //处理结果
    //console.log(res)
    //返回数据(f返回了结果中的数据)
    return res.data
  },err => {
    //console.log(err)
  })

  return instance(config)
}


/* export function request(config,success,failure){
  //1.创建axios的实例
  const instance = axios.create({
    baseURL : 'http://123.207.32.32:8000'
  })
  //2.发送网络请求
  instance(config).then(res => {
    success(res)
  }).catch(err => {
    failure(err)
  })
} */

//使用promise来返回相应请求
/* export function request(config){
  return new Promise((resolve,reject) => {
    //1.创建axios的实例
    const instance = axios.create({
      baseURL : 'http://123.207.32.32:8000'
    })
    //2.发送网络请求
    instance(config).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })


  })
} */
