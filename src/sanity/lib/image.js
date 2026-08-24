import createImageUrlBuilder from "@sanity/image-url";

const imageBuilder = createImageUrlBuilder({
  projectId: "yeqmfm1z",
  dataset: "production",
});

export const urlForImage = (source) => {
  // Handle cases where source is undefined, null, or not a valid Sanity image reference
  if (!source || !source.asset?._ref) {
    return null;
  }

  try {
    return imageBuilder?.image(source).auto("format").fit("max").url();
  } catch (error) {
    console.warn("Failed to generate image URL:", error);
    return null;
  }
};
