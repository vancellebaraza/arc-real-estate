import { useEffect } from "react";

export const SITE_URL = "https://arkrealestates.com";
export const SITE_NAME = "ARK Real Estate";
export const DEFAULT_IMAGE = `${SITE_URL}/Ark%20real%20estates1.png`;

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function setCanonical(url) {
  let element = document.head.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", url);
}

export default function SEO({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  type = "website",
  noindex = false,
  structuredData,
}) {
  useEffect(() => {
    const canonicalUrl = path ? new URL(path, SITE_URL).toString() : null;

    document.title = title;
    setMeta("name", "description", description);
    setMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    if (canonicalUrl) {
      setMeta("property", "og:url", canonicalUrl);
    } else {
      document.head.querySelector('meta[property="og:url"]')?.remove();
    }
    setMeta("property", "og:type", type);
    setMeta("property", "og:image", image);
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:image:alt", `${SITE_NAME} properties in Nairobi, Kenya`);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);
    if (canonicalUrl) {
      setCanonical(canonicalUrl);
    } else {
      document.head.querySelector('link[rel="canonical"]')?.remove();
    }

    const existingSchema = document.head.querySelector(
      'script[data-seo-schema="true"]'
    );
    existingSchema?.remove();

    if (structuredData) {
      const schema = document.createElement("script");
      schema.type = "application/ld+json";
      schema.dataset.seoSchema = "true";
      schema.textContent = JSON.stringify(structuredData);
      document.head.appendChild(schema);
    }
  }, [description, image, noindex, path, structuredData, title, type]);

  return null;
}
