import axios from "axios"
import { redirect } from 'next/navigation'

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APIENDPOINT
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      sessionStorage.clear()
      redirect('/')
    }
    return Promise.reject(error)
  },
)

export default axiosInstance