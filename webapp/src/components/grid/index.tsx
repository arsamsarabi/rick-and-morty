import React, { ReactElement } from 'react'
import { Display } from '../display'
import { StyledGrid } from './Grid.styles'

export interface GridProps {
  items: CharacterDisplay[]
}

export const Grid = ({ items }): ReactElement => {
  return (
    <StyledGrid>
      {items.map(({ image, apiId, name }) => (
        <Display key={apiId} id={apiId} image={image} title={name} />
      ))}
    </StyledGrid>
  )
}
