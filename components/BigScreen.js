import * as React from "react";
import { AspectRatio, Box, Text } from "@chakra-ui/react";

const BigScreen = ({ punchline }) => (
  <AspectRatio maxHeight="300px" ratio={16 / 9}>
    <Box backgroundImage="/drop-hero.jpg" objectFit="cover">
      <Text color="white" className="brand" fontSize="4xl">
        {punchline}
      </Text>
    </Box>
  </AspectRatio>
);

export default BigScreen;
