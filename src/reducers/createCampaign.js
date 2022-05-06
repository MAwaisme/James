/* eslint-disable default-case */

import * as constants from "../actions/createCampaign/constants";

const initialState = {
    campaignData: {},
    adsData: {},
    billingInfo: {},
    createdOn: null,
    thumbnail: null,
    loading: false,
    error: null,
}

export const createCampaignReducer = (state = initialState, { type, payload }) => {
    switch (type) {



        case constants.ADD_CAMPAGIN_DATA:
            return { ...state, campaignData: { ...state.campaignData, ...payload } }

        case constants.ADD_CAMPAGIN_DATA_ERROR:
            return { ...state, error: payload }

        case constants.ADD_ADS_DATA:
            return { ...state, adsData: { ...state.adsData, ...payload } }

        case constants.ADD_ADS_DATA_ERROR:
            return { ...state, error: payload, loading: false }

        case constants.ADD_BILLING_DATA:
            return { ...state, billingInfo: { ...payload } }

        case constants.ADD_BILLING_DATA_ERROR:
            return { ...state, error: payload }

        case constants.SUBMIT_CAMPAIGN:
            return { ...state, loading: true }

        case constants.SUBMIT_CAMPAIGN_SUCCESS:
            return {
                campaignData: {},
                adsData: {},
                billingInfo: {},
                createdOn: null,
                thumbnail: null,
                loading: false,
                error: null,
            }

        case constants.SUBMIT_CAMPAIGN_ERROR:
            return { ...state, error: payload, loading: false }

        case constants.LOADING_THUMBNAIL:
            return { ...state, loading: true }

        case constants.SUCCESSFULLY_LOADED_THUMBNAIL:
            return { ...state, loading: false, thumbnail: payload }

        case constants.LOADING_THUMBNAIL_ERROR:
            return { ...state, loading: false, error: payload }

        case constants.CAMPAIGN_LOADING:
            return { ...state, loading: true }

        case constants.CAMPAIGN_FETCHED_SUCCESSFULLY:
            return { ...state, loading: false, }

        case constants.CAMPAIGN_ERROR:
            return { ...state, loading: false, error: payload }

        default:
            return state;

    }
}
