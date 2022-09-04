import * as React from "react";

// Importing Local Components
import Layout from "../components/Layout";
import BigScreen from "../components/BigScreen";

export default function Index() {
  return (
    <Layout title="AERONAVY" description="A Very Indie Showcase">
      <BigScreen />
      <div>Hello World!</div>
    </Layout>
  );
}
