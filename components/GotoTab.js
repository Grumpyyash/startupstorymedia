import { Box, Flex, Text, Link, useDisclosure, Button } from "@chakra-ui/core";
import GotoModal from "./GotoModal";

const GotoTab = ({
  children,
  bgColor,
  tabColor,
  tabFloat,
  contentAlign,
  actionText,
  linkColor,
  linkBg,
  linkColorHover,
  modalContent,
  actionLink,
  linkBgHover,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        w={["100%", "90%"]}
        py={["1rem", "3rem", "5rem"]}
        px={["1rem", "3rem"]}
        my={["1rem", "1rem", "0"]}
        justify="center"
        bg={bgColor || "#0f070d"}
        color={tabColor || "#fff"}
        float={tabFloat || "right"}
      >
        <Text
          w="80%"
          m="auto"
          fontSize={["1.1rem", "1.1rem", "1.1rem", "1.2rem"]}
          alignContent="center"
          textAlign={contentAlign}
          lineHeight="1.7"
        >
          {children}
        </Text>
        <Button
          onClick={onOpen}
          color={linkColor || "#fff"}
          p={["1.5rem", "1.2rem", "0.8rem"]}
          fontWeight="normal"
          bg={linkBg || "#000"}
          border="1px solid"
          borderRadius="none"
          cursor="pointer"
          transition="0.4s ease-in-out"
          textAlign="center"
          alignSelf="center"
          _hover={{
            textDecoration: "none",
            color: linkColorHover,
            background: linkBgHover,
            transform: "scale(1.1)",
            border: "none",
          }}
        >
          {actionText}
        </Button>
      </Flex>

      <GotoModal
        isOpen={isOpen}
        onClose={onClose}
        gotoTitle={actionText}
        actionLink={actionLink}
      >
        {modalContent}{" "}
      </GotoModal>
    </>
  );
};

export default GotoTab;
