import * as React from "react";
import { Box, Flex, Button, HStack } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

// Local Components
import Brand from "../components/Brand";
import Link from "next/link";

const CTA = "SHOP";

export default function Nav() {
  return (
    <Flex>
      <Flex w="100%" align="center" px="6" py="3">
        <Box as="button">
          <Brand linkto="/" />
        </Box>
        <HStack spacing="20px" ml={20}>
          <Box as="button">
            Catalog
            <ChevronDownIcon w={5} h={5} />
          </Box>
          <Box as="button">
            <Link href="/about">About</Link>
          </Box>
          <Box as="button">
            <Link href="/contact">Contact</Link>
          </Box>
        </HStack>
      </Flex>
      <Button
        bgColor="#333333"
        colorScheme="yellow"
        borderRadius={0}
        width="10%"
        py="9"
        textColor="white"
      >
        {CTA}
      </Button>
    </Flex>
  );
}
