import React, { ReactElement } from 'react'
import { StyledDisplay, Content } from './display.styles'

export const Display = ({ title, image }: CharacterDisplay): ReactElement => {
  return (
    <StyledDisplay image={image}>
      <Content>
        <h1>{title}</h1>
      </Content>
    </StyledDisplay>
  )
}
