import React, { useState, useContext, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import { MainContext } from '../../../components/contextProviders/MainContext'

import BasePrice from "../../../components/Offer/price/BasePrice";
import { Wrapper, WrapperHeight } from '../../../components/StyledComponents/Wrapper'
import { Button } from '../../../components/controls/Button/Button'
import { Footer } from '../../../components/Layouts/styledLayouts'
import Header from '../../../components/Header/Header'
import { apiEditOffer, apiOfferCreatePrice } from '../../../actions/api'
import withOfferInfo from '../../../utils/offer'
import useOffer from '../../../hooks/useOffer'
import { showNotification } from '../../../utils/notification'
import { ContainerDesktop, FooterDesktop } from '../../../components/StyledComponents/Grid'
import styled from 'styled-components'
import { device } from '../../../lib/mediaDevice'

const PricePage = () => {
  const router = useRouter()
  const { id } = router.query
  const offer = useOffer(id)
  const { setOffer } = useContext(MainContext)
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [price, setPrice] = useState({
    typePrice: 'fixed',
    pricePerAct: '',
    currency: '$',
    kickstart: '15',
  })

  console.log('offer', offer)

  useEffect(() => {
    if (offer.id && offer.typePrice) {
      let price = {
        typePrice: offer.typePrice,
        pricePerAct: offer.pricePerAct,
        currency: offer.currency || 'AED',
        kickstart: offer.kickstart,
      }
      setPrice(price)
    }
  }, [offer.id])

  const handleChangeStep = (i) => {
    if (step === 1 && i === -1) {
      Router.push('/offers/[id]/calendar', `/offers/${id}/calendar`, { shallow: true })
      return
    }
    if (step === 1 && i === 1) {
      createPrice()
    } else {
      setStep(step + i)
    }
  }

  const onChange = (obj) => {
    let { type, value } = obj
    if (value<0) showNotification('error', "Enter correct price")
    //alert("Enter correct price")
    setPrice((price) => ({ ...price, [type]: value }))
  }

  const createPrice = () => {
    const clone = { ...price }
    clone.offerId = id
    // clone.eventId = offer.eventId;
    setLoading(true)
    apiEditOffer(id, { step: 6 })
    apiOfferCreatePrice(clone).then((res) => {
      setLoading(false)
      if (res.err) return
      setOffer({
        ...offer,
        typePrice: res.data.typePrice,
        pricePerAct: res.data.pricePerAct,
        currency: res.data.currency,
        kickstart: res.data.kickstart,
      })
      Router.push('/offers/[id]/congratulations', `/offers/${id}/congratulations`, {shallow: true})
    })
  }

  const disabled = step === 1 && !price.pricePerAct

  return (
    <>
      <Header isReg />
      <Wrapper p={17} pt={35}>
        {offer.id ? (
          <>
              <ContainerDesktop isOffer>
                  <WrapperHeight>
                      {step === 1 && <BasePrice price={price} onChange={onChange} />}
                  </WrapperHeight>
              </ContainerDesktop>

              <FooterDesktop>
                  <Footer mt={30}>
                      <Button onClick={() => handleChangeStep(-1)}>Back</Button>
                      <Button
                          blue
                          onClick={() => handleChangeStep(1)}
                          loading={loading}
                          disabled={disabled}
                      >
                          Next
                      </Button>
                  </Footer>
              </FooterDesktop>

          </>
        ) : (
          <>Loading...</>
        )}
      </Wrapper>
    </>
  )
}

export default PricePage

