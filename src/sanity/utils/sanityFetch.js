import { client } from "../lib/client";

export async function sanityFetch({
  query,
  params = {},
  revalidate = 60, // default revalidation time in seconds
  tags = [],
}) {
  const queryOptions = {};
  let maybeRevalidate = revalidate;

  return client.fetch(query, params, {
    ...queryOptions,
    next: {
      revalidate: maybeRevalidate,
      tags,
    },
  });
}
