import * as React from "react";
import { AspectRatio, Image } from "@chakra-ui/react";

const BigScreen = () => (
  <AspectRatio maxHeight="400px" ratio={16 / 9}>
    <Image src="/drop-hero.jpg" alt="Hero Image" objectFit="cover" />
  </AspectRatio>
);

export default BigScreen;
