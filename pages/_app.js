import "../styles/globals.css";
import { ThemeProvider, theme, CSSReset } from "@chakra-ui/core";
import Footer from "../components/utils/Footer";
import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";

import "@brainhubeu/react-carousel/lib/style.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
