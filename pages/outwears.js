import * as React from "react";

// Import Local Components
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";

export default function Outwears() {
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
