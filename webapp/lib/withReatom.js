import React from 'react'
import axios from 'axios'
import { Provider } from 'react-redux'
import {createStore, declareAction, declareAtom} from '@reatom/core'
import { context } from '@reatom/react'
import App from 'next/app'

import {store} from '../features/index'

export const withReatom = (PageComponent, { ssr = true } = {}) => {
    const WithReatom = ({...props }) => {
        // let store = getOrInitializeStore(store)
        return (
            <context.Provider value={store}>
                <PageComponent {...props} />
            </context.Provider>
        )
    }

    // Make sure people don't use this HOC on _app.js level
    if (process.env.NODE_ENV !== 'production') {
        const isAppHoc =
            PageComponent === App || PageComponent.prototype instanceof App
        if (isAppHoc) {
            throw new Error('The withRedux HOC only works with PageComponents')
        }
    }

    // Set the correct displayName in development
    if (process.env.NODE_ENV !== 'production') {
        const displayName =
            PageComponent.displayName || PageComponent.name || 'Component'

        WithReatom.displayName = `withReatom(${displayName})`
    }

    if (ssr || PageComponent.getInitialProps) {
        WithReatom.getInitialProps = async context => {
            // Get or Create the store with `undefined` as initialState
            // This allows you to set a custom default initialState

            // Provide the store to getInitialProps of pages
            context.reatomStore = store

            // Run getInitialProps from HOCed PageComponent
            const pageProps =
                typeof PageComponent.getInitialProps === 'function'
                    ? await PageComponent.getInitialProps(context)
                    : {}

            // Pass props to PageComponent
            return {
                ...pageProps
                // initialReatomState: reatomStore.getState(),
            }
        }
    }

    return WithReatom
}



let reatomStore
const getOrInitializeStore = initialState => {
    // Always make a new store if server, otherwise state is shared between requests
    if (typeof window === 'undefined') {
        return store
    }

    // Create store if unavailable on the client and set it on the window object
    if (!reatomStore) {
        reatomStore = store
    }

    return store
}