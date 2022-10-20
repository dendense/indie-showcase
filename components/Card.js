import * as React from "react";
import { Box, Image, Button } from "@chakra-ui/react";

const Card = ({ title, price, image }) => (
  <Box
    maxW="sm"
    borderWidth="1px"
    borderRadius="lg"
    shadow="lg"
    width="300px"
    overflow="hidden"
  >
    <Image src={image} />
    <Box padding={4}>
      <Box>{title}</Box>
      <Box>{price}</Box>
      <Button colorScheme="teal" width="100%" mt={3} size="md">
        See Details
      </Button>
    </Box>
  </Box>
);

export default Card;
