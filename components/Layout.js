import * as React from "react";
import { NextSeo } from "next-seo";
import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";

// Importing Local Components
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children, title, description, showBar }) => (
  <Box w="100%" h="0">
    <NextSeo title={title} description={description} />
    <Nav />
    {/* Every components will be rendered inside this scope */}
    {children}
    <Footer />
  </Box>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
