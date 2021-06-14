import React, {Component} from 'react'
import Router from 'next/router'
import {apiGetOfferById} from '../actions/api'
import {showNotification} from "./notification";


const withOfferInfo = (OfferComponent) => {
    return class OfferWrapper extends Component {
        static async getInitialProps ({req, res, query}) {
            try {
                return {id: query.id}
            }
            catch (err) {
                console.log('ошибка', err)
            }
        };
        constructor(props) {
            super(props)
            this.state = {
                offer: {},
                offerPhotos: [],
                loading: false
            };
        }

        componentDidMount () {
            if (this.props.id) {
                apiGetOfferById(this.props.id)
                    .then(res => {
                        if(res.data.userId === localStorage.getItem('userId')){
                            this.setState({offer: res.data}, () => {
                                this.setState({loading: false})
                            })
                        } else {
                            showNotification('error', 'Not allowed')
                            Router.push('/')
                        }
                    })
                    .catch(e => {
                        this.setState({loading: false})
                    })
            } else {

            }
        }

        render() {
            return (
                <div>
                    {this.state.loading ? (
                        <div>LOADING....</div>
                    ) : (
                        <OfferComponent {...this.props}  offer={this.state.offer}/>
                    )}
                </div>
            )
        }
    }
}

export default withOfferInfo;