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
