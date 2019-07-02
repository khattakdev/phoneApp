import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://fonoapi.freshpixl.com/v1/'
})

export const firebase = axios.create({
    baseURL: 'https://phono-app4.firebaseio.com/'
})

export default instance;