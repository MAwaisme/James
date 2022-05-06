import { GET_CAMPAIGN_ERROR, GET_CAMPAIGN_LOADING, GET_CAMPAIGN_SUCCESS } from "../actions/getCampaign/constants"


const initialState = {
    loading: false,
    allcampaigns: [],
    error: null
}

export const GetCampaign = (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_CAMPAIGN_LOADING:
            return { ...state, loading: true }

        case GET_CAMPAIGN_SUCCESS:
            return { ...state, loading: false, allcampaigns: payload }

        case GET_CAMPAIGN_ERROR:
            return { ...state, loading: false, error: payload }

        default:
            return state
    }
}
