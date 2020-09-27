import { Box, Flex, Image, Heading, Text } from "@chakra-ui/core";

const MidSectionCard = ({ imgSrc, heading, children }) => {
  return (
    <>
      {/* class="feature-box" */}
      <Flex
        w={["90%", "80%", "45%"]}
        position="relative"
        direction="column"
        my="3rem"
        mx="auto"
      >
        <Box pos="relative" maxW="90%" maxH="80%" my="0" mx="auto">
          <Image objectFit="cover" src={imgSrc} alt="" w="100%" h="100%" />
        </Box>
        <Box p="1%">
          <Box textAlign="justify" maxW="90%" my="1rem" mx="auto">
            <Heading fontSize="calc(0.7rem + 0.5vw)" my="0.7rem">
              {heading}
            </Heading>
            <Text fontSize="calc(0.7rem + 0.5vw)" lineHeight="1.8">
              {children}
            </Text>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default MidSectionCard;
