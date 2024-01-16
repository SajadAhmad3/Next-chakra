"use client";
import { Box, Container, Flex, Heading, Text, Image } from "@chakra-ui/react";
import benData from "./Benefit.json";

function Benefit() {
  return (
    <Box bg={"grey.100"}>
      <Container maxW={"1300px"} mx={"auto"}>
        <Flex
          direction="column"
          textAlign={"center"}
          pt={"128px"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text>WATCH AND LISTEN</Text>
          <Heading pb={"64px"} fontSize={"48px"} maxW={"600px"}>
            THE BENEFITS OF JOINING OUR CHURCH
          </Heading>
        </Flex>

        <Flex gap={"20px"} flexWrap={{base:'wrap',md: 'wrap' , lg:'nowrap'}} justifyContent={"center"}>
          {benData.map((pic,index) => (
            <Box position="relative" pb={"128px"} key={index}> 
              <Image src={pic.img} alt="pic" />
              <Box
                position="absolute"
                bottom="40"
                left="0"
                color={"white"}
                pl={"32px"}
              >
                <Heading as="h5" fontSize={"24px"} pb={"16px"}>
                  {pic.title}
                </Heading>
                <Box>
                <Text opacity={"0.7"}>
                  {pic.text}
                </Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  );
}
export default Benefit;
