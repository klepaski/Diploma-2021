import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {PickerWrapper} from './styledPickers'
import './style.css'

export default function DPicker ({...props}) {
    return (
        <PickerWrapper>
            <DatePicker {...props} />
        </PickerWrapper>
    );
}

