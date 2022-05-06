import { ApolloClient, InMemoryCache } from '@apollo/client';

//https://backendtest.tech

export const setAuthToken = () => {

  if (localStorage.getItem('token')) {
    const client = new ApolloClient({
      uri: process.env.REACT_APP_BACKEND_URL + '/vyzmo',
      cache: new InMemoryCache(),

      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    return client
  } else {
    const client = new ApolloClient({
      uri: process.env.REACT_APP_BACKEND_URL + '/vyzmo',
      cache: new InMemoryCache(),
    });
    return client
  }

}

