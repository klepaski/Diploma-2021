import axios from 'axios'
import cookie from 'js-cookie'
import {logout} from '../utils/auth'

export const initAxios = (cb) => {
    let token = cookie.get('token');
    if(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    }

    axios.interceptors.response.use(
        async (response) => { return response },
        async (error) => {
            const status = error.response.status
            if (status === 401) {
                debugger
                delete axios.defaults.headers.common["Authorization"];
                logout()
            }
            if (status === 403) {
                window.location.href='/'
            }
            return Promise.reject(error)
        })

    cb()
}


