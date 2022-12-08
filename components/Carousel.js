import * as React from "react";
import { AspectRatio, Image } from "@chakra-ui/react";

const Carousel = () => (
  <AspectRatio maxHeight="500px" ratio={16 / 9}>
    <Image src="/drop-product.png" alt="Hero Image" objectFit="cover" />
  </AspectRatio>
);

export default Carousel;
