import * as React from "react";
import { Box } from "@chakra-ui/react";

// Importing Local Components
import Layout from "../components/Layout";
import BigScreen from "../components/BigScreen";

export default function Index() {
  return (
    <Layout title="AERONAVY" description="A Very Indie Showcase" showBar="no">
      <BigScreen />
      <Box>VISIT OUR CAFE</Box>
    </Layout>
  );
}
