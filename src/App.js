import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import theme from './assets/theme/Theme';
import Routes from './utils/routes/Routes';
import axios from 'axios';


function App() {
  // axios.defaults.baseURL = 'https://backendtest.tech'; 
  //http://192.168.100.5:5000
   

  axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
  return (
    <>
      <ChakraProvider theme={theme}>
        <Routes />
      </ChakraProvider>
    </>
  );
}

export default App;
