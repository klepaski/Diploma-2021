import React, { useState, useEffect } from 'react'
import { useAction, useAtom } from '@reatom/react'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import { device } from '../../../lib/mediaDevice'
import OfferCardItem from '../../Offer/cards/OfferCardItem'
import { apiGetPopularCategories } from '../../../actions/api'
import { withReatom } from '../../../lib/withReatom'
import { offersAtom } from '../../../features/offers/atoms'
import { setListOffersAction } from '../../../features/offers/actions'
import { CardItemImgWrapper } from '../cards/styledCard'

const ListOffersHomepage = ({}) => {
  // const [offers, setOffers] = useState([])
  const [loading, setLoading] = useState(true)
  const [list, setList] = useState([])

  useEffect(() => {
    let getList = async () => {
      let res = await apiGetPopularCategories()
      setList(res.data)
      setLoading(false)
    }

    getList()
  }, [])

  if (loading) return <Wrapper>loading...</Wrapper>

  return (
    <Wrapper>
      {list.map((item, key) => {
        if (!item.countOffers) return null
        return (
          <Box key={key}>
            <TitleCategory>
              {item.categories.category}
              <LinkBox>
                <Link href={`/offers/categories?search=${item.categories.category}`}>Show all</Link>
              </LinkBox>
            </TitleCategory>
            <SubTitleCategory>
              Bring more joy to your events with circus artists, <br />
              explore available offers.
            </SubTitleCategory>
            <Flex>
              {item.offers.map((offer, key2) => {
                return (
                  <Col key={key2} is6={key > 2}>
                    <OfferCardItem offer={offer} />
                  </Col>
                )
              })}
            </Flex>
          </Box>
        )
      })}

      {/*<Box>*/}
      {/*  <TitleCategory>{item.categories.category}</TitleCategory>*/}
      {/*  <SubTitleCategory>*/}
      {/*    Bring more joy to your events with circus artists, <br />*/}
      {/*    explore available offers.*/}
      {/*  </SubTitleCategory>*/}
      {/*  <Flex>*/}
      {/*    {item.offers.map((offer, key) => {*/}
      {/*      return (*/}
      {/*        <Col key={key}>*/}
      {/*          <OfferCardItem offer={offer} />*/}
      {/*        </Col>*/}
      {/*      )*/}
      {/*    })}*/}
      {/*  </Flex>*/}
      {/*  <LinkBox>*/}
      {/*    <Link href={`/offers/categories?category=first-category`}>Show all</Link>*/}
      {/*  </LinkBox>*/}
      {/*</Box>*/}
    </Wrapper>
  )
}

const Wrapper = styled.div``
const Box = styled.div`
  margin-bottom: 50px;
`
const Flex = styled.div`
  display: flex;
  //justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 10px;
  margin: 0 -10px;
`
const Col = styled.div`
  width: 50%;
  padding: 0 10px;

  @media ${device.laptopDesktop} {
    //width: 375px;
    width: 32%;

    ${CardItemImgWrapper} {
      //height: calc(375px * 9 / 16 - 10px);
      position: relative;
      height: 0;
      padding-top: 56.25%;
    }

    margin-bottom: 20px;
    ${(p) =>
      p.is6 &&
      css`
        width: 15%;
        ${CardItemImgWrapper} {
          // height: calc(180px * 9 / 16 - 10px);
          position: relative;
          height: 0;
          padding-top: 56.25%;
        }
      `}
  }
`

const TitleCategory = styled.div`
  font-weight: 500;
  font-size: 28px;
  color: rgba(1, 1, 1, 0.7);
  margin-bottom: 10px;
`
const SubTitleCategory = styled.div`
  font-size: 14px;
  line-height: 120%;
  color: rgba(0, 0, 0, 0.8);
`
const LinkBox = styled.div`
  text-align: right;
  font-size: 13px;
  a {
    color: rgb(74, 74, 74);
  }
`

export default withReatom(ListOffersHomepage)
