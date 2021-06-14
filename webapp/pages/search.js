import React, { useState, useContext, useEffect } from 'react';
import {Wrapper, WrapperHeight} from "../components/StyledComponents/Wrapper";
import Header from "../components/Header/Header"
import SearchBlock from "../components/Offer/search/SearchBlock";



const Search = () => {

    return (
        <>
            <Header isProfile />
            <Wrapper p={15} >
                <SearchBlock />
            </Wrapper>

        </>
    );
};

export default Search

