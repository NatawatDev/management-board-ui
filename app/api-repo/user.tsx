import axiosInstance from "../axios";

const baseUrl = process.env.NEXT_PUBLIC_APIENDPOINT

export const signInUser = (data: any) => {
  return axiosInstance.post(`${baseUrl}/sign-in`, data)
}