/** @jsx jsx */
import { Flex, jsx, Text, Box } from "theme-ui";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  EmailIcon,
  EmailShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

const SocialShare = ({ socialUrl, notRound }) => {
  return (
    <>
      <Box>
        <Text
          my="6"
          sx={{
            fontSize: "calc(1.2rem + 0.4vw)",
            width: ["80%", "60%", "50%"],
          }}
        >
          Share, it's cool
        </Text>
        {notRound ? (
          <Flex
            sx={{
              width: ["80%", "60%", "50%"],
              mt: "4",
              direction: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <TwitterShareButton
              url={`https://startupstorymedia.com/blog/${socialUrl}`}
            >
              <TwitterIcon size={36} />
            </TwitterShareButton>
            <FacebookShareButton
              url={`https://startupstorymedia.com/blog/${socialUrl}`}
            >
              <FacebookIcon size={36} />
            </FacebookShareButton>
            <LinkedinShareButton
              url={`https://startupstorymedia.com/blog/${socialUrl}`}
            >
              <LinkedinIcon size={36} />
            </LinkedinShareButton>
            <WhatsappShareButton
              url={`https://startupstorymedia.com/blog/${socialUrl}`}
            >
              <WhatsappIcon size={36} />
            </WhatsappShareButton>
            <EmailShareButton
              url={`https://startupstorymedia.com/blog/${socialUrl}`}
            >
              <EmailIcon size={36} />
            </EmailShareButton>
          </Flex>
        ) : (
          <Flex
            sx={{
              width: ["80%", "60%", "50%"],
              mt: "4",
              direction: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <TwitterShareButton
              url={`https://startupstorymedia.com/blog/${socialUrl}`}
            >
              <TwitterIcon size={36} round />
            </TwitterShareButton>
            <FacebookShareButton
              url={`https://startupstorymedia.com/blog/${socialUrl}`}
            >
              <FacebookIcon size={36} round />
            </FacebookShareButton>
            <LinkedinShareButton
              url={`https://startupstorymedia.com/blog/${socialUrl}`}
            >
              <LinkedinIcon size={36} round />
            </LinkedinShareButton>
            <WhatsappShareButton
              url={`https://startupstorymedia.com/blog/${socialUrl}`}
            >
              <WhatsappIcon size={36} round />
            </WhatsappShareButton>
            <EmailShareButton
              url={`https://startupstorymedia.com/blog/${socialUrl}`}
            >
              <EmailIcon size={36} round />
            </EmailShareButton>
          </Flex>
        )}
      </Box>
    </>
  );
};

export default SocialShare;
