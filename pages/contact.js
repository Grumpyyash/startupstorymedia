import Page from "../components/Page";
import { Heading, Flex } from "@chakra-ui/core";
import Head from "next/head";

const { default: ContactForm } = require("../components/ContactForm");

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Startup Story Media</title>
      </Head>
      <Page>
        <Flex minH="50vh" justify="center" pt="200px">
          <Heading textAlign="center" fontSize="5xl" color="gray.800">
            Contact Us
          </Heading>
        </Flex>
        <ContactForm />
      </Page>
    </>
  );
};

export default Contact;
