import { Character } from '../../database/models/Character'
import { Episode } from '../../database/models/Episode'
import { Location } from '../../database/models/Location'

const queries = {
  characters: () => {
    return Character.find({})
  },
  character: (_: any, { id }: { id: string }) => {
    return Character.findOne({ apiId: id })
  },
  locations: () => {
    return Location.find({})
  },
  location: (_: any, { id }: { id: string }) => {
    return Location.findOne({ apiId: id })
  },
  episodes: () => {
    return Episode.find({})
  },
  episode: (_: any, { id }: { id: string }) => {
    return Episode.findOne({ apiId: id })
  },
}

export const resolvers = {
  Query: queries,
  Character: {
    episodes: (character: CharacterType) => {
      let result: any = []
      character.episodes.forEach((e: string) => {
        result = [...result, Episode.findOne({ apiId: e })]
      })
      return result
    },
    location: (character: CharacterType) => {
      return Location.findOne({ apiId: character.location })
    },
    origin: (character: CharacterType) => {
      return Location.findOne({ apiId: character.origin })
    },
  },
  Location: {
    residents: (location: LocationType) => {
      let result: any = []
      location.residents.forEach((r: string) => {
        result = [...result, Character.findOne({ apiId: r })]
      })
      return result
    },
  },
  Episode: {
    characters: (episode: EpisodeType) => {
      let result: any = []
      episode.characters.forEach((c: string) => {
        result = [...result, Character.findOne({ apiId: c })]
      })
      return result
    },
  },
}
