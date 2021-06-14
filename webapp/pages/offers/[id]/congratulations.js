import React, { useState, useContext, useEffect } from 'react'
import Router, { useRouter } from 'next/router'

import { Wrapper, WrapperHeight } from '../../../components/StyledComponents/Wrapper'
import { Button } from '../../../components/controls/Button/Button'
import { TipWrapper, Title } from '../../../components/Layouts/styledLayouts'
import Header from '../../../components/Header/Header'
import withOfferInfo from '../../../utils/offer'
import { apiEditOffer } from '../../../actions/api'
import { showNotification } from '../../../utils/notification'
import useOffer from '../../../hooks/useOffer'
import { MainContext } from '../../../components/contextProviders/MainContext'
import { Divider } from '../../../components/StyledComponents/Divider'
import {
  CardItemDescription,
  CardItemImgWrapperCongrat,
  CardItemStatus,
  CardItemTitle,
  CongratCardWrapper,
  CongratCardWrapperW,
} from '../../../components/Offer/cards/styledCard'
import { FooterCard } from '../../../components/Offer/cards/styledCard'
import { modifySrc } from '../../../utils/modifySrc'
import { Text } from '../../../components/StyledComponents/Text'
import { ContainerDesktop, FooterDesktop } from '../../../components/StyledComponents/Grid'
import styled, { css } from 'styled-components'
import { device } from '../../../lib/mediaDevice'

const Congratulations = () => {
  const router = useRouter()
  const { id } = router.query
  const offer = useOffer(id)
  const { setOffer } = useContext(MainContext)
  const [loading, setLoading] = useState(false)

  const postOffer = () => {
    let data = {
      status: 'open',
    }
    setLoading(true)
    apiEditOffer(id, data)
      .then((res) => {
        showNotification('info', 'Your offer was published')
        Router.push(`/offers/${id}`)
        // setLoading(false)
      })
      .catch((e) => {
        showNotification('error', e)
        setLoading(false)
      })
  }


  const disabled = loading

  console.log('offer', offer)

  return (
    <>
      <Header isReg />
      <Wrapper p={17} pt={35}>
        {offer.id ? (
          <>
            <Box isOffer>
              <WrapperHeight>
                <Title mb={25}>Congratulations, you've created your offer</Title>

                <CongratCardWrapper mb={50}>
                  <CongratCardWrapperW>
                    <BoxDsk>
                      <BoxDskLeft>
                        <CardItemImgWrapperCongrat src={modifySrc(offer.avatarUrl, 'offer')} />
                      </BoxDskLeft>
                      <BoxDskRIght>
                        <CardItemStatus>
                          {offer.subCategory && offer.subCategory.category
                            ? offer.subCategory.category
                            : offer.category.category}
                        </CardItemStatus>
                        <CardItemTitle>{offer.name} </CardItemTitle>
                        <CardItemDescription>
                          {offer.pricePerAct} {offer.currency}
                        </CardItemDescription>
                      </BoxDskRIght>
                    </BoxDsk>
                  </CongratCardWrapperW>
                  <Divider grey full />

                </CongratCardWrapper>
              </WrapperHeight>

              <Bottom>
                <Button
                  blue
                  onClick={postOffer}
                  mt={15}
                  loading={loading}
                  disabled={offer.status === 'open'}
                >
                  Publish offer now
                </Button>
              </Bottom>
            </Box>
          </>
        ) : (
          <>Loading...</>
        )}
      </Wrapper>
    </>
  )
}

export default Congratulations

const Box = styled.div`
  @media ${device.laptopDesktop} {
    width: 50%;
    margin: 0 auto;
  }
`
const Bottom = styled.div`
  @media ${device.laptopDesktop} {
    display: flex;
    justify-content: space-between;

    button {
      width: 48%;
      order: 2;
    }
    button:last-child {
      order: 1;
    }
  }
`
const BoxDsk = styled.div`
  @media ${device.laptopDesktop} {
    display: flex;
    justify-content: space-between;
  }
`
const BoxDskLeft = styled.div`
  @media ${device.laptopDesktop} {
    width: 50%;
  }
`
const BoxDskRIght = styled.div`
  @media ${device.laptopDesktop} {
    width: 50%;
  }
`
