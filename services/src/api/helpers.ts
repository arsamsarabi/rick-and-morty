import axios from 'axios'

export const api = (query: any) => {
  const axiosInstance = axios.create({
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' },
    baseURL: 'https://rickandmortyapi.com/api/',
  })
  return axiosInstance.get(query)
}
