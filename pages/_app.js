// Import CakraUI Provider
import { ChakraProvider } from "@chakra-ui/react";
// Custom SASS
import "../styles/index.scss";

function ProfileApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default ProfileApp;
