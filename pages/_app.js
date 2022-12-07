// Import CakraUI Provider
import { ChakraProvider } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Script from "next/script";
// Custom SASS
import "../styles/index.scss";

function ShowcaseApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-E59DL31NXF"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-E59DL31NXF');
        `}
      </Script>
      <NextSeo
        title="AERONAVY"
        titleTemplate="AERONAVY"
        defaultTitle="AERONAVY"
        description="Proudly Indonesian Craftmanship Apparel."
        canonical="https://www.aero-navy.com/"
        openGraph={{
          url: "https://www.aero-navy.com/",
          title: "AERONAVY",
          description: "Proudly Indonesian Craftmanship Apparel.",
          images: [
            {
              url: ".https://i.ibb.co/qyFwf99/Logo.jpg",
              width: 800,
              height: 420,
              alt: "AERONAVY",
            },
          ],
        }}
        twitter={{
          handle: "@deny_desu",
          site: "@deny_desu",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default ShowcaseApp;
