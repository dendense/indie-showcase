import * as React from "react";
import { Flex } from "@chakra-ui/react";

// Local Components
import Card from "../components/Card";

import showData from "../api/data.json";
const data = showData.cardpost;

const PostCards = () => (
  <Flex p={50} w="full" alignItems="center" justifyContent="center" gap="4">
    {data.map((i) => (
      <Card key={i.title} title={i.title} image={i.image} price={i.price} />
    ))}
  </Flex>
);

export default PostCards;
