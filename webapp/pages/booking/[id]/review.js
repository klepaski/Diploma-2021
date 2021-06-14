import React, { useState, useContext, useEffect } from 'react';
import dynamic from 'next/dynamic';
import moment from 'moment'
import Link from "next/link";
import Router, { useRouter } from 'next/router'
import {useAction, useAtom} from "@reatom/react";
import {modifyToBr} from '../../../utils/utils'
import {withReatom} from "../../../lib/withReatom";

import Header from "../../../components/Header/Header";
import {GalleryOffer} from "../../../components/Gallery/GalleryOffer";
import {Video} from "../../../components/Gallery/Video";
import {
    apiGetChatById,
    apiSendReview
} from "../../../actions/api";
import {Text, LabelText} from "../../../components/StyledComponents/Text";
import {FlexBlock} from "../../../components/StyledComponents/FlexBlock";
import {AvatarOffer} from "../../../components/Profile/styledProfileOffer";
import {Divider} from "../../../components/StyledComponents/Divider";
import {Button, ButtonMinHeight} from "../../../components/controls/Button/Button";
import {Title} from "../../../components/Layouts/styledLayouts";
import {Wrapper} from "../../../components/StyledComponents/Wrapper";
import {showNotification} from "../../../utils/notification";
import {MainContext} from "../../../components/contextProviders/MainContext";
import useUserInfo from '../../../hooks/useUserInfo'
import OfferCardItem from "../../../components/Offer/cards/OfferCardItem";
import {TextArea} from "../../../components/controls/Input/Input";

const Calendar = dynamic(import ('../../../components/controls/Calendar/Calendar'),{ssr:false});
const CalendarAirbnb = dynamic(import ('../../../components/controls/Calendar/CalendarAirbnb'),{ssr:false});

const OfferPage = () => {
    const router = useRouter()
    const {me} = useContext(MainContext)
    const { id } = router.query
    const [offer, setOffer] = useState({})
    const [loading, setLoading] = useState(false)
    const [review, setReview] = useState('')

    useEffect(() => {
        console.log('id effect', id)
        if(id) {
            apiGetChatById(id)
                .then(res => {
                    if(res.data.offerId) setOffer(res.data.offerId)

                })
                .catch(e => {

                })
        }
    }, [id]);


    const onChange = (e) => {
        const {name, value} = e.target
        setReview(value)
    }

    const handleSendReview = () => {
        setLoading(true)
        apiSendReview(id, {text: review})
            .then(res => {
                setReview('')
                showNotification('info', 'Review was sent successfully')
                Router.push('/offers/[id]', `/offers/${offer.id}`, {shallow: true})
                setLoading(false)
            })
            .catch(e => {
                setLoading(false)
            })
    }


    return (
        <>
            <Header isProfile/>
            {offer.id ?
                <>
                    <Wrapper pl={18} pr={18} pb={80}>
                        <Text mt={10} fz={20} >Leave review about offer</Text>

                        <div className="review-wrapper-offer">
                            <OfferCardItem offer={offer} />
                        </div>


                        <div className="review-wrapper-form">
                            <TextArea name='review'
                                      value={review}
                                      onChange={onChange}
                                      height={90}
                                      placeholder="Review"
                            />

                            <Button mt={20} mb={10} green loading={loading} onClick={handleSendReview} >Send review</Button>
                        </div>


                    </Wrapper>
                </>
                :
                <>Loading...</>
            }
        </>
    );
};

export default withReatom(OfferPage)
