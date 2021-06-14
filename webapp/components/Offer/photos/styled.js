import styled, { css } from 'styled-components'
import { space } from 'styled-system'

export const WrapLine = styled.div`
  ${space};
  display: flex;
  justify-content: space-between;
`
export const LeftText = styled.div`
  ${space};
  font-size: 20px;
  width: 50%;
`
export const RightText = styled.div`
  ${space};
  color: #6436c7;
  text-align: right;
  width: 50%;
  font-size: 16px;
  cursor: pointer;
`
