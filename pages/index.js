import * as React from "react";
import { Box } from "@chakra-ui/react";

// Importing Local Components
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import Featured from "../components/Featured";

export default function Index() {
  return (
    <Layout title="AERONAVY" description="A Very Indie Showcase" showBar="no">
      <Carousel />
      <Featured />
      <Box>VISIT OUR CAFE</Box>
    </Layout>
  );
}
