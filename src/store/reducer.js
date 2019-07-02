const initialState = {

    isAuth: false,
    mobiles: [],
    loading: true,
    name: '',
    idToken: null,
    localID: null,
    error: null,
    mobile: []
}

const reducer = (state = initialState, action) => {


    switch(action.type) {
        case 'AuthUser':
            return {
                ...state,
                isAuth: !state.isAuth
            }
        case 'FETCH_MOBILES':
            return {
                ...state,
                mobiles: action.val,
                loading: false
            }
        case 'SAVE_MOBILE':
            return {
                ...state,
                mobile: action.mobile
            }

        case 'SEARCH_NAME':
            return {
                ...state,
                name: action.val
            }
        case 'AUTH_SUCCESS':
            return {
                ...state,
                idToken: action.idToken,
                localID: action.localID
                
            }
        case 'AUTH_FAIL':
            return {
                ...state,
                error: action.error
            }
        case 'AUTH_LOGOUT':
            return {
                ...state,
                idToken: null,
                localID: null
            }
    }

    return state;    
}

export default reducer;

