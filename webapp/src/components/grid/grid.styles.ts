import styled, { css } from 'styled-components'
import { rgba } from 'polished'

export const StyledGrid = styled.div(({ theme }) => {
  return css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    & > div {
      margin: 16px;
    }
  `
})
