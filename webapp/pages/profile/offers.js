import React, { useState, useContext, useEffect } from 'react'
import Router from 'next/router'
import { Title, Footer, Label2 } from '../../components/Layouts/styledLayouts'
import styled, { css } from 'styled-components'
import { device } from '../../lib/mediaDevice'
import { Wrapper, WrapperHeight } from '../../components/StyledComponents/Wrapper'
import { Button, ButtonMin } from '../../components/controls/Button/Button'
import Header from '../../components/Header/Header'
import { Text } from '../../components/StyledComponents/Text'
import { FlexBlock } from '../../components/StyledComponents/FlexBlock'
import { apiEditOffer, apiGetListUserOffers } from '../../actions/api'
import { MainContext } from '../../components/contextProviders/MainContext'
import OfferCardItemBig from '../../components/Offer/cards/OfferCardItemBig'
import { showNotification } from '../../utils/notification'
import { PlusPurple, Preferences } from '../../components/StyledComponents/Icon'
import { ContainerDesktop } from '../../components/StyledComponents/Grid'

const ProfileOffers = () => {
  const { me, listOffers } = useContext(MainContext)
  const [list, setList] = useState(listOffers)
  const [loading, setLoading] = useState(true)
  const [isPublishing, setIsPublishing] = useState(false)

  useEffect(() => {
    if (me.id) getListOffers()
  }, [me.id])

  const getListOffers = () => {
    setLoading(true)
    apiGetListUserOffers(me.id)
      .then((res) => {
        setList(res.data)
        setLoading(false)
      })
      .catch((e) => {
        setLoading(false)
      })
  }

  const handlePublishOffer = (id) => {
    let data = {
      status: 'open',
    }
    setIsPublishing(true)
    apiEditOffer(id, data)
      .then((res) => {
        let clone = [...list]
        let index = clone.findIndex((x) => x.id === id)
        clone[index] = res.data
        setList(clone)
        showNotification('info', 'Offer was published successfully')
        setIsPublishing(false)
      })
      .catch((e) => {
        showNotification('error', e)
        setIsPublishing(false)
      })
  }

  return (
    <>
      <Header isProfile />
      <Wrapper p={15}>
        <ContainerDesktop>
          <FlexBlock mb={30}>
            <Text fz={18} pt={'5px'}>
              Listing
            </Text>
            <Box>
              {list.length ? (
                <>
                  <PlusPurple ml={30} onClick={() => Router.push('/offers/create')} />
                </>
              ) : (
                <Button
                  transparentPurple
                  onClick={() => {
                    Router.push('/offers/create')
                  }}
                >
                  Create an offer
                </Button>
              )}
            </Box>
          </FlexBlock>

          {loading && <div>Loading... </div>}

          {list.length ? (
            <WrapOffers>
              {list.map((offer, key) => (
                <OfferCardItemBig
                  key={offer.id}
                  offer={offer}
                  handlePublishOffer={handlePublishOffer}
                  isPublishing={isPublishing}
                />
              ))}
            </WrapOffers>
          ) : (
            <Center>{!loading && <Title>You have no offers yet</Title>}</Center>
          )}
        </ContainerDesktop>
      </Wrapper>
    </>
  )
}

export default ProfileOffers

const WrapOffers = styled.div`
  @media ${device.laptopDesktop} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    > div {
      width: 30%;
      min-height: 350px;
    }
  }
`
const Box = styled.div`
  ${Preferences} {
    cursor: pointer;
  }
  ${PlusPurple} {
    cursor: pointer;
  }
`
const Center = styled.div`
  ${Title} {
    text-align: center;
  }
`
