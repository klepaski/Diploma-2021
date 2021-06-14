import React, { Component } from 'react'
import Router from 'next/router'
import {apiGetMe, apiGetUnreadMessages} from '../../actions/api'
import cookie from "js-cookie";
import {urlSearchParams} from "../../utils/utils";
let token = cookie.get('token')

const MainContext = React.createContext({})
const MainConsumer = MainContext.Consumer

/* Then create a provider Component */
class MainProvider extends Component {
    getMe = () => {
        apiGetMe()
            .then((res) => {
                this.setState({me: res.data, checkedMe: true});
            })
            .catch(() => {
                Router.push('/login')
            });

    };

    getUnreadMessages = () => {
        apiGetUnreadMessages()
            .then((res) => {
                this.setState({unreadMessages: res.data});
            })
    };



    setMe = me => {
        let clone = Object.assign({}, me);
        this.setState({me: me})
    }

    setOffer = offer => {
        this.setState({offer: Object.assign({}, offer)})
    }


    handleChangeUnreadMessages = (count = 0) => {
        let unread  = this.state.unreadMessages - count;
            if(unread < 0) unread = 0;
        this.setState({unreadMessages: unread})
    }

    state = {
        me: {},
        unreadMessages: 0,
        offer: {
            categoryOptions: []
        },
        checkedMe: false,
        setMe: this.setMe,
        setOffer: this.setOffer,
        handleChangeUnreadMessages: this.handleChangeUnreadMessages,
        listOffers: []
    }

    componentDidMount() {
        if(token) {
            this.getMe()
            this.getUnreadMessages()

        } else {
            this.setState({checkedMe: true})
        }
    }

    render () {
        return (
            <MainContext.Provider value={this.state} >
                {this.props.children}
            </MainContext.Provider>
        )
    }
}

// MainProvider.getInitialProps = async ({ req }) => {
//     const node_env = process.env.NODE_ENV
//     console.log('test', node_env)
//     const host =  req.headers.host
//     return { node_env }
// }

export default MainProvider
export {MainConsumer, MainContext}

