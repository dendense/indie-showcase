import * as React from "react";
import Link from "next/link";
import { Text } from "@chakra-ui/react";

//pass trough 'linkto' props to place any link

const Brand = ({ linkto }) => (
  <Link href={linkto}>
    <Text className="brand" fontSize="3xl">
      AERO<b>NAVY</b>
    </Text>
  </Link>
);

export default Brand;
