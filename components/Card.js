import * as React from "react";
import { Box, Image, Button } from "@chakra-ui/react";

const Card = ({ title, price, image }) => (
  <Box
    borderWidth="1px"
    w="full"
    borderRadius="lg"
    shadow="md"
    overflow="hidden"
  >
    <Image h="337px" w="full" objectFit="cover" src={image} />
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
