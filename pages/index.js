import * as React from "react";
import { client } from "../lib/sanity";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";

// Importing Local Components
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import Featured from "../components/Featured";
import Franchise from "../components/Franchise";
import Divider from "../components/Divider";

export default function Index({ products }) {
  return (
    <Layout title="AERONAVY" description="A Very Indie Showcase" showBar="no">
      <Carousel />
      <Featured spacing="30px" height="500px" width="366px" />
      <Divider title="CHECK THIS OUT" base="#2B2B2B" color="white" />
      <Franchise />
      <SimpleGrid columns={[2, null, 3]} spacing="20px">
        {products.map((product) => {
          return (
            <Box bg="tomato" key={product._id}>
              <Text as="b">{product.title}</Text>
              <p>{product.blurb.en}</p>
            </Box>
          );
        })}
      </SimpleGrid>
    </Layout>
  );
}

export async function getStaticProps() {
  const products = await client.fetch(`*[_type == "product"]`);
  return {
    props: {
      products,
    },
  };
}
