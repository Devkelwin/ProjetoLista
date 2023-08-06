import axios from 'axios'

const api = axios.create({
  baseURL: 'https://backproducts.vercel.app',
})

api.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json'

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default api
