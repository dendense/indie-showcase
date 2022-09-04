import * as React from "react";
import { Box, SimpleGrid, Text, Flex, Button, HStack } from "@chakra-ui/react";

// Local Components
import Brand from "../components/Brand";

const CTA = "Order Now";

export default function Nav() {
  return (
    <Flex w="100%" px="6" py="3" align="center" justify="space-between">
      <Box as="button">
        <Brand linkto="/" />
      </Box>
      <HStack>
        <Box as="Button">Catalog</Box>
        <Box as="Button">About</Box>
        <Box as="Button">Contact</Box>
      </HStack>
      <HStack>
        <Button colorScheme="blue">{CTA}</Button>
      </HStack>
    </Flex>
  );
}
