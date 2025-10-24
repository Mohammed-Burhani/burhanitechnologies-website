import { createClient } from "next-sanity";

const useCdn = false;

export const client = createClient({
  apiVersion: "2025-09-23",
  dataset: "production",
  projectId: "yeqmfm1z",
  useCdn,
});
