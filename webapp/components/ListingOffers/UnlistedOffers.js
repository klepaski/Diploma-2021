import React from 'react';
import styled, { css } from 'styled-components'
import {ListingWrapper, EditRowWrapper} from '../ListingOffers/styledUnlistedOffers'
import {Text} from "../StyledComponents/Text";
import {Wrapper} from "../../components/StyledComponents/Wrapper";
import {Divider} from "../../components/StyledComponents/Divider"
import {ButtonMinHeight} from "../../components/controls/Button/Button";
import {ArrowRight} from "../../components/StyledComponents/Icon";
import {FlexBlock} from '../StyledComponents/FlexBlock'


const OfferBlock = () => {
    return (
        <ListingWrapper>
            <Wrapper pl={30} pr={30}>
                <EventItem/>
                <ButtonMinHeight mt={30} transparentPurple bold>Publish offer</ButtonMinHeight>
            </Wrapper>
            <Divider grey mt={35}/>
            <Text fz={18} ml={30} mt={20}>Settings</Text>
        </ListingWrapper>
    );
};

const EditRow = ({title, desc, ...props}) => {
    return (
        <Box>
            <FlexBlock verticalcenter pt={25} pb={25} pr={20} pl={20} {...props}>
                <div>
                    <Text grey4a bold fz={22} pr={20}>{title}</Text>
                    {desc && <Text grey4a fz={18} pt={1}>{desc}</Text>}
                </div>
                <ArrowRight/>
            </FlexBlock>
            <Divider grey/>
        </Box>
    );
};

const Box = styled.div`
  cursor: pointer;
`

export {OfferBlock, EditRow};