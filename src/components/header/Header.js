import { DeleteIcon, QuestionOutlineIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Link, Text, VStack } from '@chakra-ui/layout';
import {
  Image,
  Button,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import logo from '../../assets/media/Images/logo.png';
const Header = () => {
  const history = useHistory();
  const data = useSelector(state => state.createCampaignReducer.campaignData);

  const { user } = useSelector(state => state.Auth);

  const location = useLocation();

  const logoutHandler = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <Flex
      px="4"
      w="full"
      h="10vh"
      boxShadow="0px 0px 30px 0px #00000026"
      // boxShadow=''
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex alignItems="center">
        <Heading pl="4" as="h5" size="sm">
          Dashboard
        </Heading>
      </Flex>
      <Flex alignItems="center">
        <Menu>
          <MenuButton>
            <Avatar
              src={user?.profileImage}
              name={user?.username}
              h="9"
              w="9"
            />
          </MenuButton>
          <MenuList w="80" p="0" zIndex="9">
            <MenuItem minH="48px" p="3">
              <Avatar
                src={user?.profileImage}
                name={user?.username}
                mr="12px"
              />
              <VStack alignItems="start" ml="5" justifyContent="center">
                <Heading
                  textTransform={'capitalize'}
                  as="h6"
                  size="xs"
                  lineHeight="none"
                >
                  {user?.username}
                </Heading>
                <Text lineHeight="none" fontWeight="black" fontSize="xs">
                  {user?.email}
                </Text>
                <Flex alignItems="center">
                  <Link
                    lineHeight="none"
                    fontSize="xs"
                    color="royalblue"
                    onClick={() => history.push('/profile')}
                  >
                    My Profile
                  </Link>
                </Flex>
              </VStack>
            </MenuItem>
            <hr />
            <Flex justifyContent="space-between" p="2">
              <Flex w="24" alignItems="flex-end" justifyContent="flex-end">
                <Button
                  colorScheme="red"
                  variant="ghost"
                  fontSize="xs"
                  fontWeight="bold"
                  onClick={() => logoutHandler()}
                >
                  SIGN OUT
                </Button>
              </Flex>
            </Flex>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Header;
