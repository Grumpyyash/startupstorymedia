import React, { useEffect, useState } from "react";
import {
  Flex,
  Heading,
  Box,
  ListItem,
  Text,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionIcon,
  AccordionPanel,
  Divider,
} from "@chakra-ui/core";
import getDataFromAPI from "../lib/api";
import Link from "next/link";

const StoriesSidebar = ({ width, maxWidth }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const data = await getDataFromAPI(`stories?status_in=Publish`);
        setPosts(data);
        setLoading(false);
        console.log(data);
      } catch (err) {
        console.log("Error");
      }
    };

    getAllPosts();
  }, [setPosts]);

  return (
    <>
      <Box
        width={width}
        maxW={maxWidth}
        m="0"
        mx={["auto", "auto", "auto", "8"]}
        justifyContent="center"
        height="100%"
        py="1rem"
        px={["3", "2rem"]}
      >
        <Flex flexWrap="wrap" mt="2rem" direction="column">
          <Accordion allowToggle defaultIndex={[0]}>
            <AccordionItem>
              <AccordionHeader>
                <Box flex="1" textAlign="left">
                  Stories
                </Box>
                <AccordionIcon />
              </AccordionHeader>
              <AccordionPanel pb={4}>
                {posts.map((post) => (
                  <>
                    <Box>
                      <ListItem display="flex" direction={["column"]} mb="1rem">
                        <div>
                          <Link
                            key={post.slug}
                            href="/stories/[id]"
                            as={`/stories/${post.slug}`}
                          >
                            <a>
                              <Heading
                                fontSize="calc(1.2rem + 0.4vw)"
                                fontWeight="500"
                              >
                                {post.title}
                              </Heading>
                            </a>
                          </Link>
                        </div>
                      </ListItem>
                    </Box>
                    <Divider />
                  </>
                ))}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
      </Box>
    </>
  );
};

export default StoriesSidebar;
