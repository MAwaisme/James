import * as authConstants from './constants';
import {
    EDIT_USER_MUTATION,
    LOGIN_USER_MUTATION,
    REGISTER_USER_MUTATION,
} from '../../graphql/mutations/auth/auth';
import ErrorToaster from '../../components/toaster/error/ErrorToaster';
import SuccessToaster from '../../components/toaster/success/SuccessToaster';

export const registerUser =
    (data, toast, history) => async (dispatch, getState, client) => {
    const {
        email,
        password,
        country,
        phone,
        company_name,
        designation,
        employer_strength,
        username,
        phoneCode,
    } = data;
    try {
        dispatch({ type: authConstants.AUTH_LOADING });
        const res = await client.query({
            query: REGISTER_USER_MUTATION,
            variables: {
                username,
                company_name,
                country,
                phone_number: phoneCode + phone,
                designation,
                email,
                password,
                employer_strength,
            },
            fetchPolicy: 'no-cache',
        });
        SuccessToaster(toast, 'successfully registered');
        dispatch({ type: authConstants.AUTH_REGISTER, payload: res });
        history.push('/signin');
    } catch (error) {
        dispatch({ type: authConstants.AUTH_ERROR, payload: error });
        console.log('error', error?.response);
        ErrorToaster(toast, error?.message);
    }
    };

export const loginUser =
    (data, toast, history) => async (dispatch, getState, client) => {
        const { email, password } = data;
        try {
            dispatch({ type: authConstants.AUTH_LOADING });
            const res = await client.query({
                query: LOGIN_USER_MUTATION,
                variables: { email, password },
                fetchPolicy: 'no-cache',
            });
            // SuccessToaster(toast, 'successfully registered')
            dispatch({ type: authConstants.AUTH_LOGIN, payload: res.data?.adLoginUser });
            localStorage.setItem('token', res.data?.adLoginUser.token)
            // window.location.href = '/';
        } catch (error) {
            dispatch({ type: authConstants.AUTH_ERROR, payload: error });
            console.log('error', error?.response);
            ErrorToaster(toast, error?.message);
        }
    };

export const editUser = (data, toast, history) => async (dispatch, getState, client) => {
    const email = getState().Auth.user.email
    const {
        company_name,
        country,
        username,
        phoneCode,
        phone,
        designation,
        profileImage,
        employer_strength,
    } = data;
    try {
        dispatch({ type: authConstants.AUTH_LOADING });
        const res = await client.query({
            query: EDIT_USER_MUTATION,
            variables: {
                email,
                company_name,
                country,
                username,
                phone_number: phoneCode + phone,
                designation,
                profileImage,
                employer_strength,
            },
            fetchPolicy: 'no-cache',
        });
      // SuccessToaster(toast, 'successfully registered')
        dispatch({ type: authConstants.AUTH_LOGIN, payload: res.data?.editAdUser });
        history.push('/profile')
    } catch (error) {
        dispatch({ type: authConstants.AUTH_ERROR, payload: error });
        console.log('error', error?.response);
        ErrorToaster(toast, error?.message);
    }
};
