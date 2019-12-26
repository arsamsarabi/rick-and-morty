import fs from 'fs'
import path from 'path'

const writeToFile = <T>(objectName: string, object: T): void => {
  fs.writeFile(path.resolve(__dirname, `./mocks/all${objectName}.json`), object, (err: any): void => {
    console.error(err)
  })
}

const extractApiIdFromUrl = (url: string): string => url.substring(url.lastIndexOf('/') + 1, url.length)

const extractApiIdsFromUrlArray = (episodes: string[]): string[] =>
  episodes.map(episode => extractApiIdFromUrl(episode))

export const processCharacters = (characters: RawCharacterType[]): CharacterType[] => {
  const result: CharacterType[] = characters.map(
    ({ id, name, status, species, type, gender, origin, location, image, episode, created }: RawCharacterType) => ({
      apiId: id,
      name,
      status,
      species,
      type,
      gender,
      origin: extractApiIdFromUrl(origin.url),
      location: extractApiIdFromUrl(location.url),
      image,
      episodes: extractApiIdsFromUrlArray(episode),
      created,
    }),
  )
  writeToFile('characters', JSON.stringify(result))
  return result
}

export const processLocations = (locations: RawLocationType[]): LocationType[] => {
  const result: LocationType[] = locations.map(
    ({ id, name, type, dimension, residents, created }: RawLocationType) => ({
      apiId: id,
      name,
      type,
      dimension,
      residents: extractApiIdsFromUrlArray(residents),
      created,
    }),
  )
  writeToFile('locations', JSON.stringify(result))
  return result
}

export const processEpisodes = (episodes: RawEpisodeType[]): EpisodeType[] => {
  const result: EpisodeType[] = episodes.map(
    ({ id, name, air_date, episode, characters, created }: RawEpisodeType) => ({
      apiId: id,
      name,
      air_date,
      episode,
      characters: extractApiIdsFromUrlArray(characters),
      created,
    }),
  )
  writeToFile('episodes', JSON.stringify(result))
  return result
}
