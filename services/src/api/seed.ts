import { Character, Location, Episode } from '../database'
import { fetchAllCharacters, fetchAllLocations, fetchAllEpisodes } from './services'
import { processCharacters, processLocations, processEpisodes } from './helpers'

const saveCharacters = async (characters: CharacterType[]): Promise<void> => {
  let list = await Character.db.db
    .listCollections({
      name: Character.collection.name,
    })
    .toArray()

  if (list.length) {
    Character.collection.drop()
  }
  characters.forEach(character => {
    const newCharacter = new Character(character)
    newCharacter.save()
    console.log(`Character: ${character.name} saved`)
  })
}

const saveLocations = async (locations: LocationType[]): Promise<void> => {
  Location.collection?.drop()
  locations.forEach(location => {
    const newLocation = new Location(location)
    newLocation.save()
    console.log(`Location: ${location.name} saved`)
  })
}

const saveEpisodes = async (episodes: EpisodeType[]): Promise<void> => {
  Episode.collection?.drop()
  episodes.forEach(episode => {
    const newEpisode = new Episode(episode)
    newEpisode.save()
    console.log(`Episode: ${episode.name} saved`)
  })
}

export const seed = async () => {
  try {
    const _characters: RawCharacterType[] = await fetchAllCharacters()
    const _locations: RawLocationType[] = await fetchAllLocations()
    const _episodes: RawEpisodeType[] = await fetchAllEpisodes()
    const characters: CharacterType[] = processCharacters(_characters)
    const locations: LocationType[] = processLocations(_locations)
    const episodes: EpisodeType[] = processEpisodes(_episodes)
    await saveCharacters(characters)
    await saveLocations(locations)
    await saveEpisodes(episodes)
  } catch (err) {
    console.error(err)
  }
}
