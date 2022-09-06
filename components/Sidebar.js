import * as React from "react";
import { Box } from "@chakra-ui/react";

const Sidebar = ({ showBar }) => {
  if (showBar == "yes") {
    return <Box>This is Sidebar</Box>;
  } else {
    null;
  }
};

export default Sidebar;
