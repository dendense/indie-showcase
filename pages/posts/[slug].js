import * as React from "react";
import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";

// Importing Local Component
import Layout from "../../components/Layout";
import BigScreen from "../../components/BigScreen";
import Divider from "../../components/Divider";

export default function Posts({ frontmatter, content }) {
  const { title, gender, category, price, bannerImage, tags } = frontmatter;
  return (
    <Layout title="CONTACT | AERONAVY" description="Contact Us!">
      <BigScreen punchline="We focus on ergonomics and meeting you were you work." />
      <Box padding="4" ml="10" mr="10" display="flex" justifyContent="center">
        <Image src={bannerImage} rounded="lg" w="400px" />
        <Box ml="4">
          <h1>{title}</h1>
          <h1>{gender}</h1>
          <h1>{category}</h1>
          <h1>{price}</h1>
          <h1>{tags}</h1>
          <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
        </Box>
      </Box>
      <Divider title="VISIT OUR STORE" base="#2B2B2B" color="white" />
      <Box align="center" justify="center" maxHeight="400px">
        {/* */}
      </Box>
    </Layout>
  );
}

// Generating the paths for each post
export async function getStaticPaths() {
  // Get list of all files from our posts directory
  const files = fs.readdirSync("content/posts");
  // Generate a path for each one
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  // return list of paths
  return {
    paths,
    fallback: false,
  };
}

// Generate the static props for the page
export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`content/posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}
