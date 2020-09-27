import React from "react";
import MyCarousel from "../components/MyCarousel";
import Page from "../components/Page";
import { Flex, Heading, Box, Text } from "@chakra-ui/core";
import Link from "next/link";

const pressRelease = () => {
  return (
    <>
      <Page>
        <Flex minH="40vh" justify="center" pt="200px" bg="white">
          <Heading textAlign="center" fontSize="5xl" color="gray.800">
            As seen on
          </Heading>
        </Flex>

        <MyCarousel />
        <Flex minH="30vh" bg="#000" justify="center" align="center">
          <Box color="#fff">
            <Text fontSize="calc(1rem + 0.4vw)" my="1.2rem">
              Want to know more?
            </Text>
            <Heading>
              <Link href="/contact">
                <a>Get in touch</a>
              </Link>
            </Heading>
          </Box>
        </Flex>
      </Page>
    </>
  );
};

export default pressRelease;
