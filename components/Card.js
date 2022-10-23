import * as React from "react";
import {
  Box,
  Image,
  Button,
  Stack,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";

const Card = ({ title, price, image, gender }) => (
  <Box
    borderWidth="1px"
    w="full"
    borderRadius="lg"
    shadow="md"
    overflow="hidden"
  >
    <Image w="full" objectFit="cover" src={image} />
    <Box padding={4}>
      <Stack spacing="0">
        <Flex justifyContent="space-between">
          <Heading as="h2" fontWeight="bold" fontSize="16px">
            {title}
          </Heading>
          <Text as="span" ml="4">
            NEW!
          </Text>
        </Flex>

        <Flex justifyContent="space-between">
          <Text as="span">{gender}</Text>
          <Text as="span">{price}</Text>
        </Flex>
      </Stack>
      <Button colorScheme="teal" width="100%" mt={3} size="md">
        See Details
      </Button>
    </Box>
  </Box>
);

export default Card;
