import React from 'react';
import styled from "styled-components";
import {Wrapper} from "../components/StyledComponents/Wrapper";
import Header from "../components/Header/Header"
import {Text} from "../components/StyledComponents/Text";
import {Button} from "../components/controls/Button/Button";
import mountImg from "../static/img/mount.jpg";

const Img = styled.img.attrs(props => ({src: props.src}))``

const PreviewOffer = () => {

    return (
        <>
            <Header isPreview/>
            <Img src={mountImg}/>
            <Wrapper pl={18} pr={18}>
                <Text bold fz={28} mt={16}>Offer name</Text>
                <Button transparent disabled mt={20}>Publish offer</Button>
            </Wrapper>
        </>

    );
};

export default PreviewOffer

