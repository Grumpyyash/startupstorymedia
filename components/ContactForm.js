import {
  FormControl,
  Input,
  Button,
  InputGroup,
  Flex,
  Box,
  useToast,
  Textarea,
  Heading,
  Text,
} from "@chakra-ui/core";
import { useState } from "react";
import { sendContactMail } from "./utils/mailApi";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const { register, handleSubmit, errors } = useForm();

  const toast = useToast();

  const formHandler = async () => {
    try {
      const res = await sendContactMail(name, email, company, number, message);
      if (res.status < 300) {
        toast({
          title: "Sent Successfully",
          status: "success",
          duration: 4000,
          isClosable: true,
        });

        setName("");
        setEmail("");
        setNumber("");
        setCompany("");
        setMessage("");
      }
    } catch (err) {
      toast({
        title: "An error occurred.",
        description: `${err.message}`,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex width="100%" direction="column" bg="black" py="4rem">
      <Text
        color="cyan.50"
        w={["80%", "80%", "60%"]}
        mx="auto"
        mt="2rem"
        mb="4rem"
        textAlign="center"
        fontSize="1.2rem"
      >
        If you wish to get in touch with our experts and give us a chance to
        help you in any way you can fill the following below
      </Text>
      <Box margin="auto" width={["80%", "80%", "80%", "60%"]} position="static">
        <form onSubmit={((e) => e.preventDefault(), handleSubmit(formHandler))}>
          <Flex
            direction={["column", "row"]}
            wrap="wrap"
            justify="space-around"
          >
            <FormControl w={["100%", "40%"]}>
              <InputGroup mt="5">
                <Input
                  variant="outline"
                  type="text"
                  placeholder="First name"
                  id="name"
                  border="1px solid"
                  borderRadius="none"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  w="100%"
                  name="name"
                  ref={register({ required: true })}
                />
              </InputGroup>
              {errors.name && (
                <p className="error">Please enter your full name</p>
              )}
            </FormControl>

            <FormControl w={["100%", "40%"]}>
              <InputGroup mt="5">
                <Input
                  variant="outline"
                  type="email"
                  placeholder="Email Address"
                  id="email"
                  border="1px solid"
                  borderRadius="none"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  w="100%"
                  name="email"
                  ref={register({ required: true })}
                />
              </InputGroup>
              {errors.email && <p className="error">Please enter your email</p>}
            </FormControl>
          </Flex>
          <Flex
            direction={["column", "row"]}
            wrap="wrap"
            justify="space-around"
          >
            <FormControl w={["100%", "40%"]}>
              <InputGroup mt="5">
                <Input
                  variant="outline"
                  type="text"
                  placeholder="Company Name"
                  id="cName"
                  border="1px solid"
                  borderRadius="none"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  name="company"
                  ref={register({ required: true })}
                />
              </InputGroup>
              {errors.company && (
                <p className="error">Please enter your company name</p>
              )}
            </FormControl>

            <FormControl w={["100%", "40%"]}>
              <InputGroup mt="5">
                <Input
                  type="number"
                  id="mobile"
                  min="8"
                  placeholder="Contact Number"
                  onChange={(e) => setNumber(e.target.value)}
                  value={number}
                  variant="outline"
                  w="100%"
                  border="1px solid"
                  borderRadius="none"
                  name="number"
                  ref={register({ required: true, minLength: 9 })}
                />
              </InputGroup>
              {errors.number && (
                <p className="error">Please enter your contact number</p>
              )}
              {errors.number && errors.number.type === "minLength" && (
                <p className="error">Please enter a valid number</p>
              )}
            </FormControl>
          </Flex>

          <Textarea
            placeholder="Message"
            w={["100%", "90%"]}
            my="2rem"
            mx="auto"
            value={message}
            border="1px solid"
            borderRadius="none"
            onChange={(e) => setMessage(e.target.value)}
          />
          <Box mb="6" mx="auto" w={["100%", "90%"]}>
            <Button
              type="submit"
              variantColor="gray"
              w="100%"
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
              Submit
            </Button>
          </Box>
        </form>
      </Box>

      <style jsx>{`
        .error {
          color: #e8505b;
          display: block;
        }
      `}</style>
    </Flex>
  );
};

export default ContactForm;
