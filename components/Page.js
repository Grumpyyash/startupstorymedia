import Navbar from "./utils/Navbar";

// const { default: Head } = require("next/head");
const { Box } = require("@chakra-ui/core");

const Page = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box bg="#4aeceo">{children}</Box>
    </>
  );
};

export default Page;
