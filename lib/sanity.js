import sanityClient from "@sanity/client";
export const client = sanityClient({
  projectId: "te1xbzrd",
  dataset: "production",
  useCdn: true,
});
