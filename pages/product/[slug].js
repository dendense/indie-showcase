import * as React from "react";
import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import { Box, Flex, Text, Heading, Image, Button } from "@chakra-ui/react";

// Importing Local Component
import Layout from "../../components/Layout";
import Divider from "../../components/Divider";
import Franchise from "../../components/Franchise";

export default function Posts({ frontmatter, content, posts }) {
  const { title, gender, category, price, bannerImage, tags } = frontmatter;
  return (
    <Layout title={title + " | AERONAVY"} description={title + " | Product"}>
      <Box padding="4" ml="10" mr="10" display="flex" justifyContent="center">
        <Image src={bannerImage} rounded="lg" w="400px" />
        <Box ml="10" mt="10">
          <Heading>{title}</Heading>
          <Text
            as="div"
            fontSize="xl"
            dangerouslySetInnerHTML={{ __html: md().render(content) }}
          />
          <Text mt="5">
            {gender} - {category}
          </Text>
          <h1>{price}</h1>
          <h1>{tags}</h1>
        </Box>
      </Box>
      <Divider title="VISIT OUR STORE" base="#2B2B2B" color="white" />
      <Box align="center" justify="center">
        <Franchise data={posts} />
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

  return {
    props: {
      frontmatter,
      content,
      posts,
    },
  };
}
