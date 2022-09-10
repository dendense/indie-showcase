import * as React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

// Importing Local Component
import Layout from "../components/Layout";
import BigScreen from "../components/.BigScreen";
import Divider from "../components/Divider";

export default function Contact() {
  return (
    <Layout title="CONTACT | AERONAVY" description="Contact Us!" sidebar="no">
      <BigScreen />
      <Divider title="CONTACT US" />
    </Layout>
  );
}
