import { useState, useEffect } from "react";
import { Box, Flex, Image } from "@chakra-ui/core";
import styles from "./navbar.module.css";
import MenuItem from "./MenuItem";
import { MdMenu, MdClose } from "react-icons/md";
import Link from "next/link";

const Navbar = (props) => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;

      if (isTop !== scroll) {
        setScroll(isTop);
      }
    });
  }, [scroll, setScroll]);

  const burgerHandle = () => {
    setOpen(!open);
  };

  return (
    <header>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        px="1.5rem"
        py="0.4rem"
        background="transparent"
        color="gray.300"
        m="auto"
        w="100%"
        position="fixed"
        top="0"
        minH="10vh"
        zIndex="1000"
        className={!scroll && styles.navscroll}
      >
        <Link href="/">
          <a>
            <Image
              src="https://res.cloudinary.com/startupstory/image/upload/v1599649249/starter-new-04_z3ajuh.png"
              alt=""
              id="logo"
              width={!scroll ? ["128px", "172px"] : ["136px", "180px"]}
            />
          </a>
        </Link>
        <MenuItem
          toggleClass={open && styles.navOpen}
          clickToggle={burgerHandle}
        />
        <Box
          as={!open ? MdMenu : MdClose}
          display={{ sm: "block", md: "none" }}
          className={`${styles.burger} ${open && "toggle"}`}
          size="32px"
          color={!open ? "gray.800" : "gray.100"}
          zIndex="1000"
          onClick={burgerHandle}
        ></Box>
      </Flex>
    </header>
  );
};

export default Navbar;
