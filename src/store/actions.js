import axios from '../axios-order';
import Axios from 'axios';


const saveMobiles = (value) => {
    return {
        type: 'FETCH_MOBILES',
        val: value
    }
}

export const fetchMobiles = () => {
    return dispatch => {
        axios.get('getlatest?token=36fa9a6b633727b5c261f2c5bb0f2bd22b7f51c1bd7ee4e1').then(response => {
            return dispatch(saveMobiles(response.data));
        })
    }
}

export const saveMobile = (mobile) => {
    return {
        type: 'SAVE_MOBILE',
        mobile: mobile
    }
}

export const searchname = (e) => {
    return {
        type: 'SEARCH_NAME',
        val: e.target.value
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: 'AUTH_SUCCESS',
        idToken: token,
        localID: userId
    }
}

export const authFail = (err) => {
    return {
        type: 'AUTH_FAIL',
        error: err
    }
}
export const auth = (email , password, signup) => {
    return dispatch => {
        const authData = {
            email,
            password,
            returnSecureToken: true
        }
        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBg2OwsNSXxePQ_Llr-6cN2Vp0ndNSHR3s'

        if(!signup) {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBg2OwsNSXxePQ_Llr-6cN2Vp0ndNSHR3s'
        }


        Axios.post(url, authData).then(response => {
            dispatch(authSuccess(response.data.idToken, response.data.localId));
        }).catch(err => {
            dispatch(authFail(err.message))
        })
    }
}

export const authIn = (email , password) => {
    return dispatch => {
        const authData = {
            email,
            password,
            returnSecureToken: true
        }
        Axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBg2OwsNSXxePQ_Llr-6cN2Vp0ndNSHR3s', authData).then(response => {
            console.log(response)
            dispatch(authSuccess(authData))
        }).catch(err => {
            console.log(err);
            dispatch(authSuccess(err))
        })
    }
}

export const logout = () => {
    return {
        type: 'AUTH_LOGOUT',
        localID: null,
        idToken: null
    }
}

export const authLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userID');
    return {
        type: 'AUTH_LOGOUT'
    }
}
