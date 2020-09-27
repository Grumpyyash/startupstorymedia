import React from "react";
import Link from "next/link";
import { Text, Flex, Select, Button } from "@chakra-ui/core";
import styles from "./navbar.module.css";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  MenuOptionGroup,
  MenuItemOption,
} from "@chakra-ui/core";
const Links = [
  { link: "/", name: "HOME", key: "1" },
  { link: "/#about", name: "ABOUT", key: "1" },
  { link: "/#services", name: "SERVICES", key: "1" },
  { link: "/stories", name: "STORIES", key: "1" },
  { link: "/blog", name: "BLOG", key: "1" },
  { link: "/#", name: "SHOP", key: "1" },
];

const PageLinks = (props) => {
  return (
    <Flex className={`${styles.navLinks} ${props.toggleClass}`}>
      {Links.map(({ link, name, key }) => (
        <Text
          key={key}
          color="gray.800"
          fontSize="l"
          fontWeight="500"
          onClick={props.clickToggle}
        >
          <Link key={key} href={link}>
            <a className={styles.navItem}>{name}</a>
          </Link>
        </Text>
      ))}
    </Flex>
  );
};

export default PageLinks;
