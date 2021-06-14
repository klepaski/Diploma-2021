import React, { useState, useEffect } from 'react'
import moment from 'moment'
import styled, { css } from 'styled-components'
import { device } from '../../../lib/mediaDevice'
import { Wrapper } from '../../StyledComponents/Wrapper'
import { Title } from '../../Layouts/styledLayouts'
import { Divider } from '../../StyledComponents/Divider'

import OfferParams from '../../controls/OfferParams/OfferParams'
import { HeaderChat } from '../../Inbox/styledComponent'
import Link from 'next/link'
import arrowBack from '../../../static/img/arrow-back.svg'
import { FlexBlock } from '../../StyledComponents/FlexBlock'
import { Text } from '../../StyledComponents/Text'
import {
  BookCategory,
  BookLabel,
  BookLabelForm,
  BookOfferImg,
  BookText,
  BookTitle,
  BookWrapPrice,
  WrapBookTop,
  WrapBookTopLeft,
  WrapBookTopRight,
} from '../../Booking/styledComponent'
import { modifySrc } from '../../../utils/modifySrc'
import { Button, ButtonMinHeight } from '../../controls/Button/Button'
import { Input, TextArea } from '../../controls/Input/Input'

const DetailsBook = ({
  offer,
  bookingDates,
  setDetailsView,
  onChange,
  handleBook,
  loadingReserv,
}) => {
  const [dates, setDates] = useState('')

  useEffect(() => {
    let from = bookingDates.startDate,
      to = bookingDates.endDate
    if (new Date(from).getTime() === new Date(to).getTime()) {
      setDates(moment(from).format('D MMM YYYY'))
    } else {
      setDates(moment(from).format('D MMM YYYY') + ' - ' + moment(to).format('D MMM YYYY'))
    }
  }, [])

  console.log('bookingDates', bookingDates)

  if (!offer.id) return null
  return (
    <>
      <HeaderChat>
        <img src={arrowBack} alt="" onClick={() => setDetailsView(false)} />
      </HeaderChat>
      <Wrapper p={17}>
        <Text fz={28} mb={20}>
          Let’s define the details about your order
        </Text>
        <Flex>
          <FlexRight>
            <WrapBookTop>
              <WrapBookTopLeft>
                <BookCategory>
                  {offer.subCategory && offer.subCategory.category
                    ? offer.subCategory.category
                    : offer.category.category}
                </BookCategory>

                <BookTitle>{offer.name}</BookTitle>
              </WrapBookTopLeft>
              <WrapBookTopRight>
                <BookOfferImg src={modifySrc(offer.avatarUrl, 'offer')} />
              </WrapBookTopRight>
            </WrapBookTop>
          </FlexRight>
          <FlexLeft>
            <Divider grey full mt={20} mb={20} />
            <BookLabel>Dates</BookLabel>
            <BookText>{dates}</BookText>

            <Divider grey full mt={20} mb={20} />
            <BookLabel>Location</BookLabel>
            <Input
              name="location"
              value={bookingDates.location}
              onChange={onChange}
              mb={10}
              placeholder=""
            />
            <TextArea
              name="locationDetails"
              value={bookingDates.locationDetails}
              onChange={onChange}
              height={90}
              placeholder="Additional information for the location"
            />

            <Divider grey full mt={20} mb={20} />
            <BookLabel>Start time of performance</BookLabel>
            <Input
              name="startTime"
              value={bookingDates.startTime}
              onChange={onChange}
              mb={10}
              placeholder=""
            />
            <Divider grey full mt={20} mb={20} />
            <BookLabel>Additional terms</BookLabel>
            <TextArea
              name="additionalTerms"
              value={bookingDates.additionalTerms}
              onChange={onChange}
              height={90}
              placeholder=""
            />

            <WrapperBtn>
              <Button mt={20} mb={10} green loading={loadingReserv} onClick={handleBook}>
                Send request to programmer
              </Button>
            </WrapperBtn>
          </FlexLeft>
        </Flex>
      </Wrapper>
    </>
  )
}

const FlexLeft = styled.div``
const FlexRight = styled.div``
const WrapperBtn = styled.div``

const Flex = styled.div`
  @media ${device.laptopDesktop} {
    display: flex;
    flex-direction: row-reverse;
    ${FlexLeft} {
      width: 65%;
      padding-right: 50px;

      ${WrapperBtn} {
        text-align: center;
      }

      button {
        margin-top: 30px;
        width: 300px;
      }
    }

    ${FlexRight} {
      width: 35%;

      ${WrapBookTop} {
        flex-direction: column;
      }
      ${WrapBookTopLeft} {
        width: 100%;
        order: 2;
      }
      ${WrapBookTopRight} {
        width: 100%;

        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
`

export default DetailsBook
