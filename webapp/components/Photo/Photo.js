import styled, { css } from 'styled-components'
import { space } from 'styled-system'
import { device } from '../../lib/mediaDevice'

const Img = styled.img.attrs((props) => ({ src: props.src }))``

const WrapperCover = styled.div`
  ${space};
  width: 100%;

  ${Img} {
    width: 100%;
    border-radius: 3px;
  }
`
export const CoverPhotoPreview = styled.div`
  ${space};
  width: 100%;
  height: calc(100vw * 9 / 16 - 40px);
  background: url(${(props) => props.src}) #c0c0c0;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 3px;
  margin-bottom: 20px;

  @media ${device.laptopDesktop} {
    height: 200px;
    background-color: inherit;
  }
`

const WrapperItem = styled.div`
  ${space};
  width: 100%;
  height: 120px;
  max-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; // border: 1px solid #efefef;

  @media ${device.laptopDesktop} {
    height: 300px;
    max-height: 300px;
  }

  ${Img} {
    width: 100%;
    border-radius: 3px;
  }
`
const WrapperImg = styled.div`
  ${space};
  width: 100%;
  height: 100%;
  background: url(${(props) => props.src}) center center no-repeat;
  background-size: contain;

  @media ${device.laptopDesktop} {
    //width: 300px;
  }
`

export const IconCover = styled.div`
  ${space};
  width: 27px;
  height: 27px;
  display: inline-block;
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.8);
  border: 2px solid #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);

  ${(props) =>
    props.active &&
    css`
      background: #00c874;
    `}
`

export const CoverPhoto = ({ src }) => {
  return (
    <WrapperCover>
      <Img src={src} />
    </WrapperCover>
  )
}

export const PhotoItem = ({ src, active, hasIconCover, ...props }) => {
  return (
    <WrapperItem {...props}>
      <WrapperImg src={src} />

      {/*<Img src={src} />*/}
      {!!hasIconCover && <IconCover active={!!active} />}
    </WrapperItem>
  )
}
