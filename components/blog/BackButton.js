/** @jsx jsx */
import { jsx, IconButton, Image, Flex, useColorMode } from "theme-ui";
import { useRouter } from "next/router";
import { BsSun, BsMoon } from "react-icons/bs";

const BackButton = ({ url, children }) => {
  const [colorMode, setColorMode] = useColorMode();
  const router = useRouter();

  const handleBack = () => {
    router.push(url);
  };
  return (
    <Flex sx={{ alignContent: "center", justifyContent: "space-between" }}>
      <Image
        src="https://res.cloudinary.com/startupstory/image/upload/v1599649249/starter-new-04_z3ajuh.png"
        width="156px"
      />
      <IconButton
        variant="ghost"
        sx={{ alignSelf: "center" }}
        onClick={(e) => {
          setColorMode(colorMode === "default" ? "dark" : "default");
        }}
      >
        {colorMode === "default" ? (
          <BsMoon size="2rem" />
        ) : (
          <BsSun size="2rem" />
        )}
      </IconButton>
      <IconButton
        sx={{
          px: "1.6rem",
          py: "1.2rem",
          cursor: "pointer",
          mx: ".8rem",
          alignSelf: "center",
        }}
        onClick={handleBack}
      >
        <h2 sx={{ color: "text", fontSize: "1.2rem" }}>{children}</h2>
      </IconButton>
    </Flex>
  );
};

export default BackButton;
