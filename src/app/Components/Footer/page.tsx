"use client";
import {
  Button,
  Heading,
  Text,
  Image,
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box bgColor="black.100">
      <Container maxW="1300px" mx="auto">
        <Grid color="white" py={"64px"} templateColumns={{ base: "repeat(3, 1fr)",md: "repeat(3, 1fr)", lg: "repeat(7, 1fr)" }}>
          <GridItem colSpan={{ base: 1, md: 1 ,lg:2}}>
            <Box width={"140px"} height={"28px"}>
              <Image src="/images/Logo2.svg" alt="Logo" />
            </Box>

            <Box fontSize={"12px"} pb={"40px"}>
              <Text pt="28px" pb={"32px"}>
                &copy; COPYRIGHT FINSWEET 2023
              </Text>
              <Text pb={"16px"}>(480) 555-0103</Text>
              <Text pb={"16px"}>4517 WASHINGTON AVE.</Text>
              <Text>FINSWEET@EXAMPLE.COM</Text>
            </Box>
          </GridItem>

          <GridItem fontSize={"12px"} colSpan={{ base: 1, md: 1,lg:1 }} pb={"40px"} pl={"20px"}>
            <Text fontSize={"16px"} pb={"20px"}>
              Quicklinks
            </Text>
            <Text pb={"24px"}>ABOUT US</Text>
            <Text pb={"24px"}>SERMONS</Text>
            <Text pb={"24px"}>EVENTS</Text>
            <Text>BLOG </Text>
          </GridItem>

          <GridItem colSpan={{ base: 1, md: 2 ,lg:1}} pb={"40px"}>
            <Text fontSize={"16px"} pb={"20px"}>
              Connect
            </Text>

            <Flex gap={"20px"}>
              <Image src="/images/fb.svg" alt="fb" />
              <Image src="/images/lnd.svg" alt="lnd" />
              <Image src="/images/twitter.svg" alt="twitter" />
            </Flex>
          </GridItem>

          <GridItem colSpan={{ base: 3, md: 3, lg:3 }}>
            <Heading as="h3" fontSize={"32px"} pb={"32px"} maxW={"600px"}>
              SUBSCRIBE TO GET LATEST UPDATES AND NEWS
            </Heading>

            <Flex>
              <Box bg={"black.100"} width={"100%"}> 
                <Flex align="center" maxW="md" border="1px solid gray" borderRadius="12px">
                <Input
                  type="email"
                  placeholder="Yourmail@gmail.com"
                  bg="transparent"
                  borderRadius="12px"  
                  border="none" 
                  fontSize={"16px"}
                  _placeholder={{ color: "gray.200" }} 
                  height={"64px"}
                />
                  <Button
                  bg={"primary.100"}
                  fontSize={"16px"}
                  p={"32px 64px"}
                  borderRadius="12px"
                  >
                  Subscribe
                  </Button>
                </Flex>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
