import * as React from "react";
import Link from "next/link";
import { Box, SimpleGrid, Text, Image, Button } from "@chakra-ui/react";

// Importing Local Component
import Layout from "../components/Layout";
import BigScreen from "../components/BigScreen";
import Divider from "../components/Divider";

export default function Contact() {
  return (
    <Layout title="CONTACT | AERONAVY" description="Contact Us!" sidebar="no">
      <BigScreen punchline="We focus on ergonomics and meeting you were you work." />
      <SimpleGrid padding="10" columns={{ base: 1, md: 2, lg: 4 }}>
        <Image src="./Logo.jpg" rounded="lg" w="400px" />
        <Box padding="4">
          <Text className="Brand">
            <b>CONTACT US</b>
          </Text>
          <Text className="Brand" fontSize="3xl">
            <b>Get in touch today!</b>
          </Text>
          <Text className="Brand">
            <b>Phone :</b>
            <br />
            <Button colorScheme="green">
              <a href="http://wa.me/085171060046" target="_blank">
                Whatsapp
              </a>
            </Button>
            <br />
            <b>Email :</b>
            <br />
            <Button bgColor="#ffc30c">
              <a href="mailto:aeronavyofficial@gmail.com" target="_blank">
                aeronavyofficial@gmail.com
              </a>
            </Button>
            <br />
            <b>Instagram :</b>
            <br />
            <Button bgColor="#E1306C" colorScheme="green">
              <a href="https://instagram.com/aero.navy" target="_blank">
                @aero.navy
              </a>
            </Button>
          </Text>
        </Box>
      </SimpleGrid>
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
