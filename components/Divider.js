import * as React from "react";
import { Flex, Text } from "@chakra-ui/react";

const Divider = ({ title, color }) => (
  <Flex align="center" justify="center" height="70px" bgColor={color}>
    <Text className="brand">
      <b>{title}</b>
    </Text>
  </Flex>
);

export default Divider;
