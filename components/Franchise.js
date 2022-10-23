import * as React from "react";
import { Center, Button, Flex, Box } from "@chakra-ui/react";

// Importing Dummy Data
import showData from "../api/data.json";

// Importing Local Components
import PostCard from "../components/PostCard";

export default function Franchise() {
  const data = showData.franchise;
  return (
    <Box padding="4">
      <PostCard data={data} />
    </Box>
  );
}
