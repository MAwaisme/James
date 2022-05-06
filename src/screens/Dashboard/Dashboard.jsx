import { VStack, Heading, Box } from '@chakra-ui/layout';
import React from 'react';
import ReUseInput from '../../components/Input/ReUseInput';
import ReUseInputText from '../../components/Input/ReUseInputText';

const Dashboard = () => {



    return (
        <>
            <VStack w={{ base: '100vw', md: '30%' }} border="1px" borderStyle={'dashed'} borderRadius={'lg'} p={'5'} spacing="4" mx="auto" mt="9">
                <Box w={'full'}>
                    <Heading pb="2" as="h5" size="sm">
                        Label
                    </Heading>
                    <ReUseInput />
                </Box>
                <Box w={'full'}>
                    <Heading pb="2" as="h5" size="sm">
                        Label
                    </Heading>
                    <ReUseInput />
                </Box>
                <Box w={'full'}>
                    <Heading pb="2" as="h5" size="sm">
                        Label
                    </Heading>
                    <ReUseInput magic={true} />
                </Box>
                <Box w={'full'}>
                    <Heading pb="2" as="h5" size="sm">
                        Label
                    </Heading>
                    <ReUseInput magic={true} />
                </Box>
                <Box w={'full'}>
                    <Heading pb="2" as="h5" size="sm">
                        Label
                    </Heading>
                    <ReUseInput magic={true} />
                </Box>
                <Box w={'full'}>
                    <Heading pb="2" as="h5" size="sm">
                        Label
                    </Heading>
                    <ReUseInput error={true} />
                    <Heading pt="2" as="h6" color={'red'} size="xs">
                        Please fix error
                    </Heading>
                </Box>
            </VStack>
        </>
    );
};

export default Dashboard;
