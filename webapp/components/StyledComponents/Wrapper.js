import styled, { css } from 'styled-components'
import { space } from 'styled-system'
import { device } from '../../lib/mediaDevice'

const WrapperMain = styled.div`
  ${space};
  padding: 15px;
`
const Wrapper = styled.div`
  ${space};
  text-align: ${(props) => (props.textCenter ? 'center' : props.textRight ? 'right' : 'left')};

  a {
    color: #00c874;
    text-decoration: none;
  }

  ${(props) =>
    props.width100 &&
    css`
      .react-datepicker-wrapper,
      .react-datepicker__input-container,
      input {
        width: 100%;
      }
    `}
`
const WrapperHeight = styled.div`
  ${space};
  min-height: calc(100vh - 260px);
  position: relative;

  @media ${device.laptopDesktop} {
    //padding-bottom: 150px;
    //min-height: auto;
  }
`

export { WrapperMain, Wrapper, WrapperHeight }
