/** @jsx jsx */
import { jsx, Heading } from "theme-ui";

const TopHeading = ({ title, size }) => {
  return (
    <Heading
      variant="text.heading.topHeading"
      sx={{
        textAlign: ["center", "left"],
        px: "0.5rem",
        mb: "2rem",
        alignSelf: "center",
        fontSize: size,
      }}
    >
      {title}
    </Heading>
  );
};

export default TopHeading;
