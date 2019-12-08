export const normalizeCharacters = (raw: any): CharacterType[] =>
  raw.map((obj: any) => ({
    apiId: obj.id,
    name: obj.name,
    status: obj.status,
    species: obj.species,
    type: obj.type,
    gender: obj.gender,
    origin: obj.origin.name,
    originUrl: obj.origin.url,
    location: obj.location.name,
    locationUrl: obj.location.url,
    image: obj.image,
    episode: obj.episode,
    created: obj.created,
  }))

export const normalizeLocations = (raw: any): LocationType[] =>
  raw.map((obj: any) => ({
    apiId: obj.id,
    name: obj.name,
    type: obj.type,
    dimension: obj.dimension,
    residents: obj.residents,
    created: obj.created,
  }))

export const normalizeEpisodes = (raw: any): EpisodeType[] =>
  raw.map((obj: any) => ({
    apiId: obj.id,
    name: obj.name,
    air_date: obj.air_date,
    episode: obj.episode,
    characters: obj.characters,
    created: obj.created,
  }))
