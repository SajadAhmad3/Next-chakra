import { Box, Button, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";

function Banner() {
  return (
    <Box
      bgImage="url('/images/Banner-girl.jpg')"
      bgRepeat="no-repeat"
      bgSize={"cover"}
      bgPosition={"center"}
      h={"663px"}
    >
      <Container maxW="1300px" mx="auto">
        <Box color={"white"} maxW={"700px"} pt={"128px"}>
          <Text fontWeight="700" fontSize={"16px"}>WELCOME TO OUR CRUCH</Text>
          <Heading as="h1" fontSize={{base:'44px',md:'54px',lg:"64px"}} >
            BECOME A PART OF OUR COMMUNITY
          </Heading>
          <Button 
          mt={"32px"} 
          mb={"64px"} 
          py={"24px"} 
          px={"64px"} 
          fontSize={"16px"}
          borderRadius={"12px"}
          bg={"primary.100"}
          >
            LEARN MORE
          </Button>
          <Flex>
            <Text as="span" pr={"12px"}>
              &mdash;
            </Text>
            <Text maxW={"300px"} fontSize={"16px"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </Text>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}

export default Banner;
