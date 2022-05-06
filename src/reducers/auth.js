import * as authConstants from '../actions/auth/constants'

const initialState = {
    loading: false,
    user: null,
    error: null,

}

const Auth = (state = initialState, { type, payload }) => {
    switch (type) {

        case authConstants.AUTH_LOADING:
            return { ...state, loading: true, }

        case authConstants.AUTH_LOGIN:
            return { ...state, loading: false, user: payload, }

        case authConstants.AUTH_REGISTER:
            return { ...state, loading: false }

        case authConstants.AUTH_ERROR:
            return { ...state, loading: false, }

        default:
            return state
    }
}

export default Auth