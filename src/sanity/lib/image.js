import createImageUrlBuilder from "@sanity/image-url";

const imageBuilder = createImageUrlBuilder({
  projectId: "yeqmfm1z",
  dataset: "production",
});

export const urlForImage = (source) => {
  return imageBuilder?.image(source).auto("format").fit("max").url();
};
