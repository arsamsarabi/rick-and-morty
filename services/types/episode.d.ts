declare type RawEpisodeType = {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  created: string
  url: string
}

declare type OmittedFromRawEpisodeType = 'id' | 'url'

declare type EpisodeType = Omit<RawEpisodeType, OmittedFromRawEpisodeType> & {
  apiId: string
}
