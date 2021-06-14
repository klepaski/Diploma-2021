import React, {Component, useContext} from 'react'

import {MainContext} from "../components/contextProviders/MainContext";


const withOfferInfo = (Component) => {
    const {me} = useContext(MainContext)

    return (
        <div>
            {me.id ? (
                <div>test LOADING....</div>
            ) : (
                <Component {...this.props}/>
            )}
        </div>
    )
}

export default withOfferInfo;