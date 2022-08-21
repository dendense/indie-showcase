import * as React from "react";
import { NextSeo } from "next-seo";
import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";

// Importing Local Components
import Nav from "./Nav";
import Sidebar from "./Sidebar";

const Layout = ({ children, title, description }) => (
  <Box w="100%" padding={3}>
    <NextSeo title={title} description={description} />
    <Nav />
    {/* Every components will be rendered inside this scope */}
    {children}
    <Sidebar />
  </Box>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
