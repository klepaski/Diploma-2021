import React, {useState, useEffect, useContext} from 'react';
import PropTypes from 'prop-types';
import {apiGetOfferById} from "../actions/api";
import {MainContext} from "../components/contextProviders/MainContext";


const useOffer = offerId => {
    const {offer, setOffer} = useContext(MainContext)


    useEffect(() => {
        const getOfferInfo = async () => {
            const res = await apiGetOfferById(offerId)
            setOffer(res.data)
        }
        if(offer && offer.id && offer.id === offerId) {

        } else {
            if(offerId) getOfferInfo()
        }
    }, [offerId]);

    return offer;
}

export default useOffer;