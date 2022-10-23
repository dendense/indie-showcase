import * as React from "react";
import Link from "next/link";
import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";

// Importing Local Component
import Layout from "../components/Layout";
import BigScreen from "../components/BigScreen";
import Divider from "../components/Divider";

export default function Contact() {
  return (
    <Layout title="CONTACT | AERONAVY" description="Contact Us!" sidebar="no">
      <BigScreen punchline="We focus on ergonomics and meeting you were you work." />
      <Box padding="4" display="flex">
        <Image src="./Logo.jpg" rounded="lg" w="400px" />
        <Box ml="4">
          <Text className="brand">
            <b>CONTACT US</b>
          </Text>
          <Text className="brand" fontSize="3xl">
            <b>Get in touch today!</b>
          </Text>
          <Text className="brand">
            <b>Phone :</b>
            <br />
            <Button colorScheme="green">
              <Link href="http://wa.me/085171060046" target="_blank">
                Whatsapp
              </Link>
            </Button>
            <br />
            <b>Email :</b>
            <br />
            <Button bgColor="#ffc30c">
              <Link href="mailto:aeronavyofficial@gmail.com">
                aeronavyofficial@gmail.com
              </Link>
            </Button>
            <br />
            <b>Instagram :</b>
            <br />
            <Button bgColor="#E1306C" colorScheme="green">
              <Link href="https://instagram.com/aero.navy" target="_blank">
                @aero.navy
              </Link>
            </Button>
          </Text>
        </Box>
      </Box>
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
