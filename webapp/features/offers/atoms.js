import React, {useState} from 'react'
import { declareAtom } from '@reatom/core'
import {setListOffersAction, getOfferByIdAction} from './actions'
import {store} from "../index";


export const offersAtom = declareAtom(
    'listOffers',
    [],
    on => [
        on(setListOffersAction, (state, offers) => offers)
    ]
)

export const offerByIdAtom = declareAtom(
    'offerById',
    {},
    on => on(getOfferByIdAction, (state, id) => {
        let test = store.getState(offersAtom)
        console.log(offersAtom)
        debugger
        return {id: id, test: 'test'}
    })
)
