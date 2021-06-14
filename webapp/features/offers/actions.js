import React, {useState} from 'react'
import { declareAction } from '@reatom/core'


export const addOfferAction = declareAction('addOffer')
export const setListOffersAction = declareAction('setList')
export const getOfferByIdAction = declareAction('getById')
