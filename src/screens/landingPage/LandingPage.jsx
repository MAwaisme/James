import { Button } from '@chakra-ui/button';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/form-control';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { Box, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import logo from '../../assets/media/Images/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../actions/auth/auth';
import { useToast } from '@chakra-ui/toast';

const LandingPage = () => {
  const [toggleVisibility, settoggleVisibility] = useState(false);
  const history = useHistory();
  const toast = useToast()
  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.Auth)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email('invalid email format')
        .required('email is required'),
      password: yup.string().required('password field is missing'),
    }),
    onSubmit: states => {
      dispatch(loginUser(states, toast, history))
    },
  });
  return (
    <Flex w="full" h="100vh" justifyContent="center" alignItems="center">
      <VStack flex="1" d={{ base: 'none', md: 'none', lg: 'flex' }}>
        <Image src={logo} />
        <Heading color="blue.500">Vyzmo Ads Manager</Heading>
        <Text color="lightgray">
          Welcome to Vyzmo Ads Manager
        </Text>
      </VStack>
      <VStack flex="1">
        <Box
          borderRadius="lg"
          py="10"
          px="5"
          width={{ base: '90%', md: '70%', lg: '60%' }}
          boxShadow="2xl"
        >
          <Heading
            d={{ base: 'flex', md: 'flex', lg: 'none' }}
            color="blue.500"
            fontSize="x-large"
            justifyContent="center"
            mb="0"
          >
            Vyzmo Ads Manager
          </Heading>
          <Text
            d={{ base: 'flex', md: 'flex', lg: 'none' }}
            color="gray"
            fontSize="sm"
            justifyContent="center"
            mb="5"
          >
            Welcome to Vyzmo Ads Manager
          </Text>
          <FormControl
            isInvalid={
              formik.errors.email && formik.touched.email ? true : false
            }
            w="full"
          >
            <FormLabel>Email</FormLabel>
            <Input type="email" {...formik.getFieldProps('email')} />
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </FormControl>
          <FormControl
            isInvalid={
              formik.errors.password && formik.touched.password ? true : false
            }
            mt="10"
          >
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={toggleVisibility ? 'text' : 'password'}
                {...formik.getFieldProps('password')}
              />
              <InputRightElement
                cursor="pointer"
                onClick={() => settoggleVisibility(!toggleVisibility)}
                children={toggleVisibility ? <ViewIcon /> : <ViewOffIcon />}
              />
            </InputGroup>
            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
          </FormControl>
          <Button
            onClick={() => formik.handleSubmit()}
            type="submit"
            w="full"
            my="10"
            colorScheme="blue"
            isLoading={loading}
          >
            Log In
          </Button>
          <hr />
          <HStack mt="5" justifyContent="center">
            <Text
              fontSize="small"
              textAlign="center"
              d="flex"
              justifyContent="center"
            >
              Don't Have an Account?
            </Text>
            <Text
              cursor="pointer"
              color="royalblue"
              ml="1"
              fontWeight="bold"
              onClick={() => history.push('/signup')}
            >
              {' '}
              SignUp
            </Text>
          </HStack>
        </Box>
      </VStack>
    </Flex>
  );
};

export default LandingPage;
