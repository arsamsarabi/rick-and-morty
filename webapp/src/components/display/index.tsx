import React, { ReactElement } from 'react'
import { StyledDisplay, Avatar } from './display.styles'

export const Display = ({ image, title }: CharacterDisplay): ReactElement => {
  return (
    <StyledDisplay>
      <Avatar image={image} />
      <h1>{title}</h1>
    </StyledDisplay>
  )
}
