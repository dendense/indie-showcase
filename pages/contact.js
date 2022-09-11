import * as React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

// Importing Local Component
import Layout from "../components/Layout";
import BigScreen from "../components/BigScreen";
import Divider from "../components/Divider";

export default function Contact() {
  return (
    <Layout title="CONTACT | AERONAVY" description="Contact Us!" sidebar="no">
      <BigScreen punchline="We focus on ergonomics and meeting you were you work." />
      <Flex gap={10} p={10} alignItems="center" justifyContent="center">
        <Image src="./Logo.jpg" maxW="400px" />
        <Box>
          <Text className="brand">
            <b>CONTACT US</b>
          </Text>
          <Text className="brand" fontSize="3xl">
            <b>Get in touch today!</b>
          </Text>
          <p className="brand">
            <b>Phone : +6289698526236</b>
            <br />
            <b>Email : ytaiki48@gmail.com</b>
          </p>
        </Box>
      </Flex>
      <Divider title="VISIT OUR STORE" base="#2B2B2B" color="white" />
      <Box align="center" justify="center" maxHeight="400px">
        <iframe
          src="https://maps.google.com/maps?q=Unikom&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          alt="Our Store"
          width="100%"
          height="400px"
        />
      </Box>
    </Layout>
  );
}
