import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
function Page1() {
  return (
    <ChakraProvider theme={theme}>
      <div class="row">
        <Navbar />
        <div class="col">
          <Sidebar />
          <Success />
        </div>
      </div>
    </ChakraProvider>
  );
}

function Success() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        This is the headline
      </Heading>
      <Text color={'gray.500'}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </Text>
    </Box>
  );
}
export default Page1;
