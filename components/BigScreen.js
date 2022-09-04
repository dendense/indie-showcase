import * as React from "react";
import { Box, AspectRatio, Image } from "@chakra-ui/react";

const BigScreen = () => (
  <AspectRatio maxHeight="400px" ratio={16 / 9}>
    <Image
      src="https://cdn.pixabay.com/photo/2016/11/19/11/36/chairs-1838776_1280.jpg"
      alt="naruto"
      objectFit="cover"
    />
  </AspectRatio>
);

export default BigScreen;
