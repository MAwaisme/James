import { gql } from '@apollo/client';

export const CREATE_CAMPAOGN_MUTATION = gql`
  mutation CreateCampaign(
    $password: String
    $token: String
    $type: String
    $name: String
    $email: String
    $compaign_strategy: Strategy
    $budget: Budget
    $location: [String]
    $languages: [String]
    $gender: [String]
    $parental_status: [String]
    $keywords: [String]
    $ad_creation: AddCreation
    $billing: Billing
    $status: String
  ) {
    createCampaign(
      obj: {
        password: $password
        token: $token
        type: $type
        name: $name
        email: $email
        budget: $budget
        compaign_strategy: $compaign_strategy
        location: $location
        languages: $languages
        gender: $gender
        parental_status: $parental_status
        keywords: $keywords
        ad_creation: $ad_creation
        billing: $billing
        status: $status
      }
    )
  }
`;
