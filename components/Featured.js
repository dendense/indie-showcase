import * as React from "react";
import Link from "next/link";
import {
  Box,
  Center,
  Wrap,
  WrapItem,
  Container,
  Button,
} from "@chakra-ui/react";

// Importing Dummy Data
import showData from "../api/data.json";

export default function Featured() {
  const data = showData.featured;
  return (
    <Center pt={10} pb={10}>
      <Wrap spacing="30px">
        {data.map((i) => (
          <WrapItem key={i.id}>
            <Center backgroundImage={i.image} w="366px" h="500px">
              <Button>Explore Items</Button>
            </Center>
          </WrapItem>
        ))}
      </Wrap>
    </Center>
  );
}
