import { axios } from './axios'

export const getAllPaginatedData = async <T>(url: string, data: T[] = []): Promise<T[]> => {
  const response = await axios.get(url)
  const result: T[] = [...data, ...response.data.results]
  if (response.data.info.next.length) {
    const { next } = response.data.info
    const nextUrl = next.substring(next.indexOf(url), next.length)
    return await getAllPaginatedData(nextUrl, result)
  }
  return result
}
