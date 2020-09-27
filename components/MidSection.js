import MidSectionCard from "./MidSectionCard";
import { Flex, Heading, Box } from "@chakra-ui/core";

const MidSection = () => {
  return (
    <>
      <Box
        color="black"
        mt="6%"
        minH="80vh"
        borderBottom="1px solid rgb(214,214,214)"
        id="services"
      >
        {/* class="mid-section" */}
        <Flex
          w={["98%", "98%", "80%"]}
          mx="auto"
          direction="column"
          justify="center"
          align="center"
          minH="60vh"
        >
          <Heading textAlign="center" mb="6%" mx="auto">
            What do we do
          </Heading>
          {/* class="features" */}
          <Flex
            direction={["column", "row"]}
            wrap="wrap"
            mb="2rem"
            justify="space-between"
          >
            <MidSectionCard
              heading="BUSINESS COACHING"
              imgSrc="./images/danielle-macinnes-IuLgi9PWETU-unsplash.jpg"
            >
              Our focus is helping early-stage entrepreneurs build a memorable
              brand and online business. We like to dismantle the conventions of
              traditional professional development and showcase culturally
              relevant content for those wanting to further develop their
              businesses or career
            </MidSectionCard>
            <MidSectionCard
              heading="CONSULTING"
              imgSrc="./images/crop-person.jpg"
            >
              Through business strategy and content creation, startup story is
              focused on driving growth for businesses. We’re flexible with how
              we work – we can take an entire project off your hands, create
              custom teams of freelancers or become an extension of your
              in-house team.
            </MidSectionCard>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default MidSection;
