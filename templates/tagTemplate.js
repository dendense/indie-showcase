import * as React from "react";
import { graphql } from "gatsby";

// Importing Local Components
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";

export default function tagTemplate({ data, pageContext }) {
  const { tags } = pageContext;
  return (
    <Layout
      title={tags + " | AERONAVY"}
      description="A Very Indie Showcase"
      showBar="no"
    >
      <Carousel />
      <div>
        <h1>Post with tags "{tags}"</h1>
        <PostsCard data={data.allMarkdownRemark.nodes} col={4} />
      </div>
    </Layout>
  );
}

export const tagsQuery = graphql`
  query TagPosts($tags: String!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { tags: { eq: $tags } } }
    ) {
      nodes {
        frontmatter {
          date(formatString: "DD MMMM, YYYY")
          title
          description
          path
          tags
          image
        }
      }
    }
  }
`;
