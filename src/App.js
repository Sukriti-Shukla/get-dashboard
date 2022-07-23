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
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Page1 from './Components/Page1';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Page1 />
    </ChakraProvider>
  );
}

export default App;
