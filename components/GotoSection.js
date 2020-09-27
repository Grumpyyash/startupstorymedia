import { Heading, Box, Flex } from "@chakra-ui/core";
import GotoTab from "./GotoTab";

const GotoSection = () => {
  return (
    <Flex
      id="stories"
      minH={["92vh", "100vh", "80vh", "70vh"]}
      mt="2.5rem"
      mb={["2rem", "8rem", "8rem", "4rem"]}
      direction="column"
      justify="center"
    >
      <Heading textAlign="center" mt="0" mb="8%" mx="auto">
        Stories
      </Heading>
      <Box w="80%" my="0" mb={["4rem", "2rem"]} mx="auto" minH="70vh">
        <GotoTab
          actionText="Read Now"
          linkColorHover="#0f070d"
          linkBgHover="#fff"
          modalContent="Read success stories, let's go to the blog?"
          actionLink="https://startupstorymedia.com/blog"
        >
          Success stories, articles related to Startups|Founders and
          Entrepreneurship.
        </GotoTab>
        <GotoTab
          actionText="Watch Now"
          contentAlign="left"
          bgColor="#fff"
          linkColor="#0f0f0f"
          linkBg="#fff"
          linkColorHover="#fff"
          linkBgHover="#0f070d"
          tabFloat="left"
          tabColor="#000"
          modalContent="Watch interviews of successful entrepreneurs. The stories of inspirational journeys, ideas and growth!"
          actionLink="https://youtube.com/"
        >
          StartupTV for journalism content about startup, tech and innovation in
          INDIA.
        </GotoTab>
        <GotoTab
          actionText="Hear Now"
          linkColorHover="#0f070d"
          linkBgHover="#fff"
          modalContent="Our Podcast is available on Spotify, Pocketcasts, Apple Podcasts, Google Podcasts and Castbox"
          actionLink="https://startupstorymedia.com/"
        >
          Podcasts about startups, business, tech news and much more.
        </GotoTab>
      </Box>
    </Flex>
  );
};

export default GotoSection;
