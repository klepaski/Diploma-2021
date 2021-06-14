import React, { useState, useContext, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { MainContext } from '../../../components/contextProviders/MainContext'

import { Wrapper, WrapperHeight } from '../../../components/StyledComponents/Wrapper'
import { Button, ButtonMin } from '../../../components/controls/Button/Button'
import { Footer, Title } from '../../../components/Layouts/styledLayouts'
const Calendar = dynamic(import('../../../components/controls/Calendar/Calendar'), { ssr: false })
import { apiEditOffer, apiOfferUpdateDisabled } from '../../../actions/api'
import { Text } from '../../../components/StyledComponents/Text'
import Header from '../../../components/Header/Header'
import useOffer from '../../../hooks/useOffer'
import { ContainerDesktop, FooterDesktop } from '../../../components/StyledComponents/Grid'
import styled from 'styled-components'
import { device } from '../../../lib/mediaDevice'

const CalendarPage = () => {
  const router = useRouter()
  const { id } = router.query
  const offer = useOffer(id)
  const { setOffer } = useContext(MainContext)
  const [selectedDays, setSelected] = useState([])
  const [enabledAll, setEnabledAll] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (offer.id) {
      let defaultEnabledAll = offer.calendar && offer.calendar.length ? true : false
      console.log('offer.calendar:', offer.calendar)
      console.log('defaultEnabledAll:', defaultEnabledAll)
      setEnabledAll(defaultEnabledAll)
      let calendar = offer.calendar || []
      let selectedArr = calendar.map((item) => item.date)
      setSelected(selectedArr)
    }
  }, [offer.id])

  const createCalendar = () => {
    setLoading(true)
    const obj = {
      offerId: id,
      disabledTimes: selectedDays,
    }
    apiEditOffer(id, { step: 5 })
    apiOfferUpdateDisabled(obj).then((res) => {
      if (res.err) {
        setLoading(false)
        return
      }
      setOffer({ ...offer, calendar: res.data })
      Router.push('/offers/[id]/price', `/offers/${id}/price`, { shallow: true })
    })
  }

  console.log('selectedDays', selectedDays)
  console.log('offer', offer)

  return (
    <>
      <Header isReg />
      <Wrapper p={17} pt={35}>
        {offer.id ? (
          <>
            <ContainerDesktop isOffer>
              <WrapperHeight>
                <Title mb={40}>Update your calendar</Title>
                <Text fz={18} mb={20}>
                  Since clients can book available days instantly, you should always keep your
                  calendar up to date by blocking the days you can’t perform.
                </Text>
                <Text fz={18} bold>
                  Let the clients know the dates you are availalbe below.{' '}
                </Text>
                <ButtonMin
                    transparentBlue
                    mt={20}
                    mb={20}
                    onClick={() => setEnabledAll(true)}
                    disabled={enabledAll}
                >
                  Unblock all dates
                </ButtonMin>

                <Calendar
                    selectedDays={selectedDays}
                    setSelected={setSelected}
                    enabledAll={enabledAll}
                    endDate={offer.endDate}
                />
              </WrapperHeight>
            </ContainerDesktop>

            <FooterDesktop>
              <Footer mt={30}>
                <Button
                    onClick={() =>
                        Router.push(
                            '/offers/[id]/performance-details',
                            `/offers/${id}/performance-details`,
                            { shallow: true },
                        )
                    }
                >
                  Back
                </Button>
                <Button blue onClick={() => createCalendar()} loading={loading}>
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

export default CalendarPage

