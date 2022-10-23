import * as React from "react";
import { Box, Center } from "@chakra-ui/react";

// Import Local Components
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import PostCards from "../components/PostCard";

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
      <Box padding="4">
        <PostCards data={data} />
      </Box>
    </Layout>
  );
}
