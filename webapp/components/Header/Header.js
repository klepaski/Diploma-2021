import React, { useState, useContext, useEffect } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { MainContext, MainConsumer } from '../contextProviders/MainContext'
import { SubTitle } from '../StyledComponents/Text'
import {
  HeaderWrapper,
  HeaderWrapperReg,
  HeaderWrapperProfile,
  HeaderWrapperOffer,
  HeaderLogo,
  PreviewBtn,
} from './styledHeader'
import { Text } from '../../components/StyledComponents/Text'
import {
  Logo,
  LogoGreen,
  LogoPurple,
  Bars,
  GreenArrowDown,
  PurpleArrowDown,
  PlusPurple,
  Preferences,
  ArrowLeft,
} from '../StyledComponents/Icon'
import { OnlyMobile, OnlyDesktop } from '../StyledComponents/Grid'
import { logout } from '../../utils/auth'
import { Input } from '../../components/controls/Input/Input'
import Sidebar from './Sidebar'
import { modifySrc } from '../../utils/modifySrc'
import styled, { css } from 'styled-components'
import { device } from '../../lib/mediaDevice'
import { useDetectDevice } from '../../lib/useDetectDevice'
import menuIcon from '../../static/img/menu.svg'
import userIcon from '../../static/img/user.svg'

const Header = ({
  isReg,
  isProfile,
  isOffer,
  isPreview,
  previewOfferCb,
  isHomepage,
  hiddeSave,
  isTransparent,
}) => {
  const currentDevice = useDetectDevice()
  const { me, checkedMe, unreadMessages } = useContext(MainContext)
  const [openedSidebar, setOpen] = useState(false)
  const [isScrolled, setScrolled] = useState(false)

  const hasHeaderBg = (isProfile || isReg) && !isTransparent

  useEffect(() => {
    if (hasHeaderBg) {
      setScrolled(true)
      return
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > 300) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleSidebar = () => {
    if (!openedSidebar) {
      if (currentDevice.isMobileTablet) {
        document.getElementsByTagName('body')[0].className = 'no-scroll'
      }
    } else {
      document.getElementsByTagName('body')[0].classList.remove('no-scroll')
    }
    setOpen(!openedSidebar)
  }

  const hideSidebar = () => {
    document.getElementsByTagName('body')[0].classList.remove('no-scroll')
    setOpen(false)
  }

  if (process.browser && !openedSidebar) {
    document.getElementsByTagName('body')[0].classList.remove('no-scroll')
  }

  // console.log(isReg, isProfile, isOffer, isPreview)

  return (
    <>
      <OnlyMobile>
        {isReg ? (
          <HeaderWrapperReg>
            {hiddeSave ? (
              <>
                {me.firstName} {me.lastName}
              </>
            ) : (
              <div
                onClick={() => Router.push('/profile/offers', `/profile/offers`, { shallow: true })}
              >
                Save end Exit
              </div>
            )}
          </HeaderWrapperReg>
        ) : isProfile ? (
          <HeaderWrapperProfile>
            <div onClick={toggleSidebar}>
              <LogoGreen />
              <GreenArrowDown />
            </div>
            <SearchBox>
              {previewOfferCb ? (
                <PreviewBtn onClick={() => previewOfferCb()}>Preview</PreviewBtn>
              ) : (
                <Input placeholder={'Search'} ml={10} height40 />
              )}
            </SearchBox>
          </HeaderWrapperProfile>
        ) : isPreview ? (
          <HeaderWrapperOffer>
            <div>
              <LogoPurple />
              <PurpleArrowDown />
            </div>
            <div>
              <Text blue>Preview</Text>
            </div>
          </HeaderWrapperOffer>
        ) : (
          <HeaderWrapper isHomepage={!!isHomepage}>
            <div>
              <Logo onClick={toggleSidebar} />
              {me.id && <Bars onClick={toggleSidebar} />}
              {!!unreadMessages && <UnreadMessages />}
            </div>
            {checkedMe && (
              <>
                {
                  !me.id ? (
                    <Link href="/login" as={'/login'}>
                      <SubTitle white>Log in</SubTitle>
                    </Link>
                  ) : (
                    <HeaderLogo
                      src={modifySrc(me.profilePhotoURL, 'profile')}
                      onClick={() => Router.push('/profile')}
                    />
                  )
                  // <SubTitle white onClick={logout}>Logout</SubTitle>
                }
              </>
            )}
          </HeaderWrapper>
        )}
        {openedSidebar && (
          <Sidebar isHomepage={!!isHomepage} toggleSidebar={toggleSidebar} logout={logout} />
        )}
      </OnlyMobile>

      <OnlyDesktop>
        <HeaderDesktop isScrolled={isScrolled} hasHeaderBg={hasHeaderBg}>
          <Link href={'/'}>
            <Logo />
          </Link>
          <Control onClick={toggleSidebar}>
            <MenuBurger src={menuIcon} />
            {me.id && (
              <IconPerson>
                <img src={userIcon} alt="" />
              </IconPerson>
            )}
            {openedSidebar && (
              <Sidebar
                isHomepage={!!isHomepage}
                toggleSidebar={toggleSidebar}
                hideSidebar={hideSidebar}
                logout={logout}
              />
            )}
          </Control>
        </HeaderDesktop>
      </OnlyDesktop>
    </>
  )
}

export default Header

const UnreadMessages = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #00c874;
  position: relative;
  top: -7px;
  right: 5px;
`
const SearchBox = styled.div`
  @media ${device.laptopDesktop} {
    display: none !important;
  }
`
const HeaderDesktop = styled.div`
  position: fixed;
  height: 70px;
  width: 100%;
  padding: 0 5%;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;

  // @keyframes mymove {
  //   from {
  //     background-color: inherit;
  //   }
  //   to {
  //     background-color: #1d1d1df5;
  //   }
  // }

  ${(p) =>
    p.isScrolled &&
    css`
      // background: #1d1d1df5;
      // animation: mymove 1s ease;
      background-color: #1d1d1df5;
      -webkit-transition: background-color 500ms linear;
      -ms-transition: background-color 500ms linear;
      transition: background-color 500ms linear;
      // border-bottom: 1px solid #000000;
    `}

  ${Logo} {
    width: 46px;
  }
`
const Control = styled.div`
  position: relative;
  height: 40px;
  min-width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 0 15px;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.15);
  border-radius: 30px;
  cursor: pointer;
`
const MenuBurger = styled.img``
const IconPerson = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00c874;
  border-radius: 15px;
  margin-left: 5px;
  position: relative;
  left: 5px;
`
