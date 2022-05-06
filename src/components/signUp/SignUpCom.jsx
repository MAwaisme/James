import { Button } from '@chakra-ui/button';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/form-control';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
} from '@chakra-ui/input';
import { Box, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/layout';
import { Stack, Select, Image } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/toast';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import * as yup from 'yup';
import { registerUser } from '../../actions/auth/auth';
import countryArray from '../../utils/countryData/CountryData';

const SignUpCom = ({isProfile}) => {

  const [toggleVisibility, settoggleVisibility] = useState(false);

  const history = useHistory();
  const { loading } = useSelector(state => state.Auth)

  const dispatch = useDispatch()
  const toast = useToast()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      country: '',
      phone: '',
      company_name: '',
      designation: '',
      employer_strength: '',
      username: '',
      phoneCode: '',
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email('invalid email format')
        .required('Email is required'),
      password: yup.string().required('Password field is missing'),
      country: yup.string().required('Country field is missing'),
      phone: yup.string().required('Phone Number is required'),
      company_name: yup.string().required('company_name username is required'),
      designation: yup.string().required('Field is missing'),
      employer_strength: yup.string().required('Kindly enter number of employer_strengthe'),
      username: yup.string().required('username is required'),
      phoneCode: yup.string().required('Phone Code is required'),
    }),
    onSubmit: states => {
      const data = {
        ...states, employer_strength: states.employer_strength.toString()
      }
      dispatch(registerUser(data, toast, history))
    },
  });

  useEffect(() => {
    if (formik.values.country) {
      const index = countryArray.findIndex(
        data => data.name === formik.values.country
      );
      formik.values.phoneCode = countryArray[index].dial_code;
    }

    // eslint-disable-next-line
  }, [formik.values.country]);


  return (
    <>
      <Box
        borderRadius="lg"
        py="10"
        px="5"
        width={{ base: '90%', md: '70%', lg: '90%' }}
        boxShadow="2xl"
        m="auto"
      >
        <Heading
          d={{ base: 'flex', md: 'flex', lg: 'none' }}
          color="blue.500"
          fontSize="lg"
          justifyContent="center"
          mb="5"
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
          Sign Up to Start Exploring Vyzmo Ads Manager
        </Text>
        <Stack direction={{ base: 'column', md: 'row' }}>
          <FormControl
            isInvalid={
              formik.errors.email && formik.touched.email ? true : false
            }
            w="full"
          >
            <FormLabel fontSize="sm" fontWeight="semibold">
              Email
            </FormLabel>
            <Input type="email" {...formik.getFieldProps('email')} />
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </FormControl>
          <FormControl
            isInvalid={
              formik.errors.password && formik.touched.password ? true : false
            }
          >
            <FormLabel fontSize="sm" fontWeight="semibold">
              Password
            </FormLabel>
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
        </Stack>
        <Stack direction={{ base: 'column', md: 'row' }} my="4">
          <FormControl
            isInvalid={
              formik.errors.country && formik.touched.country ? true : false
            }
            w="full"
          >
            <FormLabel fontSize="sm" fontWeight="semibold">
              Country
            </FormLabel>
            <Select fontSize="small" {...formik.getFieldProps('country')}>
              <option value={''}>Select a Country</option>
              {countryArray.map((data, index) => (
                <option key={index} value={data.name}>
                  {data.name}
                </option>
              ))}
            </Select>
            {/* <Input type="text" {...formik.getFieldProps('country')} /> */}
            <FormErrorMessage>{formik.errors.country}</FormErrorMessage>
          </FormControl>
          <FormControl
            isInvalid={
              (formik.errors.phoneCode && formik.touched.phoneCode) ||
                (formik.errors.phone && formik.touched.phone)
                ? true
                : false
            }
            mt="10"
          >
            <FormLabel fontSize="sm" fontWeight="semibold">
              Phone Number
            </FormLabel>
            <InputGroup>
              <InputLeftAddon
                p="0"
                children={
                  <Select
                    {...formik.getFieldProps('phoneCode')}
                    fontSize="small"
                  >
                    <option value={''}>{+0}</option>
                    {countryArray.map((data, index) => (
                      <option key={index} value={data.dial_code}>
                        {data.dial_code}
                      </option>
                    ))}
                  </Select>
                }
              />
              <Input type="tel" {...formik.getFieldProps('phone')} />
            </InputGroup>
            <FormErrorMessage>
              {formik.errors.phone || formik.errors.phoneCode}
            </FormErrorMessage>
          </FormControl>
        </Stack>
        <Stack direction={{ base: 'column', md: 'row' }} mb="4">
          <FormControl
            isInvalid={
              formik.errors.company_name && formik.touched.company_name ? true : false
            }
            w="full"
          >
            <FormLabel fontSize="sm" fontWeight="semibold">
              Company Name
            </FormLabel>
            <Input type="text" {...formik.getFieldProps('company_name')} />
            <FormErrorMessage>{formik.errors.company_name}</FormErrorMessage>
          </FormControl>
          <FormControl
            isInvalid={
              formik.errors.designation && formik.touched.designation
                ? true
                : false
            }
            mt="10"
          >
            <FormLabel fontSize="sm" fontWeight="semibold">
              Designation
            </FormLabel>
            <InputGroup>
              <Input type="text" {...formik.getFieldProps('designation')} />
            </InputGroup>
            <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
          </FormControl>
        </Stack>
        <Stack direction={{ base: 'column', md: 'row' }}>
          <FormControl
            isInvalid={
              formik.errors.username && formik.touched.username ? true : false
            }
            w="full"
          >
            <FormLabel fontSize="sm" fontWeight="semibold">
              User Name
            </FormLabel>
            <Input type="text" {...formik.getFieldProps('username')} />
            <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
          </FormControl>
          <FormControl
            isInvalid={
              formik.errors.employer_strength && formik.touched.employer_strength ? true : false
            }
            mt="10"
          >
            <FormLabel fontSize="sm" fontWeight="semibold">
              Employee Strength
            </FormLabel>
            <InputGroup>
              <Input type="number" {...formik.getFieldProps('employer_strength')} />
            </InputGroup>
            <FormErrorMessage>{formik.errors.employer_strength}</FormErrorMessage>
          </FormControl>
        </Stack>
        <Button
          onClick={() => formik.handleSubmit()}
          type="submit"
          w={isProfile ? { sm: 'full', md: '10%' } : 'full'}
          my="6"
          colorScheme="blue"
          isLoading={loading}
        >
          {
            isProfile?
            'Update Profile'
            :
            'SignUp'
          }
        </Button>
        <hr />
        <HStack mt="5" justifyContent="center" d={isProfile ? 'none' : 'flex' } >
          <Text
            fontSize="small"
            textAlign="center"
            d="flex"
            justifyContent="center"
          >
            Already Have an Account?
          </Text>
          <Text
            cursor="pointer"
            color="royalblue"
            ml="1"
            fontWeight="bold"
            onClick={() => history.push('/signin')}
          >
            {' '}
            SignIn
          </Text>
        </HStack>
      </Box>

    </>
  );
};

export default SignUpCom;
