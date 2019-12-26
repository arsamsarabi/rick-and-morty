declare type RawLocationType = {
  id: number
  name: string
  type: string
  dimension: string
  residents: string[]
  created: string
  url: string
}

declare type OmittedFromRawLocationType = 'id' | 'url'

declare type LocationType = Omit<RawLocationType, OmittedFromRawLocationType> & {
  apiId: number
}
