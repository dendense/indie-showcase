import * as React from "react";
import { Text, Flex, AspectRatio } from "@chakra-ui/react";

// Importing Local Components
import Layout from "../components/Layout";
import BigScreen from "../components/BigScreen";
import Divider from "../components/Divider";

export default function About() {
  return (
    <Layout
      title="ABOUT | AERONAVY"
      description="A Little Things About Us"
      sidebar="no"
    >
      <BigScreen />
      <Divider title="OUR STORE" />
      <AspectRatio maxHeight="400px" ratio={16 / 9}>
        <iframe
          src="https://maps.google.com/maps?q=Unikom&t=&z=17&ie=UTF8&iwloc=&output=embed"
          alt="Our Store"
        />
      </AspectRatio>
    </Layout>
  );
}
