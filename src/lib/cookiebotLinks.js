export function removeUnconfiguredDsrLink(root) {
  const link = root.getElementById("CybotCookiebotDialogDsrFormUrl");
  const href = link?.getAttribute("href");
  if (!href) return false;

  let decoded = href;
  try {
    decoded = decodeURIComponent(href);
  } catch {
    // A malformed third-party URL must not interrupt the consent dialog.
  }
  if (!decoded.includes("[#DSR_FORM_URL#]")) return false;

  // Keep the consent controls and any configured DSR destination unchanged.
  link.removeAttribute("href");
  return true;
}
