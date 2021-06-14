import React, {useState, useContext, useEffect, useMemo} from 'react';

import {Label} from "./../../Layouts/styledLayouts";
import {Input, TextArea} from "../../controls/Input/Input";
import {Tab} from "../../controls/Tabs/Tabs";
import Select from "../../controls/Select/Select";
import {Button} from "../../controls/Button/Button";
import {addOrRemove, isIncludesThisId} from "../../../utils/utils";

// import {listCountries} from "../../../utils/countriesLanguages";
const listCountries = [
    {value: 'United Arab Emirates', label: 'United Arab Emirates'},
    {value: 'Saudi Arabia', label: 'Saudi Arabia'}
]

export default ({offer, onChange, listCategories, listEventTypes, isLoading, onSave}) => {
    const [listSubCategories, setListSubCategories] = useState([])
    const listParentCategories = useMemo(() => listCategories.filter(item => !item.parentCategory), [listCategories]);

    if(!offer.summary) offer.summary = ''


    useEffect(() => {
        listCategories.map(item => {
            if(item.id === offer.category.id) {
                setActiveCategory(item)
            }
        })
    }, []);


    const setActiveCategory = category => {
        onChange( {target: {name: 'category', value: category}})
        let listSubc = listCategories.filter(item => (item.parentCategory && item.parentCategory.id === category.id))
        setListSubCategories(listSubc)
        setActiveSubCategory({})
    }

    const setActiveSubCategory = subCategory => {
        onChange( {target: {name: 'subCategory', value: subCategory}})
    }

    const handleChangeCountry = country => {
        onChange( {target: {name: 'country', value: country}})
    };

    const toggleItem = (item) => {
        let arr = addOrRemove(offer.type, item);
        onChange( {target: {name: 'type', value: arr}})
    }


    return (
        <>
            <Label >Name your offer</Label>
            <Input
                name='name'
                value={offer.name}
                onChange={onChange}
                mb={30}
                placeholder="Ex.: Singing opera"
            />
            <Label >Add a short summary of the offer</Label>
            <TextArea
                name='summary'
                value={offer.summary}
                onChange={onChange}
                height={95}
                count={offer.summary? offer.summary.length : ''}
                placeholder="Ex.: Singing rock opera covers of the hits "
            />
            <Label mt={20} >What is the category of your programmer?</Label>
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

            <Button green loading={isLoading} onClick={onSave} mt={70}>Save</Button>
        </>
    );
};

