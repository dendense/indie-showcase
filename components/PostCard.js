import * as React from "react";
import { SimpleGrid } from "@chakra-ui/react";

// Local Components
import Card from "../components/Card";

const PostCards = ({ data }) => (
  <SimpleGrid columns={{ base: 1, md: 3, lg: 5 }} spacing="10px">
    {data.map((i) => (
      <Card
        key={i.title}
        title={i.title}
        image={i.image}
        price={i.price}
        gender={i.gender}
      />
    ))}
  </SimpleGrid>
);

export default PostCards;
