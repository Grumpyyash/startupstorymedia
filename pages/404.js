import { Flex, Heading, Text, Button } from "@chakra-ui/core";
import Page from "../components/Page";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();
  return (
    <Page>
      <Flex minH="83vh" justify="center" align="center" direction="column">
        <Heading my="3rem">comingSoon()</Heading>
        <Text
          my="2rem"
          letterSpacing="0.05em"
          fontSize="calc(1.2rem + 1.2vw)"
          wordBreak="break-word"
          textAlign="center"
        >
          <span style={{ color: "#8e49e9" }}>const</span>{" "}
          <span style={{ color: "#234fd4" }}>comingSoon </span> = () =&gt;{" "}
          <span style={{ color: "#234fd4" }}>workingDayAndNight</span>(
          <span style={{ color: "#ff7171" }}>true</span>)
        </Text>

        <Button mt="2rem" onClick={() => router.push("/")}>
          Go Back to Home
        </Button>
      </Flex>
    </Page>
  );
}
