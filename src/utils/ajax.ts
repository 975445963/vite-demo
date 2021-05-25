import axios from 'axios'
import { omitBy } from 'lodash-es'

const ajax = axios.create({})
const clean = (data: Record<string, any>) => omitBy(data, item => item === '')

ajax.interceptors.request.use(config => {
  // 清除空数据
  config.params = clean(config.params)
  config.data = clean(config.data)

  return config
})

ajax.interceptors.response.use(
  res => {
    return res.data
  },
  err => {
    throw new Error('rejected error')
  }
)
