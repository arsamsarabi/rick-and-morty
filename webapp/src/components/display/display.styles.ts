import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { Card } from '../card'

export interface StyledDisplayProps {
  theme: Theme
  image: string
}

export const StyledDisplay = styled(Card)(({ theme, image }: StyledDisplayProps) => {
  return css`
    display: flex;
    flex-direction: column;
    background-image: url(${image});
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
  `
})

export const Content = styled.section(({ theme }) => {
  return css`
    padding: 16px;
    font-family: var(--font-headings);
    background-color: ${rgba(theme.palette.primary, 0.95)};
    color: ${theme.palette.accent};
    height: 75px;
    margin-top: auto;
    & > h1 {
      font-size: 32px;
    }
  `
})
