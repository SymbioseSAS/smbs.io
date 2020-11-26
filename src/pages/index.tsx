import {
    Link as ChakraLink,
    Text,
    Button,
    VStack,
} from '@chakra-ui/react';

import Logo from "../../public/SYMBIOSE_2020_LOGO.svg";

import { Container } from '../components/Container'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Footer } from '../components/Footer'
import { Stack } from '@chakra-ui/react'
import React from 'react';
import { Berthold } from '../components/Berthold';

const Index = () => (
    <Container height="100vh">
        <Stack>
            <Logo/>
            <Berthold>symbiose ©</Berthold>
            <Text align="center">We're still under construction 🔨</Text>
        </Stack>

        <DarkModeSwitch />
        <Footer>
            <VStack>
                <ChakraLink
                    isExternal
                    href="mailto:hello@smbs.io"
                    flexGrow={3}
                    mt={2}
                >
                    <Button width="100%" variant="solid" colorScheme="smbs">
                        Send us a mail
                    </Button>
                </ChakraLink>
            </VStack>
        </Footer>
    </Container>
);


export default Index
  