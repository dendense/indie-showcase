// Import CakraUI Provider
import { ChakraProvider } from "@chakra-ui/react";
// Custom SASS
import "../styles/index.scss";

function ShowcaseApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default ShowcaseApp;
