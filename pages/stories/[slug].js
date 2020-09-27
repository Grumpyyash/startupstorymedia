import React, { useState, useEffect } from "react";
import { Image, Box, Flex, Heading, Divider, Text } from "@chakra-ui/core";
import Postbody from "../../components/blog/Postbody";
import markdownToHtml from "../../lib/MarkdowntoHtml";
import PostDate from "../../components/blog/PostDate";
import TopHeading from "../../components/blog/TopHeading";
import CommentDisqus from "../../components/blog/CommentDisqus";
import { NextSeo } from "next-seo";
import getDataFromAPI from "../../lib/api";
import GoUpward from "../../components/blog/GoUpward";
import SocialShare from "../../components/blog/SocialShare";
import Page from "../../components/Page";
import StoriesSidebar from "../../components/StoriesSidebar";

const Story = ({ post }) => {
  const SEO = {
    title: post.title,
    description: post.excerpt,

    openGraph: {
      title: post.title,
      description: post.excerpt,
    },
  };

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (!showScroll && window.pageYOffset > 100) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 100) {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScroll);
  }, [showScroll]);

  return (
    <>
      <NextSeo {...SEO} />
      <Page>
        <Flex minH="50vh" justify="center" pt="200px">
          <Heading textAlign="center" fontSize="5xl" color="gray.800">
            Stories
          </Heading>
        </Flex>
        <Divider />
        <Flex direction={["column", "column", "column", "row"]}>
          <StoriesSidebar
            width={["100%", "98%"]}
            maxWidth={["md", "md", "lg", "md"]}
          />
          <Box
            // variant="containers.page"
            maxWidth="960px"
            bg="#fff"
            px={["0.2rem", "2rem"]}
          >
            <Box>
              <Box>
                <Heading
                  textAlign="center"
                  fontSize="calc(1.6rem + .8vw)"
                  my="6"
                >
                  {post.title}
                </Heading>
              </Box>
              <Box textAlign="center">
                <Image
                  src={post.featuredImage.url}
                  boxSizing="border-box"
                  maxWidth="98%"
                  mx="auto"
                  my="2rem"
                />
              </Box>

              <Postbody content={post.content} />
              <Divider mt="8" />
            </Box>

            <CommentDisqus post={post} />
          </Box>
        </Flex>
      </Page>
      <GoUpward showScroll={showScroll} />
    </>
  );
};

export default Story;

export async function getServerSideProps({ params }) {
  const data = await getDataFromAPI(`stories?slug=${params.slug}`);
  const content = await markdownToHtml(data[0].content || " ");
  return {
    props: {
      post: {
        ...data[0],
        content,
      },
    },
  };
}
