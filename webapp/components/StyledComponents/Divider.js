import styled, { css } from 'styled-components'
import { space } from 'styled-system'
import { device } from '../../lib/mediaDevice'

export const Divider = styled.div`
  ${space};
  height: 1px;
  margin-left: auto;
  margin-right: auto;

  ${(props) =>
    props.green &&
    css`
      background-color: rgba(0, 200, 116, 0.5);
    `}

  ${(props) =>
    props.grey &&
    css`
      background-color: rgba(0, 0, 0, 0.15);
    `}
    
    ${(props) =>
    props.full &&
    css`
      width: 100%;
    `}
    
    ${(props) =>
    props.half &&
    css`
      width: 50%;
    `}
    
    @media ${device.laptopDesktop} {
    ${(props) =>
      props.hideDsk &&
      css`
        display: none;
      `}
  }
`

export const DividerEmpty = styled.div`
  ${space};
  height: ${(props) => `${props.height}px`};
`
