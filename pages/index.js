import * as React from "react";
import { Box } from "@chakra-ui/react";

// Importing Local Components
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import Featured from "../components/Featured";
import Franchise from "../components/Franchise";
import Divider from "../components/Divider";

export default function Index() {
  return (
    <Layout title="AERONAVY" description="A Very Indie Showcase" showBar="no">
      <Carousel />
      <Divider title="WELCOME TO AERONAVY" base="#ffc30c" color="black" />
      <Featured spacing="30px" height="500px" width="366px" />
      <Divider title="CHECK THIS OUT" base="#2B2B2B" color="white" />
      <Franchise />
    </Layout>
  );
}
