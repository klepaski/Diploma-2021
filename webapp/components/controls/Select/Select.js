import React from "react";
import ReactSelect from 'react-select';

import {SelectWrapper} from './styledSelect'

export default function Select ({value, ...props}) {
    if(value && typeof(value) != 'object') value = {value: value, label: value}

    // console.log(props)
    return (
        <SelectWrapper {...props} >
            <ReactSelect className={'programmer-select'} value={value} {...props} />
        </SelectWrapper>
    );
}