import * as React from "react";
import Link from "next/link";
import { Box, Container, SimpleGrid, Image, Button } from "@chakra-ui/react";

// Importing Dummy Data
import showData from "../api/data.json";

export default function Featured() {
  const data = showData.featured;
  return (
    <Container mt={10}>
      <SimpleGrid columns={[1, null, 2]} spacing={2}>
        {data.map((i) => (
          <Box key={i.id} width="500px" height="683px" overflow="hidden">
            <Image src={i.image} alt={i.title} />
            <Button zIndex="1">Explore Items</Button>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}
