import React from 'react'
import Router from 'next/router'

import {
  CardItemWrapperBig,
  CardItemWrapperBigTop,
  CardItemStatusBig,
  CardItemTitleBig,
  CardItemDescription,
  CardItemDescriptionBig,
  CardItemImgWrapperBig,
  FooterCard,
  CardFade,
} from './styledCard'
import { Divider } from '../../StyledComponents/Divider'
import { modifySrc } from '../../../utils/modifySrc'
import { Button, ButtonMinHeight } from '../../controls/Button/Button'

export default function OfferCardItemBig({ offer, handlePublishOffer, isPublishing }) {
  if (!offer) offer = {}

  const continueCreating = () => {
    let step = offer.step || 0,
      route = 'params'

    switch (step) {
      case 0:
        route = 'params'
        break
      case 1:
        route = 'photos'
        break
      case 2:
        route = 'regulations'
        break
      case 3:
        route = 'performance-details'
        break
      case 4:
        route = 'calendar'
        break
      case 5:
        route = 'price'
        break
    }
    Router.push(`/offers/${offer.id}/${route}`)
  }

  return (
    <CardItemWrapperBig p={30}>
      <CardItemWrapperBigTop>
        <CardItemImgWrapperBig
          src={modifySrc(offer.avatarUrl, 'offer')}
          onClick={() => Router.push('/offers/[id]', `/offers/${offer.id}`, { shallow: true })}
        />
        <CardItemStatusBig>
          {offer.subCategory && offer.subCategory.category ? offer.subCategory.category : ''}
        </CardItemStatusBig>
        <CardItemTitleBig>{offer.name} </CardItemTitleBig>
        <CardItemDescription>
          {offer.pricePerAct} {offer.currency}
        </CardItemDescription>
        {/*<CardItemDescriptionBig>{offer.summary}</CardItemDescriptionBig>*/}
        {/*<CardFade />*/}
        {offer.status !== 'open' && offer.step === 7 && (
          <ButtonMinHeight
            mt={20}
            transparentBlue
            onClick={() => handlePublishOffer(offer.id)}
            loading={isPublishing}
          >
            Publish offer
          </ButtonMinHeight>
        )}
      </CardItemWrapperBigTop>
      <Divider grey full />

      {offer.status !== 'open' && offer.step !== 7 ? (
        <FooterCard title={'Continue creating'} onClick={() => continueCreating()} />
      ) : (
        <FooterCard
          title={'Settings'}
          onClick={() =>
            Router.push('/offers/[id]/edit', `/offers/${offer.id}/edit`, { shallow: true })
          }
        />
      )}
    </CardItemWrapperBig>
  )
}
