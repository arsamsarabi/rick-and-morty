import { axios } from './axios'

export const getAllCharacters = async (
  url: string = 'character',
  characters: CharacterType[] = [],
): Promise<CharacterType[]> => {
  const response = await axios.get(url)
  const result: CharacterType[] = [...characters, ...response.data.results]
  if (response.data.info.next.length) {
    const { next } = response.data.info
    const nextUrl = next.substring(next.indexOf('character'), next.length)
    return await getAllCharacters(nextUrl, result)
  }
  return result
}
