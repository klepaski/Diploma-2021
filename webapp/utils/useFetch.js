import React, {useState, useEffect} from 'react';
import axios from 'axios'

import {showNotification} from "./notification";


export const useFetch = (url, options) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const res = await fetch(url, options);
                const json = await res.json();
                setResponse(json);
                setIsLoading(false)
            } catch (error) {
                setError(error);
                showNotification('error', error)
                setIsLoading(false)
            }
        };
        fetchData();
    }, []);
    return { response, error, isLoading };
};

export const useAxios = (method, url, data) => {
    (async () => {
        try {
            const res = await axios[method](url, data)
            return({response: res.data, error: null, isLoading: false})
        } catch (error) {
            showNotification('error', error)
            return({response: null, error: error, isLoading: false})
        }
    })();


     // axios[method](url, data)
     //    .then(res => {
     //        // setIsLoading(false)
     //        return({response: res.data, error: null, isLoading: false})
     //    })
     //    .catch(e => {
     //        // setError(error);
     //        showNotification('error', error)
     //        // setIsLoading(false)
     //        return({response: null, error: error, isLoading: false})
     //    })
};


