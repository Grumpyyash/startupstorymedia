import { Flex, Text, Link, Image } from "@chakra-ui/core";

const CarouselElement = ({ title, link, image }) => {
  return (
    <>
      <Flex
        direction="column"
        justify="space-between"
        align="center"
        minH={["40vh", "35vh"]}
        px={["2rem", "4rem"]}
        py={["1rem", "2rem"]}
      >
        <Flex border="1px solid">
          <Link
            href={link}
            textAlign="center"
            mb={["1rem", "2rem"]}
            color="red.400"
            _hover={{ color: "red.600" }}
            fontSize="calc(1rem + 0.2vw)"
            target="_blank"
          >
            <Image
              textAlign="center"
              fontSize="calc(1.2rem + 0.4vw)"
              mt={["1rem", "2rem"]}
              src={image}
              width="256px"
              alt={title}
            />
            <Text fontStyle="Montserrat">Read More</Text>
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default CarouselElement;
