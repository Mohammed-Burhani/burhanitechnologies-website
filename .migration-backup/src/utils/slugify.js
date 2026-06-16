export const slugify = (str) => {
  return str.trim().toLowerCase().replace(/\s+/g, "-");
};

export const unslugify = (str) => {
  return str.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
};
