import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { Card } from '../card'

export const StyledDisplay = styled(Card)(({ theme }) => {
  return css`
    background-color: ${rgba(theme.palette.primary, 1)};
    & > h1 {
      font-size: 16px;
      font-family: var(--font-headings);
      color: ${theme.palette.contrast};
      font-weight: 700;
      padding: 2px 2px 2px 6px;
    }
  `
})
export interface AvatarProps {
  theme: Theme
  image: string
}

export const Avatar = styled.section.attrs(({ image, theme }: AvatarProps) => ({
  style: {
    backgroundImage: `url(${image})`,
  },
}))`
  width: 100%;
  height: 175px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
`
