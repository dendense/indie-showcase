import * as React from "react";
import fs from "fs";
import matter from "gray-matter";

// Importing Local Components
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import Featured from "../components/Featured";
import Franchise from "../components/Franchise";
import Divider from "../components/Divider";
import Info from "../components/Info";

export default function Index({ posts }) {
  return (
    <Layout
      title="AERONAVY"
      description="Proudly Indonesian Craftmanship Apparel"
    >
      <Carousel />
      <Divider title="WELCOME TO AERONAVY" base="#ffc30c" color="black" />
      <Featured data={posts} spacing="30px" height="500px" width="366px" />
      <Info />
    </Layout>
  );
}

//Generating the Static Props for the Blog Page
export async function getStaticProps() {
  // get list of files from the posts folder
  const files = fs.readdirSync("content/posts");

  // get frontmatter & slug from each post
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`content/posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  // Return the pages static props
  return {
    props: {
      posts,
    },
  };
}
