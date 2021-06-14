import React from 'react';
import Router from 'next/router'

import {Button, ButtonMin} from "../../controls/Button/Button";
import {Title, Footer} from "./../../Layouts/styledLayouts";
import {Text} from "../../StyledComponents/Text";
import {Divider} from "../../StyledComponents/Divider";
import {Icon1, Icon2, Icon3, WrapperIcon} from "../../StyledComponents/Icon";

const LocalTaxes = ({handleChangeStep}) => {
    return (
        <>
            <Title mb={35} >Your local laws and taxes</Title>
            <Divider green half />
            <Text fz={18} mb={20} mt={20} textCenter >
                Make sure you familiarize yourself with your local laws, as well as E booking Nondiscrimination Policy.
            </Text>
            <Divider green half />
            <Text fz={18} mb={20} mt={20} textCenter >
                Please educate yourself about the laws in your jurisdiction before listing your act
            </Text>
            <Divider green half />
            <Text fz={18} mb={20} mt={20} textCenter >
                By accepting our Terms of Service and listing your act, you certify that you will follow applicable laws and regulations.
            </Text>

            <Footer mt={30} >
                <Button >Back</Button>
                <Button green >Next</Button>
            </Footer>
        </>
    );
};

export default LocalTaxes;
