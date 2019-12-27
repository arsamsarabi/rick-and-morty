import styled, { css } from 'styled-components'
import { Card } from '#components'

const StyledCard = styled(Card)`
  width: 200px;
  height: 150px;
`

const Display = styled.div(
  ({ color }) => css`
    min-height: 115px;
    background-color: ${color};
  `,
)

const Value = styled.div`
  padding: 8px;
`

const Row = styled.div`
  display: flex;
  margin: 16px 0 0;
  flex-wrap: wrap;
  &:not(:last-of-type) {
    margin-bottom: 32px;
  }
  & > div {
    margin: 0 8px 16px;
  }
`

export { StyledCard as Card, Display, Value, Row }
