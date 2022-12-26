import * as React from "react";
import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import {
  Box,
  Text,
  Heading,
  Image,
  Button,
  Badge,
  SimpleGrid,
  Link,
} from "@chakra-ui/react";

// Importing Local Component
import Layout from "../../components/Layout";
import Info from "../../components/Info";

export default function Posts({ frontmatter, content, posts }) {
  const {
    title,
    gender,
    category,
    shopee,
    tokopedia,
    price,
    bannerImage,
    tags,
  } = frontmatter;
  return (
    <Layout title={title + " | AERONAVY"} description={title + " | Product"}>
      <Box padding="8" display={{ md: "flex" }}>
        <Box align="center">
          <Image
            src={bannerImage}
            rounded="lg"
            maxWidth={{ md: "400px" }}
            maxHeight={{ md: "400px" }}
          />
        </Box>
        <Box padding="5">
          <Heading>{title}</Heading>
          <Text
            as="div"
            fontSize="xl"
            dangerouslySetInnerHTML={{ __html: md().render(content) }}
          />
          <Text mt="5">
            {gender} | <Link href={`/category/${category}`}>{category}</Link>
          </Text>
          <Text fontSize="3xl">{price}</Text>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 5 }} spacing="10px">
            <Button colorScheme="orange" size="md">
              <Link href={shopee} target="_blank">
                Shopee
              </Link>
            </Button>
            <Button colorScheme="green" size="md">
              <Link href={tokopedia} target="_blank" disabled="yes">
                Tokopedia
              </Link>
            </Button>
          </SimpleGrid>
          {tags.map((tag) => (
            <Badge
              key={tag}
              borderRadius="full"
              px="2"
              colorScheme="teal"
              mr="1"
            >
              {tag}
            </Badge>
          ))}
        </Box>
      </Box>
      <Info />
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
