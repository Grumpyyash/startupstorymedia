/** @jsx jsx */
import { Box, jsx } from "theme-ui";
import { DiscussionEmbed } from "disqus-react";
import SocialShare from "./SocialShare";

const CommentDisqus = ({ post, notRound }) => {
  return (
    <Box sx={{ width: ["94%", "96%"], my: "2rem", mx: "auto" }}>
      <Box sx={{ mb: "8" }}>
        {notRound ? (
          <SocialShare socialUrl={post.slug} notRound />
        ) : (
          <SocialShare socialUrl={post.slug} />
        )}
      </Box>
      <DiscussionEmbed
        shortname="startup-story-media"
        config={{
          url: `https://startupstorymedia.com/blog/${post.slug}`,
          identifier: post.id,
          title: post.title,
        }}
      />
    </Box>
  );
};

export default CommentDisqus;
