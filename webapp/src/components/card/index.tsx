import styled, { css } from 'styled-components'
import { rgba } from 'polished'

export const Card = styled.div(({ theme }) => {
  return css`
    background-color: ${theme.colors.white};
    border-radius: 10px;
    box-shadow: 9px 9px 16px ${rgba(theme.palette.primary, 0.2)},
      -9px -9px 16px ${rgba(theme.colors.white, 0.9)};
    width: 175px;
    height: 200px;
    overflow: hidden;
    transition: 0.2s all ease-in-out;

    &:hover {
      transform: scale(1.15, 1.15);
    }
  `
})
