import React, {useState, useContext, useEffect} from 'react';

import {Button} from "../../controls/Button/Button";
import BasePrice from "../price/BasePrice";
import {WrapperHeight} from "../../StyledComponents/Wrapper";
import {Label, Label2, Title, WrapRadioBlock, WrapRadioBlock2} from "../../Layouts/styledLayouts";
import {Divider} from "../../StyledComponents/Divider";
import {Clr1, Clr2} from "../../StyledComponents/Icon";
import {Text} from "../../StyledComponents/Text";
import {RadioBtn} from "../../controls/Radio/Radio";
import {Input} from "../../controls/Input/Input";
import Select from "../../controls/Select/Select";
import {CURRENCY} from "../../../utils/data"

export default ({offer, onChange, isLoading, onSave}) => {
    const preOnChange = ({type, value}) => {
        onChange( {target: {name: type, value: value}})
    }



    return (
        <>
            <Title mb={40} >How do you want to set your price?</Title>

            <Divider grey full mt={10} mb={10}></Divider>


            <Title mb={15} >Price</Title>
            <Label>Your price for one offer</Label>
            <Label2 >Value</Label2>
            <Input
                name='pricePerAct'
                value={offer.pricePerAct}
                onChange={e => preOnChange({type: e.target.name, value: e.target.value})}
                mb={10}
                placeholder="Ex.: 500"
            />
            {/*<Text blue mb={30} fz={18} >Your price is: 350 AED</Text>*/}
            <Label2 >Currency</Label2>
            <Select
                options={CURRENCY}
                value={offer.currency}
                onChange={(value) => preOnChange({type: 'currency', value: value.value})}
                mb={30}
            />

            <Button green loading={isLoading} onClick={onSave} mt={70}>Save</Button>
        </>
    );
};

