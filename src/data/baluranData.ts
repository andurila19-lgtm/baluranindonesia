import {
  getTourPackages,
  getOtherDestinations,
  getFleetGallery,
  getTestimonials,
  getFaq,
  getSiteConfig,
} from '../sanity/api';

export * from './baluranFallbackData';

// Data dinamis live dari Sanity (dengan fallback otomatis ke data lokal jika offline)
export const siteConfig = await getSiteConfig();
export const packagesData = await getTourPackages();
export const otherDestinationsData = await getOtherDestinations();
export const fleetGalleryData = await getFleetGallery();
export const testimonialsData = await getTestimonials();
export const faqData = await getFaq();
