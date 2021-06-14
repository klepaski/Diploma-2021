import React, { useContext } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import { device } from '../../../lib/mediaDevice'
import { Button } from '../../controls/Button/Button'
import { Title, WrapButton, TipWrapper } from '../../Layouts/styledLayouts'
import { SubTitle, Text } from '../../StyledComponents/Text'
import { Divider } from '../../StyledComponents/Divider'
import { MainContext } from '../../contextProviders/MainContext'
import { HeaderWrapperReg } from '../../Header/styledHeader'
import { CheckGreen } from '../../StyledComponents/Icon'

const GreatProgress = ({ offer, handleChangeStep, loading }) => {
  const { me, setMe } = useContext(MainContext)

  return (
    <Box>
      <Title mb={'5px'}>Great progress, {me.firstName}!</Title>
      <Text>Now let’s get some more details about your offer so you can publish your listing.</Text>
      <Text mt={30} mb={'5px'} grey>
        STEP 1
      </Text>

      <div className="flex-between">
        <div>
          <Text fz={18} mb={'5px'} black>
            Describe your offer
          </Text>
          <Text blue onClick={() => handleChangeStep(-1)}>
            Change
          </Text>
        </div>

        <CheckGreen />
      </div>

      <Divider grey full mt={10} mb={10} />

      <Text grey mb={'5px'}>
        STEP 2
      </Text>
      <Text fz={18}>Upload photos</Text>
      <Text mb={'5px'} grey>
        Help clients understand the offer better{' '}
      </Text>
      {/*<Link href={`/offers/${offer.id}/photos`} as={`/registration`}>*/}
      {/*    <Text blue>Change</Text>*/}
      {/*</Link>*/}
      <WrapButton>
        <Button mt={10} blue loading={loading} onClick={() => handleChangeStep(1)}>
          Continue
        </Button>
      </WrapButton>

      <Divider grey full mt={10} mb={10} />

      <Text grey mb={'5px'}>
        STEP 3
      </Text>
      <Text mb={'5px'} fz={18}>
        Get ready for new clients{' '}
      </Text>
      <Text grey>Set booking conditions, availability calendar and the price</Text>
      <Divider grey full mt={10} mb={10} />

      {/*<TipWrapper mt={40} >*/}
      {/*    <Text fz={20} grey >For one week in Dubai you could earn:</Text>*/}
      {/*    <Text fz={32} >$ 1413</Text>*/}
      {/*</TipWrapper>*/}
    </Box>
  )
}

export default GreatProgress

const Box = styled.div`
  @media ${device.laptopDesktop} {
    width: 500px;
    margin: 0 auto;

    ${Divider} {
      margin-top: 25px;
      margin-bottom: 25px;
    }

    .flex-between {
      position: relative;
    }

    ${CheckGreen} {
      position: absolute;
      top: -25px;
      right: 0;
    }
  }
`
