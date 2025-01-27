import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: "3pab2ta3",
    dataset: "production",
    apiVersion: "2025-01-17",
    useCdn: false,
  });

const builder = imageUrlBuilder(client)

export function urlFor(source: unknown) {
    if (source && typeof source === "object") {
      return builder.image(source);
    }
    throw new Error("Invalid source type");
  }
  