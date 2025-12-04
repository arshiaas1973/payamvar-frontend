'use server';
import axios from 'axios';
import getConfig from 'next/config';
import 'server-only';

const {serverRuntimeConfig} = getConfig();
const Axios = axios.create({
    baseURL: serverRuntimeConfig.apiUrl,
    headers: {
        "X-API-KEY": serverRuntimeConfig.apiKey,
    },
    withCredentials: true,
    withXSRFToken: true,
    xsrfCookieName: "xsrf_cookie",
    xsrfHeaderName: "xsrf_cookie",
})
export default Axios;