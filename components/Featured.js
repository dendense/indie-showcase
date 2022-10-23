import * as React from "react";
import { Box } from "@chakra-ui/react";

// Importing Dummy Data
import showData from "../api/data.json";

// Importing Local Components
import PostCard from "../components/PostCard";

export default function Featured() {
  const data = showData.featured;
  return (
    <Box padding="4">
      <PostCard data={data} />
    </Box>
  );
}
