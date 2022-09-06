import * as React from "react";

// Importing Local Components
import Layout from "../components/Layout";
import BigScreen from "../components/BigScreen";

export default function About() {
  return (
    <Layout
      title="ABOUT | AERONAVY"
      description="A Little Things About Us"
      sidebar="no"
    >
      <BigScreen />
    </Layout>
  );
}
