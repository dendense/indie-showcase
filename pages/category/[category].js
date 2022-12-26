import * as React from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";

// Local Components
import Layout from "../../components/Layout";
import PostCard from "../../components/PostCard";

export default function Category({ post, category }) {
  return (
    <Layout title={category + " | Category"} description="Category">
      <SimpleGrid
        columns={{ base: 1, md: 3, lg: 5 }}
        spacing="10px"
      ></SimpleGrid>
    </Layout>
  );
}
