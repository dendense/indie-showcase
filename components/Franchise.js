import * as React from "react";
import { Box } from "@chakra-ui/react";

// Importing Local Components
import PostCard from "../components/PostCard";

export default function Franchise({ data, category }) {
  console.log(data);
  return (
    <Box padding="4">
      <PostCard data={data} category={category} />
    </Box>
  );
}
