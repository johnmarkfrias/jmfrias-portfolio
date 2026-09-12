// src/utils/slugify.js
// Ginagamit para gumawa ng SEO-friendly na URL slug
// halimbawa: slugify("Wellness PRO Incorporated") -> "wellness-pro-incorporated"

export function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
