import React from 'react';
import Router from 'next/router'

import {Button} from "../../controls/Button/Button";
import {Title, WrapButton, TipWrapper} from  "./../../Layouts/styledLayouts";
import {Text} from "../../StyledComponents/Text";
import {Divider} from "../../StyledComponents/Divider";
import {CheckGreen} from "../../StyledComponents/Icon";
import styled from "styled-components";
import {device} from "../../../lib/mediaDevice";

const LastStep = ({handleChangeStep, offer}) => {
    return (
        <Box>
            <Title mb={'5px'} >And the last step!</Title>
            <Text fz={18}>Final preparations before getting started!</Text>
            <div className="flex-between">
                <div>
                    <Text mt={30} grey >STEP 1</Text>
                    <Text fz={18} mb={'5px'} >Describe your offer, audience and performing conditions</Text>
                </div>
                <CheckGreen />
            </div>
            {/*<Text blue >Change</Text>*/}
            <Divider grey full mt={10} mb={10} />

            <div className="flex-between">
                <div style={{minWidth: 'calc(100% - 25px)'}}>
                    <Text grey>STEP 2</Text>
                    <Text fz={18}>Upload photos and videos</Text>
                    <Text mb={'5px'} grey6>Help clients understand the offer better.</Text>
                    <Text blue onClick={() => handleChangeStep(-1)}>Change</Text>
                </div>
                <CheckGreen />
            </div>



                <TipWrapper mt={20} blue >
                    {(offer.subCategory && offer.subCategory.category) ?
                    <Text fz={16} >{offer.subCategory.category}</Text>
                    :
                    <Text fz={16} >{offer.category.category}</Text>
                    }
                </TipWrapper>




            <Divider grey full mt={10} mb={10} />

            <Text grey>STEP 3</Text>
            <Text mb={'5px'} fz={18} >Get ready for new clients</Text>
            <Text grey6 >Set booking conditions, availability calendar and the price</Text>
            <WrapButton>
                <Button mt={10} blue onClick={() => {handleChangeStep(1)}} >Continue</Button>
            </WrapButton>
            <Divider grey full mt={10} mb={10} />
        </Box>
    );
};

export default LastStep;

const Box = styled.div`
  @media ${device.laptopDesktop} {
    width: 500px;
    margin: 0 auto;

    ${Divider} {
      margin-top: 25px;
      margin-bottom: 25px;
    }

    .flex-between {
      position: relative;
    }

    ${CheckGreen} {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`
