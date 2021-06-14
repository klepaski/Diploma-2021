import React, { useState, useContext, useEffect, memo } from 'react'
import Link from 'next/link'
import axios from 'axios'
import styled, { css } from 'styled-components'
import { device } from '../lib/mediaDevice'
import { MainContext, MainConsumer } from '../components/contextProviders/MainContext'
import SearchBlock from '../components/Offer/search/SearchBlock'
import Card1 from '../static/img/card-1.png'
import Card2 from '../static/img/card-2.png'
import Card3 from '../static/img/card-3.png'
import {
  MainSubTitle,
  MainTitle,
  SubTitle,
  SubTitle16,
  Text,
} from '../components/StyledComponents/Text'
import { Divider } from '../components/StyledComponents/Divider'
import ModalCookies from '../components/Modal/ModalCookies'
import Header from '../components/Header/Header'
import { Button } from '../components/controls/Button/Button'
import Router from 'next/router'
import { HomepageHeaderWrapper } from '../components/Header/styledHeader'
import { withReatom } from '../lib/withReatom'

const MainPage = () => {
  const [isOpenedModalCookie, toogleOpenModal] = useState(false)
  const { me, checkedMe } = useContext(MainContext)

  if (!me.role) me.role = []
  let isProgrammer = me.role.includes('programmer')

  let d = new Date()
  d.setDate(d.getDate() - 1)
  let from = new Date(d).getTime()

  return (
    <>
      <Header isHomepage />
      <HomepageHeaderWrapper className="homepage-header-wrap">
        <SearchBlock />
        <MainTitle>
          Book programmers. <br />
          Find clients. <br />
          All here - on Programmerbooking. <br />
        </MainTitle>
      </HomepageHeaderWrapper>


        <HomeWrapper>
            <Divider grey full mb={30} />

            <WrapperDesktop>
                <Flex>
                    <Link href={`/offers/categories?last=${20}`}>
                        <Card>
                            <img src={Card1} alt="" />
                            <Info>
                                <CardInfoTitle>Recently added</CardInfoTitle>
                                <CardInfoDescr>Last 20 offers from programmers!</CardInfoDescr>
                            </Info>
                        </Card>
                    </Link>
                    <Link href={`/offers/categories?search=asp`}>
                        <Card>
                            <img src={Card2} alt="" />
                            <Info>
                                <CardInfoTitle>ASP .NET</CardInfoTitle>
                                <CardInfoDescr>ASP .NET programmer offers for you!</CardInfoDescr>
                            </Info>
                        </Card>
                    </Link>
                    <Link href={`/offers/categories?search=test`}>
                        <Card>
                            <img src={Card3} alt="" />
                            <Info>
                                <CardInfoTitle>Testing</CardInfoTitle>
                                <CardInfoDescr>Best manual and auto-testing offers today!</CardInfoDescr>
                            </Info>
                        </Card>
                    </Link>
                </Flex>

            </WrapperDesktop>
        </HomeWrapper>

        <ModalCookies
        isOpen={isOpenedModalCookie}
        afterOpenModal={() => {}}
        closeModal={() => toogleOpenModal(!isOpenedModalCookie)}
      />
    </>
  )
}

MainPage.getInitialProps = async ({ req }) => {
  console.log('index page')
  return {}
}
export default withReatom(MainPage)

const Holiday = styled.div`
  @media ${device.laptopDesktop} {
    background: #322449;
    padding: 40px 10%;

    ${MainSubTitle} {
      margin-top: 0;
      font-size: 28px;
      color: #ffffff;
    }
    ${Divider} {
      background-color: #ffffff;
      display: none;
    }
    ${SubTitle16} {
      color: #ffffff;
      font-weight: bold;
      margin-top: 10px;
      // fonnt-size: 18px;
    }
    ${Text} {
      color: #ffffff;
      font-size: 12px;
      margin-bottom: 0;
    }

    .flex-2-column {
      width: 50%;
      margin-left: 35%;
    }
  }
`
const HomeWrapper = styled.div`
  padding: 20px 15px 20px 15px;

  @media ${device.laptopDesktop} {
    padding: 0;
  }
`
const WrapperDesktop = styled.div`
  @media ${device.laptopDesktop} {
    width: 80%;
    margin: 0 auto;
  }
`
const Flex = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 50px;

  @media ${device.mobile} {
    flex-direction: column;
  }

  @media ${device.laptopDesktop} {
  }
`
const Card = styled.div`
  width: 100%;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  
  @media ${device.mobile} {
    margin-bottom: 20px;
  }

  @media ${device.laptopDesktop} {
    width: 32%;
  }

  img {
    width: 100%;
  }
`
const Info = styled.div`
  padding: 5%;
`
const CardInfoTitle = styled.div`
  //font-weight: bold;
  font-family: 'CircularProBold';
  font-size: 17px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 5px;
`
const CardInfoDescr = styled.div`
  font-size: 13px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.5);
`
