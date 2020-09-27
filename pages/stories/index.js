// import { jsx, Text, Box, Flex } from "theme-ui";
// import Page from "../../components/Page";
// import { Heading } from "@chakra-ui/core";
// import Head from "next/head";
// import BlogPage from "../../components/blog/BlogPage";
// import Link from "next/link";
// import getDataFromAPI from "../../lib/api";
// import Story from "./[slug]";

// const Stories = ({ posts }) => {
//   return (
//     <>
//       <Head>
//         <title>Stories | Startup Story Media</title>
//       </Head>
//       <Page>
//         <Box sx={{ minHeight: "50vh", justifyContent: "center", pt: "200px" }}>
//           <Heading textAlign="center" fontSize="5xl" color="gray.800">
//             Stories
//           </Heading>

//           <BlogPage>
//             <Box variant="containers.page">
//               <Flex
//                 sx={{
//                   flexWrap: "wrap",
//                   justifyContent: "space-between",
//                   minHeight: "80vh",
//                   mt: "2rem",
//                   direction: ["column"],
//                 }}
//               >
//                 {posts.map((post) => (
//                   <div
//                     sx={{
//                       width: ["98%", "45%"],
//                       py: 3,
//                       display: "flex",
//                       m: ["auto", "0"],
//                     }}
//                   >
//                     <Box variant="containers.card">
//                       <Link
//                         key={post.slug}
//                         href="/stories/[id]"
//                         as={`/stories/${post.slug}`}
//                       >
//                         <a
//                           sx={{
//                             variant: "styles.a",
//                           }}
//                         >
//                           <Text
//                             mt="0.8rem"
//                             sx={{
//                               fontSize: "calc(1.4rem + 0.4vw)",
//                               fontWeight: "500",
//                             }}
//                           >
//                             {post.title}
//                           </Text>
//                         </a>
//                       </Link>
//                     </Box>
//                   </div>
//                 ))}
//               </Flex>
//             </Box>
//           </BlogPage>
//         </Box>
//       </Page>
//     </>
//   );
// };

// export default Stories;

//////////////////////////////////
import React, { useEffect, useState } from "react";
import { Flex, Heading, Box, ListItem, Text, Divider } from "@chakra-ui/core";

import getDataFromAPI from "../../lib/api";
import Page from "../../components/Page";
import StoriesSidebar from "../../components/StoriesSidebar";

const Stories = () => {
  return (
    <>
      <Page>
        <Flex minH="50vh" justify="center" pt="200px">
          <Heading textAlign="center" fontSize="5xl" color="gray.800">
            Stories
          </Heading>
        </Flex>
        <Divider />
        <Flex justify="center" align="center" minH="36vh">
          <StoriesSidebar
            width={["100%", "98%"]}
            maxWidth={["md", "md", "lg", "720px"]}
          />
        </Flex>
      </Page>
    </>
  );
};

export default Stories;
//////////////////////////////////

// export async function getServerSideProps({ query: { page = 1 } }) {
//   const start = +page === 1 ? 0 : (+page - 1) * 8;

//   const numOfPosts = await getDataFromAPI(`posts/count?status_in=Publish`);
//   const data = await getDataFromAPI(
//     `posts?status_in=Publish&_sort=updatedAt:desc&_limit=8&_start=${start}`
//   );
//   return {
//     props: { posts: data, page: +page, numOfPosts },
//   };
// }
