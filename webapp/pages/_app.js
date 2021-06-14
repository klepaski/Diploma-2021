import App, { Container } from 'next/app'
import Router from 'next/router';
import {NotificationContainer} from 'react-notifications';
import { createStore } from '@reatom/core'
import { context } from '@reatom/react'

import MainProvider from '../components/contextProviders/MainContext'
import PageHead from '../components/PageHead'
import {initAxios} from '../config/axios'
import '../static/css/styles.css'
import '../static/css/media-styles.css'
import '../static/css/notification.css'




class MyApp extends App {
    constructor(props) {
        super(props);
        this.state = {
            initialized: false
        };

    }

    componentDidMount() {
        initAxios(() => {
            this.setState({initialized: true})
        })
    }


    render () {
        const { Component, pageProps } = this.props
        const store = createStore();

        if(!this.state.initialized) return null

        return (
            <Container>
                <MainProvider>
                    <PageHead />
                    <Component {...pageProps} />
                </MainProvider>
                <NotificationContainer />
            </Container>
        )
    }
}
export default MyApp