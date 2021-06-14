import React, { useState, useContext, useEffect, useRef, useMemo } from 'react';
import {Router} from "../../../routes";
import {MainContext} from "../../contextProviders/MainContext";
import {Footer, Label, Label2, TipWrapper, Title, WhoCard} from "../../Layouts/styledLayouts";
import {Wrapper, WrapperHeight} from "../../StyledComponents/Wrapper";
import {Button} from "../../controls/Button/Button";
import {Tab} from "../../controls/Tabs/Tabs";
import Header from "../../Header/Header"
import { withAuthSync} from '../../../utils/auth'
import { hasError } from '../../../utils/utils'

import {Input, TextArea} from "../../controls/Input/Input";
import { FooterDesktop } from '../../StyledComponents/Grid'
import { device } from '../../../lib/mediaDevice'
import styled from "styled-components";

const Category = ({offer, onChange, listCategories, handleNext}) => {
    const {me} = useContext(MainContext)
    const [errors, setErorrs] = useState({})
    const [listSubCategories, setListSubCategories] = useState([])
    const [category, setCategory] = useState({})
    const [subCategory, setSubCategory] = useState(null)
    const [loading, setLoading] = useState(false)
    const subcatRef = useRef(null)

    useEffect(() => {
        // setListSubCategories(offer.category.subCategory)
    }, []);


    const listParentCategories = useMemo(() => listCategories.filter(item => !item.parentCategory), [listCategories]);

    console.log('listCategories', listCategories)
    console.log('listParentCategories', listParentCategories)

    const setActiveCategory = category => {
        onChange( {target: {name: 'category', value: category}})
        let listSubc = listCategories.filter(item => (item.parentCategory && item.parentCategory.id === category.id))
        setListSubCategories(listSubc)
        setTimeout(() => {
            scrollToRef(subcatRef)
        }, 300)
    }

    const scrollToRef = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: "smooth"
        });
    }

    const setActiveSubCategory = subCategory => {
        onChange( {target: {name: 'subCategory', value: subCategory}})
    }

    let disabled = !offer.category.id || !offer.name.length || !offer.summary.length;


    return (
        <>
            <WrapperHeight>
                <Title mb={25} >Hello, programmer {me.firstName} :)</Title>
                <Label >What kind of programmer are you?</Label>

                {listParentCategories.length ?
                <>
                    {listParentCategories.map((item, key)=> {
                        return (
                            <Tab key={key}
                                 title={item.category}
                                 onClick={() => setActiveCategory(item)}
                                 active={item.id == offer.category.id}
                            />
                        )
                    })}
                </>
                :
                <>
                    <div>Loading...</div>
                </>
                }


                <div className={'sub-cat-ref'} ref={subcatRef}>
                    {offer.category.id && !!listSubCategories.length &&
                    <>
                        <Label mt={40} >Choose the technology/language you use</Label>
                        {listSubCategories.map((item, key)=>
                            <Tab key={key}
                                 title={item.category}
                                 onClick={() => setActiveSubCategory(item)}
                                 active={item.id == offer.subCategory.id}
                            />
                        )}
                    </>
                    }
                </div>

                <Label >Name your offer</Label>
                <Input
                    name='name'
                    value={offer.name}
                    onChange={onChange}
                    mb={30}
                    placeholder="Ex.: Manual tester"
                />

                <Label >Add a short summary of the offer</Label>
                <TextArea
                    name='summary'
                    value={offer.summary}
                    onChange={onChange}
                    height={95}
                    maxLength={300}
                    placeholder="Ex.: Manual tester with huge experience. "

                />

            </WrapperHeight>


            <FooterDesktop>
                <Button blue mt={25} onClick={handleNext} disabled={disabled} loading={loading} >Continue</Button>
            </FooterDesktop>
        </>
    );
};

export default withAuthSync(Category)

const Box = styled.div`
  @media ${device.laptopDesktop} {
    width: 400px;
  }
`