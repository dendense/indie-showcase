import * as React from "react";
import { Text, Flex, AspectRatio, Box } from "@chakra-ui/react";

// Importing Local Components
import Layout from "../components/Layout";
import BigScreen from "../components/BigScreen";
import Divider from "../components/Divider";

export default function About() {
  return (
    <Layout
      title="ABOUT | AERONAVY"
      description="A Little Things About Us"
      sidebar="no"
    >
      <BigScreen punchline="Here's Little Things About Us!" />
      <Divider title="OUR STORE" />
      <Box align="center" justify="center" maxHeight="500px">
        <iframe
          src="https://maps.google.com/maps?q=Unikom&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          alt="Our Store"
          width="100%"
          height="500px"
        />
      </Box>
    </Layout>
  );
}
