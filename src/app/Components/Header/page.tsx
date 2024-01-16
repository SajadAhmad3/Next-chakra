"use client";
import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  List,
  Link,
  ListItem,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
  IconButton,
} from "@chakra-ui/react";
import {
  AddIcon,
  CloseIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from "@chakra-ui/icons";

const Header = () => {
  return (
    <Box bgColor="black">
      <Container maxW="1300px" mx="auto">
        <Flex
          as="header"
          alignItems="center"
          justifyContent="space-between"
          py="1rem"
        >
          <Flex alignItems="center">
            <Box width="132px" height="26px">
              <Link>
                <Image src="/images/logo.svg" alt="Logo" />
              </Link>
            </Box>

            <Box display={{ base: "none", md: "none", lg: "flex" }}>
              <List
                display="flex"
                alignItems="center"
                listStyleType="none"
                color="white"
              >
                <Link href="/" _hover={{ textDecoration: "none" }}>
                  <ListItem pr="48px" pl="130px">
                    HOME
                  </ListItem>
                </Link>
                <Link href="/about" _hover={{ textDecoration: "none" }}>
                  <ListItem pr="48px">ABOUT</ListItem>
                </Link>
                <Link href="/" _hover={{ textDecoration: "none" }}>
                  <ListItem pr="48px">SERMON</ListItem>
                </Link>
                <Link href="/" _hover={{ textDecoration: "none" }}>
                  <ListItem pr="48px">BLOG</ListItem>
                </Link>
              </List>
            </Box>
          </Flex>

          <Flex>
            <Button
              py="20px"
              px="48px"
              fontSize={"16px"}
              borderRadius={"12px"}
              bg={"primary.100"}
              display={{ base: "none", md: "none", lg: "flex" }}
            >
              CONTACT US
            </Button>
          </Flex>

          <Box display={{ base: "flex", md: "flex", lg: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
                bgColor={"white"}
                cursor={"pointer"}
              />
              <MenuList>
                <MenuItem as="a" href="/">
                  HOME
                </MenuItem>
                <MenuItem as="a" href="/about">
                  ABOUT
                </MenuItem>
                <MenuItem as="a" href="#">
                  SERMON
                </MenuItem>
                <MenuItem as="a" href="#">
                  BLOG
                </MenuItem>
                <MenuItem as="a" href="#">
                  <Button
                    py="10px"
                    px="24px"
                    fontSize={"12px"}
                    borderRadius={"12px"}
                    bg={"primary.100"}
                  >
                    CONTACT US
                  </Button>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
