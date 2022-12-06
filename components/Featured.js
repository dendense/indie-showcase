import * as React from "react";
import { Box } from "@chakra-ui/react";

// Importing Local Components
import PostCard from "../components/PostCard";

export default function Featured({ data, category }) {
  return (
    <Box padding="5">
      <PostCard data={data} category={category} />
    </Box>
  );
}
