import { deep, base } from "@theme-ui/presets";

const theme = {
  ...base,

  boxSizing: "border-box",
  containers: {
    card: {
      p: 2,
    },
    page: {
      width: ["100%", "98%"],
      maxWidth: "1280px",
      m: 0,
      mx: "auto",
      justifyContent: "center",
      height: "100%",
      py: "1rem",
      px: ["0.2rem", "2rem"],
    },
  },
  colors: {
    ...base.colors,
    modes: {
      dark: {
        ...deep.colors,
        background: "#292c3d",
        //   muted: "#060606",
        muted: "#222639",
        //   text: "#e0e0e0",
      },
    },
  },
  styles: {
    ...base.styles,
    a: {
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
  images: {
    featured: {
      boxSizing: "border-box",
      maxWidth: "98%",
      mx: "auto",
      my: "2rem",
    },
  },
  buttons: {
    ...base.buttons,
    primary: {
      color: "text",
      bg: "muted",
      outline: "none",
      "&:hover": {
        cursor: "pointer",
        bg: "primary",
        color: "muted",
      },
      "&:disabled": {
        bg: "background",
        border: "1px solid",
        borderColor: "muted",
        cursor: "default",
        color: "initial",
      },
    },
  },
  text: {
    heading: {
      topHeading: {
        textAlign: "center",
        fontSize: "calc(2rem + 2vw)",
        pt: "2rem",
        mb: "1.25rem",
        fontWeight: "700",
      },
    },
  },
};

export default theme;
