import React from "react";
import Router from 'next/router'

import {CardItemWrapper, CardOfferStatus, CardItemStatus, CardItemTitle, CardItemDescription, CardItemImgWrapper, CardItemImg, CardFade} from './styledCard'
import {modifySrc} from '../../../utils/modifySrc'

export default function OfferCardItem ({offer, withStatus, isHorisontal}) {
    if(!offer) offer = {}

    return (
        <CardItemWrapper p={30} onClick={() => Router.push('/offers/[id]', `/offers/${offer.id}`, {shallow: true})}>
            {withStatus && <CardOfferStatus>{offer.status}</CardOfferStatus> }
            <CardItemImgWrapper src={modifySrc(offer.avatarUrl, 'offer')} />
            <CardItemTitle isHorisontal={isHorisontal}>{offer.name} </CardItemTitle>
            <CardItemDescription>{offer.pricePerAct} {offer.currency}</CardItemDescription>
            <CardItemDescription isSummary>{offer.summary}</CardItemDescription>
        </CardItemWrapper>
    );
}
