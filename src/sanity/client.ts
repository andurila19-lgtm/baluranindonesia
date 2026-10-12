import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

export const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || '7ox4kuc2';
export const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = '2024-01-01';

export const isSanityConfigured = Boolean(projectId && projectId !== 'placeholder');

export const client = createClient({
  projectId: isSanityConfigured ? projectId : 'placeholder',
  dataset,
  apiVersion,
  useCdn: false,
});

const imageBuilder = createImageUrlBuilder(client);

export function urlForImage(source: any) {
  return imageBuilder.image(source);
}
