import React, { useState, useContext } from 'react';
import Link from "next/link";
import { MainContext, MainConsumer } from "../../contextProviders/MainContext"


import {Title, Footer, TipWrapper2} from "../../Layouts/styledLayouts";
import {Text} from "../../StyledComponents/Text";
import Dropzone from '../../controls/Upload/Dropzone'

const Upload = ({onDrop}) => {

    const preonDrop = (files) => {
        onDrop(files)
    }

    return (
        <>
            <Title mb={25} >Some photos?</Title>
            <Text fz={16} mb={30} grey6 >Do you have some bright high-quality photos perfectly describing your offer? Show them to the public!</Text>

            <Dropzone onDropProp={preonDrop} />

            <TipWrapper2 mt={40} mb={40} >
                <Text fz={12} >
                    Photos help clients imagine and understand your offer better.
                </Text>
            </TipWrapper2>

        </>
    );
};

export default Upload;
