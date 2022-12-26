import * as React from "react";

// Importing Local Component
import { SimpleGrid, Box } from "@chakra-ui/react";

export default function Info() {
  return (
    <SimpleGrid column={{ base: 1, md: 2, lg: 4 }}>
      <Box>
        <img src="../OnlineShop.png" alt="" />
      </Box>
    </SimpleGrid>
  );
}
