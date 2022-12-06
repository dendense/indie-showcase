import * as React from "react";
import { SimpleGrid } from "@chakra-ui/react";

// Local Components
import Card from "../components/Card";

const PostCards = ({ data }) => (
  <SimpleGrid columns={{ base: 1, md: 3, lg: 5 }} spacing="10px">
    {data.map((post) => {
      //extract slug and frontmatter
      const { slug, frontmatter } = post;
      //extract frontmatter properties
      const { title, gender, category, price, bannerImage } = frontmatter;
      return (
        <Card
          slug={`/product/${slug}`}
          key={title}
          title={title}
          image={bannerImage}
          price={price}
          gender={gender}
          category={category}
        />
      );
    })}
  </SimpleGrid>
);

export default PostCards;
