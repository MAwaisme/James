import ErrorToaster from "../../components/toaster/error/ErrorToaster";
import SuccessToaster from "../../components/toaster/success/SuccessToaster";
import { CREATE_CAMPAOGN_MUTATION } from "../../graphql/mutations/campaign/campaign";
import { GET_CAMPAIGN } from "../../graphql/query/getCampaign";
import { GET_VIDEO_BY_ID_QUERY } from "../../graphql/query/VideoThumbnail";
import * as constants from "./constants";

export const addCampaignData = (data) => async (dispatch, getState) => {

    try {
        dispatch({ type: constants.ADD_CAMPAGIN_DATA, payload: data })
    } catch (error) {
        dispatch({ type: constants.ADD_CAMPAGIN_DATA_ERROR, payload: error })
    }
}

export const addAdsData = (data) => async (dispatch, getState) => {

    try {
        dispatch({ type: constants.ADD_ADS_DATA, payload: data })
    } catch (error) {
        dispatch({ type: constants.ADD_CAMPAGIN_DATA_ERROR, payload: error })
    }
}

export const addBiilingData = (data) => async (dispatch, getState) => {

    try {
        dispatch({ type: constants.ADD_BILLING_DATA, payload: data })
    } catch (error) {
        dispatch({ type: constants.ADD_BILLING_DATA_ERROR, payload: error })
    }
}

export const submitCampaign = (data, toast, history) => async (dispatch, getState, client) => {



    const { campaignData, adsData, billingInfo, token, password, email } = data

    const { type, name, clicks, impression_share, country, daily_budget_amount, payment_method, total_budget_amount, start_date, end_date, location, languages, gender, age, parental_status } = campaignData

    const { search_ad_preview, display_ad, feature_carousel, video_ad, featured_ad, keywords } = adsData

    const { time_zone, promo_code, billing_address, credit_card, expiry, cvc } = billingInfo


    try {

        await client.query({
            query: CREATE_CAMPAOGN_MUTATION,
            variables: {
                password,
                token,
                type,
                name,
                email,
                compaign_strategy: { clicks: +clicks, impression_share: +impression_share },
                budget: { country, total_budget_amount: +total_budget_amount, daily_budget_amount, start_date, end_date, payment_method },
                location: location?.map((data) => data.value),
                languages: languages?.map((data) => data.value),
                gender,
                parental_status,
                age,
                keywords,
                ad_creation: {
                    search_ad_preview, display_ad, feature_carousel, featured_ad, video_ad: {
                        ad_type: video_ad?.ad_type,
                        video_url: video_ad?.video_url,
                        site_url: video_ad?.site_url
                    }
                },
                billing: { country: billingInfo.country, time_zone, promo_code, billing_address, credit_card, name: billingInfo.name, expiry, cvc },

            },
            fetchPolicy: 'no-cache'
        })
        dispatch({ type: constants.SUBMIT_CAMPAIGN_SUCCESS })
        SuccessToaster(toast, 'Campaign Created Successfully')
        history.push('/')
    } catch (error) {
        dispatch({ type: constants.SUBMIT_CAMPAIGN_ERROR, payload: error })
        ErrorToaster(toast, error?.message)

    }
}


export const fetchThumbnail = (data) => async (dispatch, getState, client) => {
    try {
        dispatch({ type: constants.LOADING_THUMBNAIL })
        const res = await client.query({ query: GET_VIDEO_BY_ID_QUERY, variables: { id: data }, fetchPolicy: 'no-cache' })
        dispatch({ type: constants.SUCCESSFULLY_LOADED_THUMBNAIL, payload: res })
    } catch (error) {
        dispatch({ type: constants.LOADING_THUMBNAIL_ERROR, payload: error })
    }

}

export const fetchCampaign = (data) => async (dispatch, getState, client) => {
    try {
        dispatch({ type: constants.CAMPAIGN_LOADING })
        const res = await client.query({ query: GET_CAMPAIGN, variables: { id: data }, fetchPolicy: 'no-cache' })
        dispatch({ type: constants.SUCCESSFULLY_LOADED_THUMBNAIL, payload: res })
    } catch (error) {
        dispatch({ type: constants.CAMPAIGN_ERROR, payload: error })
    }

}

