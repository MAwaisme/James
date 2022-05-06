import { GET_CAMPAIGN } from '../../graphql/query/getCampaign'
import * as constants from './constants'

export const fetchCampaign = () => async (dispatch, getState, client) => {
    console.log("🚀 ~ file: getCampaign.js ~ line 5 ~ fetchCampaign ~ getState", getState().Auth?.user?._id)
    try {
        dispatch({ type: constants.GET_CAMPAIGN_LOADING })
        const res = await client.query({ query: GET_CAMPAIGN, variables: { id: getState().Auth?.user?._id }, fetchPolicy: 'no-cache' })
        dispatch({ type: constants.GET_CAMPAIGN_SUCCESS, payload: res.data.compaign })
        console.log("🚀 ~ file: getCampaign.js ~ line 10 ~ fetchCampaign ~ res.data.compaigns", res.data.compaign)
    } catch (error) {
        dispatch({ type: constants.GET_CAMPAIGN_ERROR, payload: error })
    }

}