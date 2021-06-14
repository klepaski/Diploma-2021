import React, {useState} from 'react';
import Router from 'next/router'

import {Button} from "../../controls/Button/Button";
import {Title, WrapButton, TipWrapper, Label, WrapRadioBlock, TipWrapper2, Label2} from "./../../Layouts/styledLayouts";
import {Text} from "../../StyledComponents/Text";
import {Divider} from "../../StyledComponents/Divider";
import {Wrapper} from "../../StyledComponents/Wrapper";
import {CounterLabel} from "../../controls/Counter/Counter";
import Select from "../../controls/Select/Select";
import {Clr1, Clr2} from "../../StyledComponents/Icon";
import {RadioBtn} from "../../controls/Radio/Radio";
import {Input} from "../../controls/Input/Input";
import {modifyForReactSealect} from "../../../utils/utils";
import {CURRENCY} from "../../../utils/data"

const BasePrice = ({price, onChange}) => {
    console.log(price.currency)
    return (
        <>
            <Title mb={15} >Price</Title>
            <Label>Define your price for one offer.</Label>
            <Label2 >Value</Label2>
            <Input
                name='pricePerAct'
                type='number'
                value={price.pricePerAct}
                onChange={e => onChange({type: e.target.name, value: e.target.value})}
                mb={10}
                placeholder="Ex.: 500"
            />
            <Label2 >Currency</Label2>
            <Select
                options={CURRENCY}
                value={price.currency}
                onChange={(value) => onChange({type: 'currency', value: value.value})}
                mb={25}
            />
        </>
    );
};

export default BasePrice;
