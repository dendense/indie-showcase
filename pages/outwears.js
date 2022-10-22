import * as React from "react";

// Import Local Components
import { client } from "../lib/sanity";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";

export default function Outwears({ products }) {
  return (
    <Layout
      title="OUTWEARS | AERONAVY"
      description="A Very Indie Showcase"
      showBar="no"
    >
      <Carousel />
    </Layout>
  );
}
