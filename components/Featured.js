import * as React from "react";
import Link from "next/link";
import { Center, Button, Flex, Box } from "@chakra-ui/react";

// Importing Dummy Data
import showData from "../api/data.json";

export default function Featured() {
  const data = showData.featured;
  return (
    <Flex gap={10} p={10} alignItems="center" justifyContent="center">
      {data.map((i) => (
        <Box key={i.id}>
          <Center backgroundImage={i.image} w="366px" h="500px">
            <Button>{i.title}</Button>
          </Center>
        </Box>
      ))}
    </Flex>
  );
}
