import React, { useState, useContext, useEffect } from 'react';
import Router, { useRouter } from 'next/router'

import LastStep from '../../../components/Offer/regulations/LastStep'
import {Wrapper, WrapperHeight} from "../../../components/StyledComponents/Wrapper";
import {Button} from "../../../components/controls/Button/Button";
import {Footer} from "../../../components/Layouts/styledLayouts";
import {apiEditOffer, apiOfferRegulations} from '../../../actions/api'
import Header from "../../../components/Header/Header";
import useOffer from "../../../hooks/useOffer";
import {MainContext} from "../../../components/contextProviders/MainContext";
import {ContainerDesktop, FooterDesktop} from "../../../components/StyledComponents/Grid";
import styled from "styled-components";
import {device} from "../../../lib/mediaDevice";



const RegulationsPage = ({}) => {
    const router = useRouter()
    const {id} = router.query
    const offer = useOffer(id)
    const {setOffer} = useContext(MainContext)
    const [step, setStep] = useState(1)
    const [info, setInfo] = useState( {
        regulations: [

        ],
        details: [
            {title: 'Using fire', value: false},
            {title: 'Load music', value: false},
            {title: 'Censored', value: false}
        ]
    })
    const [loading, setLoading] = useState(false)

    console.log(offer)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [step])

    const handleChangeStep = (i) => {
        if(step === 1 && i === -1) {
            Router.push('/offers/[id]/photos', `/offers/${id}/photos`, {shallow: true})
            return;
        }
        if(step === 1 && i === 1) {
            createRegulations()
        } else {
            setStep(step + i)
        }
    }

    const onChange = obj => {
        let {type, value} = obj
        setInfo(info => ({...info, [type]: value}))
    }


    const createRegulations = () => {
       let data = {};
       data.offerId = id;
       data.regulations = info.regulations.filter((item) => item.value).map((item) => item.value? item.title : null)
       data.details = info.details.filter((item) => item.value).map((item) => item.value? item.title : null)

        setLoading(true)
        apiEditOffer(id, {step: 3})
        setOffer({...offer, step: 3})
        apiOfferRegulations(data)
            .then(res => {
                if (res.err) {
                    setLoading(false)
                    return
                }
                Router.push('/offers/[id]/performance-details', `/offers/${id}/performance-details`, {shallow: true})
            })
    }



    return (
        <>
            <Header isReg />
            <Wrapper p={17} pt={35} >
                {offer.id ?
                    <>
                    <ContainerDesktop isOffer>
                        <WrapperHeight>
                            {step === 1 && <LastStep offer={offer} handleChangeStep={handleChangeStep} />}
                        </WrapperHeight>
                    </ContainerDesktop>

                        {step !== 1 &&
                        <FooterDesktop>
                            <Footer mt={30} flexEnd={step === 1}>
                                {step !== 1 && <Button onClick={() => handleChangeStep(-1)}>Back</Button>}
                                <Button blue
                                        onClick={() => handleChangeStep(1)}
                                        loading={loading}
                                >
                                    Next
                                </Button>
                            </Footer>
                        </FooterDesktop>
                        }
                    </>
                    :
                    <>Loading...</>
                }



            </Wrapper>
        </>

    );
};
export default RegulationsPage


