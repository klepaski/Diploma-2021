import styled, { css } from 'styled-components'
import { space } from 'styled-system'
import homeBg from '../../static/img/home-bg.jpg'
import homeBgDesktop from '../../static/img/bg-desktop.png'
import { device } from '../../lib/mediaDevice'
import { MainTitle, SubTitle } from '../StyledComponents/Text'
import { Bars, GreenArrowDown, PurpleArrowDown, Close } from '../StyledComponents/Icon'
import { Logo } from '../StyledComponents/Icon'

const HomepageHeaderWrapper = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 40%) 0%, rgba(0, 0, 0, 30%) 100%),
    url(${homeBg}) no-repeat;
  background-size: cover;
  mix-blend-mode: multiply;
  padding: 40px 15px 20px 15px;
  height: 65vh;

  ${MainTitle} {
    padding-top: 30px;
    padding-bottom: 10px;
  }
  ${SubTitle} {
    padding-top: 25px;
    margin-bottom: 7px;
  }

  @media ${device.laptopDesktop} {
    background: linear-gradient(180deg, rgba(0, 0, 0, 40%) 0%, rgba(0, 0, 0, 30%) 100%),
      url(${homeBgDesktop}) no-repeat;
    background-size: cover;
    height: 100vh;
    padding: 50px 75px 40px;

    ${MainTitle} {
      position: absolute;
      bottom: 10%;
      left: 10%;
      font-weight: 900;
      font-size: 54px;
    }
  }

  @media ${device.iPad} {
    padding: 50px 5% 40px;
    background-position: center;
  }
`

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 32px;
  color: #ffffff;

  > div {
    display: flex;
    align-items: center;
  }

  ${SubTitle} {
    padding-top: 0;
  }

  ${(props) =>
    props.isHomepage &&
    css`
      position: absolute;
      width: 100%;
      z-index: 2;
      padding: 0 15px;
      margin-top: 15px;

      @media ${device.laptopDesktop} {
        height: 50px;
        padding: 0 75px;
      }
    `}

  @media ${device.laptopDesktop} {
    ${Logo} {
      width: 40px;
    }
    ${Bars} {
      display: none;
    }
  }
`
const HeaderWrapperProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2px 17px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  color: #ffffff;

  > div {
    display: flex;
    align-items: center;
  }

  ${GreenArrowDown} {
    padding-left: 8px;
  }
`
const HeaderWrapperOffer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px 17px;
  color: #ffffff;

  > div {
    display: flex;
    align-items: center;
  }

  ${PurpleArrowDown} {
    padding-left: 8px;
  }
`
const HeaderWrapperReg = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 32px;
  color: #000000;
  font-size: 12px;
  padding: 0 15px;
  position: fixed;
  width: 100%;
  background-color: white;
`

export const SidebarWrapper = styled.div`
  height: calc(100vh - 64px);
  width: 100vw;
  min-width: 100vw;
  position: absolute;
  z-index: 999;
  background-color: #ffffff;
  padding: 25px 15px;
  left: 0;

  ${(props) =>
    props.isHomepage &&
    css`
      height: 100vh;
      padding-top: 15px;
    `}

  @media ${device.laptopDesktop} {
    width: 250px;
    min-width: 250px;
    height: auto;
    padding: 15px 25px;
    position: absolute;
    left: -175px;
    top: 50px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    ${Close} {
      display: none;
    }
  }
`
export const SidebarItem = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-size: 18px;
  padding-bottom: 15px;

  ${(props) =>
    props.isNoActive &&
    css`
      color: grey;
      cursor: not-allowed;
    `}

  :hover {
    color: #00c874;
    cursor: pointer;
  }
`
export const SidebarHeaderHome = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 32px;
  // background: red;

  ${Bars} {
    padding-left: 10px;
    height: 20px;
  }

  ${SubTitle} {
    color: #000000;
  }
`
export const HeaderLogo = styled.img.attrs((props) => ({
  src: props.src,
}))`
  ${space};
  width: 30px;
  border-radius: 15px;
`
export const PreviewBtn = styled.div`
  height: 60px;
  color: #00c874;
`

export {
  HomepageHeaderWrapper,
  HeaderWrapper,
  HeaderWrapperReg,
  HeaderWrapperProfile,
  HeaderWrapperOffer,
}
