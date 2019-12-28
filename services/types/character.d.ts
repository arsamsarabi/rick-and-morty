declare type RawCharacterType = {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  image: string
  episode: string[]
  url: string
  created: string
}

declare type OmittedFromRawCharacter = 'origin' | 'location' | 'id' | 'episode' | 'url'

declare type CharacterType = Omit<RawCharacterType, OmittedFromRawCharacter> & {
  apiId: string
  origin: string
  location: string
  episodesCount?: number
  episodes: string[]
}
