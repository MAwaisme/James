import { gql } from "@apollo/client";

export const GET_CAMPAIGN = gql`
query GetCampaign($id: String!) {
    compaign(id: $id) {
        _id
        type
        name
        location
        status
        createdAt
      }
}
`;