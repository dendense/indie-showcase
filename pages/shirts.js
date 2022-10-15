import * as React from "react";
import imageUrlBuilder from "@sanity/image-url";
import { Box, SimpleGrid, Text, Image } from "@chakra-ui/react";

// Import Local Components
import { client } from "../lib/sanity";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";

const builder = imageUrlBuilder(client);
export default function Shirts({ products }) {
  return (
    <Layout
      title="SHIRTS | AERONAVY"
      description="A Very Indie Showcase"
      showBar="no"
    >
      <Carousel />
      <SimpleGrid columns={[2, null, 3]} spacing="20px">
        {products.map((product) => {
          const { defaultProductVariant = {} } = product;
          const { images } = defaultProductVariant;
          return (
            <Box bg="tomato" key={product._id}>
              <Box boxSize="sm">
                <Image
                  src={builder.image(images[0]).width(300)}
                  alt={product.title}
                />
              </Box>
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
