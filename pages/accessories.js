import * as React from "react";
import imageUrlBuilder from "@sanity/image-url";

// Import Local Components
import { client } from "../lib/sanity";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";

const builder = imageUrlBuilder(client);
export default function Accessories() {
  return (
    <Layout
      title="ACCESSORIES | AERONAVY"
      description="A Very Indie Showcase"
      showBar="no"
    >
      <Carousel />
    </Layout>
  );
}
