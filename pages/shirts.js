import * as React from "react";
import { Box, Center } from "@chakra-ui/react";

// Import Local Components
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import PostCards from "../components/PostCard";
import Divider from "../components/Divider";

// Import Local Data
import showData from "../api/data.json";
const data = showData.cardpost;

export default function Shirts() {
  return (
    <Layout
      title="SHIRTS | AERONAVY"
      description="A Very Indie Showcase"
      showBar="no"
    >
      <Carousel />
      <Divider title="SHIRTS COLLECTIONS" base="#2B2B2B" color="white" />
      <Box padding="4">
        <PostCards data={data} />
      </Box>
    </Layout>
  );
}
