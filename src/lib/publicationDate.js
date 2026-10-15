// Editorial publication dates use the site's India time zone on both server and client.
export function formatPublicationDate(value, month = "long") {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    month,
    day: "2-digit",
    year: "numeric",
  }).format(date);
}
