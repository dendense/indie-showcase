import * as React from "react";
import { NextSeo } from "next-seo";
import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";

const Layout = ({ children, title, description }) => (
  <Box w="100%" padding={3}>
    <NextSeo title={title} description={description} />
    {/* Every components will be rendered inside this scope */}
    {children}
  </Box>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
