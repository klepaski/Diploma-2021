import React, { useState, useContext, useEffect } from 'react';
import Router from 'next/router'
import {
    Footer, Label2, Title,
} from "../../components/Layouts/styledLayouts";
import {Wrapper, WrapperHeight} from "../../components/StyledComponents/Wrapper";
import {Button, ButtonMin} from "../../components/controls/Button/Button";
import Header from "../../components/Header/Header"
import {Text} from "../../components/StyledComponents/Text";
import {FlexBlock} from "../../components/StyledComponents/FlexBlock";
import {apiEditOffer, apiGetListUserOffers, apiGetListUserOffersLiked} from '../../actions/api'
import {MainContext} from "../../components/contextProviders/MainContext";
import OfferCardItemBig from "../../components/Offer/cards/OfferCardItemBig"
import {showNotification} from "../../utils/notification";
import {PlusPurple, Preferences} from "../../components/StyledComponents/Icon";
import OfferCardItem from "../../components/Offer/cards/OfferCardItem";
import arrowLeft from "../../static/img/arrow-left.svg"

import "../../static/css/styles.css"

const ProfileOffers = () => {
    const {me, listOffers} = useContext(MainContext)
    const [list, setList] = useState(listOffers)
    const [listCategories, setListCategories] = useState([])
    const [filterCategory, setFilterCategory] = useState({})
    const [loading, setLoading] = useState(true)
    const [isPublishing, setIsPublishing] = useState(false)

    useEffect(() => {
        if(me.id) getListOffers()
    }, [me.id])

    const getListOffers = () => {
        setLoading(true)
        apiGetListUserOffersLiked(me.id)
            .then(res => {
                setList(res.data)
                let arr = []
                res.data.map(item => {
                    let found = arr.find(item2 =>  {
                        console.log(item.offerId.category.id)
                        console.log(item2.id)
                        return item2.id === item.offerId.category.id
                    })
                    if(!found) arr.push(item.offerId.category)
                })
                setListCategories(arr)
                setLoading(false)
            })
            .catch(e => {
                setLoading(false)
            })
    }

    const getCountCategories = id => {
        let count = 0;
        for(let i = 0; i < list.length; ++i){
            if(list[i].offerId.category.id == id)
                count++;
        }
        return count;
    }


    const offers = list.filter(item => item.offerId.category.id === (filterCategory.id))



    return (
        <>
            <Header isProfile />
            <Wrapper p={15} >
                <Text fz={28} mb={25}>Wishlist</Text>


                {loading && <div>Loading... </div>}

                {filterCategory && filterCategory.id ?
                    <>
                        <div className={'wish-item-category'} onClick={() => setFilterCategory({})}>
                            <img className={'back-wish-list'} src={arrowLeft}></img>
                            {filterCategory.category}
                        </div>
                        <div className="row">
                            {offers.map((item, key) => {
                                return (
                                    <div key={key} className="col-xs-6">
                                        <OfferCardItem offer={item.offerId} />
                                    </div>
                                )
                            })}
                        </div>
                    </>
                    :
                    <>
                        {listCategories.map(item =>
                            <Text fz={18} mb={10} onClick={() => setFilterCategory(item)}>
                                {item.category}
                                <span className={'wish-category-count'}>{getCountCategories(item.id)}</span>
                            </Text>
                        )}
                    </>

                }


            </Wrapper>

        </>
    );
};

export default ProfileOffers

