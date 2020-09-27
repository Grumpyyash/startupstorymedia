/** @jsx jsx */
import { jsx } from "theme-ui";
import { Box, Flex, List, ListItem, IconButton, Text } from "@chakra-ui/core";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";

const bottomMenu = [
  {
    name: "CONTACT",
    href: "/contact",
  },
  {
    name: "INVESTORS",
    href: "/#",
  },
  {
    name: "CAREERS",
    href: "/#",
  },

  {
    name: "STARTUPTV",
    href: "/#",
  },
  { href: "/events", name: "EVENTS" },
  { href: "/podcast", name: "PODCAST" },
  // {
  //   name: "Media Coverage",
  //   href: "/media-coverage",
  // },
];
const social = [
  {
    icon: FaFacebook,
    link: "https://facebook.com/StartupStoryMedia1",
  },
  {
    icon: FaTwitter,
    link: "https://twitter.com/startupstorym",
  },
  {
    icon: FaInstagram,
    link: "https://instagram.com/startupstorymedia",
  },
  {
    icon: FaYoutube,
    link: "https://www.youtube.com/channel/UCbStnUtzoseHBXdjOyNpBJg",
  },
  {
    icon: FaLinkedin,
    link: "https://linkedin.com/company/startupstorymedia",
  },
];

const Footer = () => {
  return (
    <>
      <Box
        bg="#0f070d"
        pt="1.2rem"
        color="cyan.50"
        pb="4"
        mt={["5rem", "7rem", "9rem", "2rem"]}
      >
        <Flex flexShrink="0" p="1.2rem" justify="space-around" wrap="wrap">
          <List display="flex" flexWrap="wrap" pl="0">
            {bottomMenu.map((item, key) => (
              <ListItem px="4" py="1" key={key} cursor="pointer">
                <Link href={item.href}>
                  <a
                    sx={{
                      color: "white",
                      fontSize: "0.9rem",
                      fontWeight: "500",
                    }}
                  >
                    {item.name}
                  </a>
                </Link>
              </ListItem>
            ))}
          </List>

          <List display="flex" wrap="wrap" pl="0">
            {social.map((item, key) => (
              <ListItem px="3" pt={["4", "0"]} key={key}>
                <a href={item.link} target="_blank">
                  <IconButton
                    icon={item.icon}
                    variant="ghost"
                    key={key}
                    border="none"
                    bg="#0f070d"
                    color="gray.50"
                    fontSize="1.6rem"
                    cursor="pointer"
                    _hover={{ transform: "scale(1.2)" }}
                  />
                </a>
              </ListItem>
            ))}
          </List>
        </Flex>
        <Text textAlign="center">
          &copy; Startup Story Media {new Date().getFullYear()}
        </Text>
      </Box>
    </>
  );
};

export default Footer;
