import React, { useState, useContext, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import { MainContext } from '../../../components/contextProviders/MainContext'

import PerfomanceDetails from '../../../components/Offer/perfomanceDetails/PerfomanceDetails'
import { Wrapper, WrapperHeight } from '../../../components/StyledComponents/Wrapper'
import { Button } from '../../../components/controls/Button/Button'
import { Footer } from '../../../components/Layouts/styledLayouts'

import { apiAddPerformanceDetails, apiEditOffer } from '../../../actions/api'
import Header from '../../../components/Header/Header'
import LastStep from '../../../components/Offer/regulations/LastStep'
import withOfferInfo from '../../../utils/offer'
import useOffer from '../../../hooks/useOffer'
import { showNotification } from '../../../utils/notification'
import { ContainerDesktop, FooterDesktop } from '../../../components/StyledComponents/Grid'
import styled from 'styled-components'
import { device } from '../../../lib/mediaDevice'

const PD = () => {
  const router = useRouter()
  const { id } = router.query
  const offer = useOffer(id)
  const { setOffer } = useContext(MainContext)
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [pd, setPd] = useState({
    startDate: new Date(),
    maxNumberOfActs: 1,
    minNumberOfActs: 1,
    daysBeforeBooking: null,
    timeOpenCalendar: 'any time',
  })

  useEffect(() => {
    let pd = {
      startDate: new Date(),
      maxNumberOfActs: offer.maxNumberOfActs,
      minNumberOfActs: offer.minNumberOfActs,
      daysBeforeBooking: offer.daysBeforeBooking,
      timeOpenCalendar: offer.timeOpenCalendar,
    }
    if (offer.id && offer.timeOpenCalendar) setPd(pd)
  }, [offer.id])

  const handleChangeStep = (i) => {
    if (step === 1 && i === -1) {
      Router.push('/offers/[id]/regulations', `/offers/${id}/regulations`, { shallow: true })
      return
    }
    if (step === 1 && i === 1) {
      createPD()
    } else {
      setStep(step + i)
    }
  }

  const onChange = (obj) => {
    let { type, value } = obj

    //set min value
    if (type == 'maxNumberOfActs' || type == 'minNumberOfActs') {
      if (value === 0) value = 1
    }
    setPd((pd) => ({ ...pd, [type]: value }))
  }

  const createPD = () => {
    const clone = { ...pd }
    clone.endDate = getEndDay(pd.startDate)
    clone.offerId = id
    setLoading(true)
    apiEditOffer(id, { step: 4 })
    apiAddPerformanceDetails(clone)
        .then((res) => {
          setOffer({
            ...offer,
            maxNumberOfActs: res.data.maxNumberOfActs,
            minNumberOfActs: res.data.minNumberOfActs,
            daysBeforeBooking: res.data.daysBeforeBooking,
            timeOpenCalendar: res.data.timeOpenCalendar,
            endDate: res.data.endDate,
            calendar: [],
          })
          setTimeout(() => {
            setLoading(false)
            Router.push('/offers/[id]/calendar', `/offers/${id}/calendar`, { shallow: true })
          }, 300)
        })
        .catch((err) => {
          showNotification('error', err)
          return { err: err, data: null }
          setLoading(false)
        })
  }
  const getEndDay = (startDate) => {
    let timeOpenCalendar = pd.timeOpenCalendar
    let copiedDate = new Date(startDate.getTime())
    let lastDate
    switch (timeOpenCalendar) {
      case '1 month':
        lastDate = new Date(copiedDate.setMonth(copiedDate.getMonth() + 1))
        break
      case '2 month':
        lastDate = new Date(copiedDate.setMonth(copiedDate.getMonth() + 2))
        break
      case '6 month':
        lastDate = new Date(copiedDate.setMonth(copiedDate.getMonth() + 6))
        break
      case '1 year':
        lastDate = new Date(copiedDate.setMonth(copiedDate.getMonth() + 12))
        break
      case 'any time':
        lastDate = new Date(copiedDate.setMonth(copiedDate.getMonth() + 120))
        break
    }
    return lastDate
  }

  return (
      <>
        <Header isReg />
        <Wrapper p={17} pt={35}>
          {offer.id ? (
              <>
                <ContainerDesktop isOffer>
                  <WrapperHeight>
                    {step === 1 && <PerfomanceDetails pd={pd} onChange={onChange} />}
                  </WrapperHeight>
                </ContainerDesktop>

                <FooterDesktop>
                  <Footer mt={30}>
                    <Button onClick={() => handleChangeStep(-1)}>Back</Button>
                    <Button blue onClick={() => handleChangeStep(1)} loading={loading}>
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

export default PD
