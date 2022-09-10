import * as React from "react";
import { Center, Button, Flex, Box } from "@chakra-ui/react";

// Importing Dummy Data
import showData from "../api/data.json";

export default function Franchise() {
  const data = showData.franchise;
  return (
    <Flex gap={10} p={10} alignItems="center" justifyContent="center">
      {data.map((i) => (
        <Box key={i.id}>
          <Center backgroundImage={i.image} w="569px" h="332px">
            <Button>Explore Items</Button>
          </Center>
        </Box>
      ))}
    </Flex>
  );
}
