import * as React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

// Importing Local Component
import Layout from "../components/Layout";
import BigScreen from "../components/BigScreen";

export default function Contact() {
  return (
    <Layout title="CONTACT | AERONAVY" description="Contact Us!" sidebar="yes">
      <BigScreen />
      <Flex align="center" justify="center" height="70px">
        <Text className="brand">
          <b>CONTACT US</b>
        </Text>
      </Flex>
    </Layout>
  );
}
