import { gql } from '@apollo/client';

export const REGISTER_USER_MUTATION = gql`
  mutation RegisterAdUser(
    $username: String!
    $company_name: String!
    $country: String!
    $phone_number: String!
    $designation: String!
    $email: String!
    $password: String!
    $employer_strength: String!
  ) {
    registerAdUser(
      adUserCredentials: {
        username: $username
        company_name: $company_name
        country: $country
        phone_number: $phone_number
        designation: $designation
        email: $email
        password: $password
        employer_strength: $employer_strength
      }
    )
  }
`;

export const LOGIN_USER_MUTATION = gql`
  mutation AdLoginUser($email: String!, $password: String!) {
    adLoginUser(adLoginCredentials: { email: $email, password: $password }) {
      profileImage
      username
      company_name
      country
      phone_number
      designation
      email
      token
      _id
      employer_strength
    }
  }
`;

export const EDIT_USER_MUTATION = gql`
  mutation EditAdsUser(
    $email: String!,
    $company_name: String!
    $country: String!
    $username: String!
    $phone_number: String!
    $designation: String!
    $profileImage: String!
    $employer_strength: String!
  ) {
    editAdUser(
      editedUser: {
        email: $email
        company_name: $company_name
        country: $country
        username: $username
        phone_number: $phone_number
        designation: $designation
        profileImage: $profileImage
        employer_strength: $employer_strength
      }
    ) {
        profileImage
        username
        company_name
        country
        phone_number
        designation
        email
        token
        _id
        employer_strength
    }
  }
`;

