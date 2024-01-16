import {
  Box,
  Card,
  CardBody,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import cardData from "./about.json";

function About() {
  return (
    <Container maxW={"1300px"} mx={"auto"} alignItems={"center"}>
      <Flex flexDirection={"column"} alignItems={"center"} pt={"50px"}>
        <Text pb={"16px"}>BENEFITS</Text>
        <Heading
          as={"h2"}
          fontSize={"48px"}
          maxW={"600px"}
          textAlign={"center"}
          pb={{base:'10px',md:'10px',lg:"64px"}}
        >
          THE BENEFITS OF JOINING OUR CHURCH
        </Heading>
      </Flex>
      {cardData.map((card, index) => (
        <Card key={index} shadow={"none"} pb={{base:'10px',md:'10px',lg:"96px"}}>
          <CardBody 
          display="flex" 
          alignItems="center" 
          gap={"20px"} 
          flexDirection={{ base: 'column', md: index % 2 === 0 ? 'row-reverse' : 'row' }}>
            <Box flex={1}>
              <Heading as="h4" fontSize={"32px"} pt={"24px"} pb={"10px"}>
                {card.title}
              </Heading>
            <Text opacity={"0.7"} fontSize="16px" maxW={"500px"}>{card.text}</Text>
            </Box>
            <Box flex={1}>
              <Image src={card.img} alt="pic" />
            </Box>
          </CardBody>
        </Card>
      ))}
    </Container>
  );
}
export default About;
