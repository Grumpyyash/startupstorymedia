import { useState } from "react";
import {
  Box,
  Heading,
  Flex,
  Image,
  Text,
  Input,
  Button,
  useToast,
} from "@chakra-ui/core";
import { sendSubscriber } from "./utils/mailApi";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await sendSubscriber(email);
      if (res.status < 300) {
        toast({
          title: "You're subscribed successfully",
          status: "success",
          duration: 3000,
        });

        setEmail("");
      }
    } catch (err) {
      toast({
        title: "An error occurred.",
        description: `${err.message}`,
        status: "error",
        duration: 3000,
      });
    }
  };
  return (
    <>
      <Box
        id="newsletter"
        color="#0f070d"
        mt="6%"
        minH="80vh"
        borderBottom="1px solid rgb(214,214,214)"
      >
        <Heading textAlign="center" mb="6%" mx="auto" mt="0">
          Not another newsletter
        </Heading>
        <Flex
          w={["85%", "70%"]}
          my="0"
          mx="auto"
          //   wrap="wrap"
          justify="center"
          align="center"
          direction={["column", "column", "column", "row"]}
        >
          <Box py="1%" px="2%">
            <Image
              src="./images/man-in-grey.jpg"
              alt=""
              objectFit="cover"
              w="100%"
            />
          </Box>
          <Box p="2%">
            <Text lineHeight="1.7" mb="1.8rem" fontSize="calc(1.1rem + 0.1vw)">
              You don't have to go search for resources anymore. We will send
              you the better ones, crafted to make you shine amongst others.
              <Heading fontSize="calc(1.6rem + 0.1vw)">
                Get tips, market insights, strategies, and much more directly to
                your mail.
              </Heading>
            </Text>
            <form onSubmit={handleSubmit}>
              <Input
                type="email"
                placeholder="Your email"
                name="email"
                my="3rem"
                borderRadius="none"
                p="0.8rem"
                value={email}
                w="100%"
                bg="#f4f6ff"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                type="submit"
                value="Subscribe"
                display="block"
                border="none"
                w="100%"
                fontSize="1.4rem"
                color="#fff"
                p="0.6rem"
                bg="#000"
                mb="2rem"
                cursor="pointer"
                borderRadius="none"
                _hover={{
                  color: "#000",
                  background: "#fff",
                  border: "1px solid",
                }}
              >
                I'm In
              </Button>
            </form>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Newsletter;
