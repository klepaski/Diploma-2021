import styled, { css } from 'styled-components'
import { space } from 'styled-system'
import { Counter } from '../../controls/Counter/Counter'
import { ArrowRight2 } from '../../StyledComponents/Icon'
import { device } from '../../../lib/mediaDevice'

export const FooterCard = ({ title, ...props }) => {
  return (
    <WrapperFooterCard {...props}>
      <LabelF>{title}</LabelF>
      <ArrowRight2 />
    </WrapperFooterCard>
  )
}
export const EventItemWrapper = styled.div`
  ${space};
  margin-top: 10px;
`
export const EventItemImg = styled.img.attrs((props) => ({
  src: props.src,
}))`
  ${space};
  width: 100%;
`
export const EventItemStatus = styled.div`
  ${space};
  color: rgba(0, 0, 0, 0.5);
  font-size: 11px;
  text-transform: uppercase;
`
export const EventItemTitle = styled.div`
  ${space};
  color: #4a4a4a;
  font-size: 14px;
`
export const EventItemDescription = styled.div`
  ${space};
  font-size: 12px;
  line-height: 15px;
  color: #4a4a4a;
`
export const OfferCardWrapper = styled.div`
  background: #ffffff;
  //box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  // padding: 30px;
`
export const WrapperFooterCard = styled.div`
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
`
export const LabelF = styled.div`
  font-size: 18px;
  color: rgba(1, 1, 1, 0.7);
`
export const EventItemCardWrapper = styled.div`
  padding: 30px;
`
export const CardItemWrapper = styled.div`
  margin-top: 10px;
  position: relative;
  transition: all 0.2s ease-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
`
export const CardItemImg = styled.img`
  ${space};
  width: 100%;
  border-radius: 3px;
  height: calc(100% * 9 / 16);
  max-height: calc(100% * 9 / 16);
  /*object-fit: cover;*/
  object-fit: contain;
  overflow: hidden;
  object-position: center center;

  @media ${device.laptopDesktop} {
    height: auto;
    min-height: auto;
  }
`
export const CardItemImgWrapperCongrat = styled.img`
  ${space};
  width: 100%;
  border-radius: 3px;
  object-fit: contain;
  overflow: hidden;
  object-position: center center;
  height: 160px;
`
export const CardItemStatus = styled.div`
  ${space};
  color: rgba(0, 0, 0, 0.5);
  font-size: 11px;
  text-transform: uppercase;
`
export const CardItemTitle = styled.div`
  ${space};
  color: #4a4a4a;
  max-width: ${(p) => (p.isHorisontal ? '200px' : '320px')};
  font-size: 14px;
  margin-top: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'CircularProBold';
`
export const CardItemDescription = styled.div`
  ${space};
  font-size: 12px;
  line-height: 15px;
  color: #4a4a4a;
  overflow: hidden;
  white-space: normal;
  position: relative;

  ${(p) =>
    p.isSummary &&
    css`
      height: 45px;
      &::after {
        content: '';
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
        height: 10px;
        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #fff 75%);
      }
    `}
`
export const CardItemImgWrapper = styled.div`
  display: flex;
  height: calc(50vw * 9 / 16 - 13px);
  background: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 3px;
  //box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);

  @media ${device.laptopDesktop} {
    // height: calc(360px * 9 / 16);
    position: relative;
    height: 0;
    padding-top: 56.25%;
  }
`
export const CardOfferStatus = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  padding: 2px 5px;
  border-radius: 5px;
  background: #808080bd;
  color: #ffffff;
  font-size: 10px;
`
export const CardFade = styled.div`
  width: 100%;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 35%);
  height: 20px;
  margin-top: -20px;
  position: relative;
`
export const CongratCardWrapper = styled.div`
  ${space};
  background: #ffffff;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  // padding: 30px;
`
export const CongratCardWrapperW = styled.div`
  padding: 30px;
`

export const CardItemWrapperBig = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  margin-bottom: 20px;
  cursor: pointer;
`
export const CardItemWrapperBigTop = styled.div`
  padding: 30px;
`

export const CardItemImgWrapperBig = styled.div`
  display: flex;
  // height: 100px;
  height: calc((100vw - 90px) * 9 / 16);
  background: url(${(props) => props.src}) #c0c0c0;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 3px;

  @media ${device.laptopDesktop} {
    height: 180px;
  }
`
export const CardItemStatusBig = styled.div`
  ${space};
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
  text-transform: uppercase;
`
export const CardItemTitleBig = styled.div`
  ${space};
  color: #4a4a4a;
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;
`
export const CardItemDescriptionBig = styled.div`
  ${space};
  font-size: 12px;
  line-height: 15px;
  color: #4a4a4a;
  max-height: 40px;
  overflow: hidden;
  white-space: normal;
`
