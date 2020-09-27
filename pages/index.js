import Page from "../components/Page";
import { Box, Divider, Text, Button, Heading } from "@chakra-ui/core";
import { useRouter } from "next/router";
import MidSection from "../components/MidSection";
import Newsletter from "../components/Newsletter";
import GotoSection from "../components/GotoSection";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Page>
        <Box
          minH="100vh"
          pt="200px"
          pb="50px"
          bgImage="url('./images/matt-le-SJSpo9hQf7s-unsplash.jpg')"
          bgPos="center"
          bgRepeat="no-repeat"
          minH="100vh"
          bgSize="cover"
          bgAttachment="fixed"
          w="100%"
        >
          {/* class="hero-box" */}
          <Box
            p="2.5%"
            bg="white"
            w={["90%", "90%", "60%", "32%"]}
            my={["2rem", "30%", "30%", "9rem"]}
            mx={["auto", "auto", "10rem"]}
            pb="3rem"
          >
            <Heading fontFamily="Montserrat" fontWeight="normal">
              Because it's never too late to be what you might have been.
            </Heading>
            <Divider
              maxW="10rem"
              mb="0.8rem"
              mt="1rem"
              mx="0"
              h="0.75rem"
              background="#0f070d"
              borderBottom="none"
              alignSelf="left"
              opacity="1"
            />
            <Text
              my="2rem"
              fontSize="1.1rem"
              lineHeight="1.7"
              fontFamily="Montserrat"
            >
              Startup story brings to you a wholesome package of services to
              help you with ‘getting started’!
            </Text>
            <Button
              onClick={() => router.push("/")}
              my={["0.2rem", "0.2", "0.2rem", "1rem"]}
              mx="0"
              py="1.6rem"
              px="2.2rem"
              border="1px solid"
              borderRadius="none"
              cursor="pointer"
              bg="#fff"
              fontSize="1.1rem"
              color="#000"
              _hover={{ color: "#fff", background: "#000" }}
              fontFamily="Montserrat"
              fontWeight="normal"
            >
              {" "}
              Take a look
            </Button>
          </Box>
        </Box>
        <MidSection />
        <Newsletter />
        <GotoSection />
      </Page>
    </>
  );
}
