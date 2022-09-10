import * as React from "react";
import { Flex, Text } from "@chakra-ui/react";

const Divider = ({ title, base, color }) => (
  <Flex align="center" justify="center" height="70px" bgColor={base}>
    <Text className="brand" color={color}>
      <b>{title}</b>
    </Text>
  </Flex>
);

export default Divider;
