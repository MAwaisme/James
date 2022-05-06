import { Flex, Heading, Text, VStack } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import React from 'react';
import logo from '../../assets/media/Images/logo.png';
import SignUpCom from '../../components/signUp/SignUpCom'

const SignUp = () => {


  return (
    <Flex w="full" minH="100vh" justifyContent="center" alignItems="center">
      <VStack flex="1" d={{ base: 'none', md: 'none', lg: 'flex' }}>
        <Image src={logo} />
        <Heading color="blue.500">Vyzmo Ads Manager</Heading>
        <Text color="lightgray">
          Sign Up to Start Exploring Vyzmo Ads Manager
        </Text>
      </VStack>
      <VStack my={{ base: '8' }} flex="1">
        <SignUpCom  />
      </VStack>
    </Flex>
  );
};

export default SignUp;
