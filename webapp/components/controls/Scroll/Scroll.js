import styled from 'styled-components'
import { space } from 'styled-system'
import { CardItemImgWrapper } from '../../Offer/cards/styledCard'
import { device } from '../../../lib/mediaDevice'

const HorizontalScrollWrapper = styled.div`
  ${space};
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
  width: 100%;
  white-space: nowrap;

  ::-webkit-scrollbar {
    display: none;
  }

  @media ${device.laptopDesktop} {
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 -10px;
  }
`

const HorizontalScrollItem = styled.div`
  ${space};
  cursor: pointer;
  flex: 0 0 70%;
  margin-right: 10px;

  ${CardItemImgWrapper} {
    //width: 260px;
    //height: calc(260px * 9 / 16);
  }

  @media ${device.laptopDesktop} {
    flex: 0 0 30%;
    margin-bottom: 20px;
    margin-right: 0;
    padding: 10px;

    ${CardItemImgWrapper} {
      //width: 330px;
      //height: calc(330px * 9 / 16);
    }
  }

  @media ${device.iPad} {
    //flex: 0 0 30%;
    //margin-bottom: 20px;
    //margin-right: 0;
    //padding: 10px;

    ${CardItemImgWrapper} {
      //width: 260px;
      //height: calc(260px * 9 / 16);
    }
  }
`

export { HorizontalScrollWrapper, HorizontalScrollItem }
