import { combineReducers } from "redux";
import Auth from "./auth";
import { createCampaignReducer } from "./createCampaign";
import { GetCampaign } from "./getCampaign";

export default combineReducers({
  createCampaignReducer,
  GetCampaign,
  Auth,
});
