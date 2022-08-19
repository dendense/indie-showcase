import * as React from "react";
import { NextSeo } from "next-seo";
import { Container } from "@chakra-ui/react";
import PropTypes from "prop-types";

const Layout = ({ children, title, description }) => (
  <Container>
    <NextSeo title={title} description={description} />
    {children}
  </Container>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
