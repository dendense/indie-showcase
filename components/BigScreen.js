import * as React from "react";
import { AspectRatio, Image, Flex } from "@chakra-ui/react";

const BigScreen = () => (
  <Flex align="center" justify="center" maxHeight="400px">
    <Image
      src="/drop-hero.jpg"
      alt="Hero Image"
      objectFit="cover"
      width="100%"
    />
  </Flex>
);

export default BigScreen;
