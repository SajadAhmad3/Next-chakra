
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Card,
  CardBody,
  Container,
  HStack,
  Circle,
} from "@chakra-ui/react";
import cardList from "./Church.json";

export function Church() {
  return (
    <Container maxW="1300px" mx="auto">
      <Box textAlign={"center"} pt={"80px"}>
        <Text>SUB-HEADLINE</Text>
        <Heading as={"h2"} fontSize={"48px"}>
          A CHRUCH THAT'S RELEVANT
        </Heading>
      </Box>
      <Flex
        gap={"24px"}
        pt={"64px"}
        flexWrap={{ base: "wrap", md: "wrap", lg: "nowrap" }}
        justifyContent={"center"}
      >
        {cardList.map((card, index) => (
          <Card
            key={index}
            bg={"orange.100"}
            borderRadius={"none"}
            borderBottom={"16px solid"}
            borderBottomColor="primary.100"
            mb={"128px"}
          >
            <CardBody p={"80px"}>
              <HStack>
                <Circle size="40px" bg="primary.100">
                  <Image src={card.img1} alt="icon" />
                </Circle>
              </HStack>

              <Heading as="h4" fontSize={"32px"} pt={"24px"}>
                {card.title}
              </Heading>
              <Text fontSize="16px">{card.text}</Text>
            </CardBody>
          </Card>
        ))}
      </Flex>
    </Container>
  );
}
export default Church;
