import { Character, Location, Episode } from '../database'
import { normalizeCharacters, normalizeLocations, normalizeEpisodes } from './helpers'
import { getAllPaginatedData } from './services'

const fetchAndSaveAllCharacters = async (): Promise<void> => {
  Character.collection.drop()
  const results = await getAllPaginatedData('character')
  const characters = normalizeCharacters(results)
  characters.forEach(character => {
    const newCharacter = new Character(character)
    newCharacter.save()
    console.log(`Character: ${character.name} saved`)
  })
}

const fetchAndSaveAllLocations = async (): Promise<void> => {
  Location.collection.drop()
  const results = await getAllPaginatedData('location')
  const locations = normalizeLocations(results)
  locations.forEach(location => {
    const newLocation = new Location(location)
    newLocation.save()
    console.log(`Location: ${location.name} saved`)
  })
}

const fetchAndSaveAllEpisodes = async (): Promise<void> => {
  Episode.collection.drop()
  const results = await getAllPaginatedData('episode')
  const episodes = normalizeEpisodes(results)
  episodes.forEach(episode => {
    const newEpisode = new Episode(episode)
    newEpisode.save()
    console.log(`Episode: ${episode.name} saved`)
  })
}

export const seed = async () => {
  try {
    await fetchAndSaveAllCharacters()
    await fetchAndSaveAllLocations()
    await fetchAndSaveAllEpisodes()
  } catch (err) {
    console.error(err)
  }
}
