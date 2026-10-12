import { client, isSanityConfigured, urlForImage } from './client';
import {
  packagesData as fallbackPackages,
  otherDestinationsData as fallbackDestinations,
  fleetGalleryData as fallbackFleet,
  testimonialsData as fallbackTestimonials,
  faqData as fallbackFaq,
  siteConfig as fallbackSiteConfig,
  type TourPackage,
  type DestinationItem,
  type FleetItem,
  type TestimonialItem,
  type FaqItem,
} from '../data/baluranFallbackData';

export async function getTourPackages(): Promise<TourPackage[]> {
  if (!isSanityConfigured) return fallbackPackages;

  try {
    const data = await client.fetch(`*[_type == "tourPackage"] | order(order asc)`);
    if (!data || data.length === 0) return fallbackPackages;

    return data.map((item: any) => ({
      id: item.id?.current || item._id,
      title: item.title,
      badge: item.badge || '',
      price: item.price,
      priceFormatted: item.priceFormatted || `Rp${item.price.toLocaleString('id-ID')}`,
      unit: item.unit || '/ Jeep',
      duration: item.duration || '',
      capacity: item.capacity || 'Maks. 5–6 orang',
      pickup: item.pickup || '',
      description: item.description || '',
      image: item.image ? urlForImage(item.image).width(800).auto('format').url() : '/images/paket-banyuwangi.webp',
      highlights: item.highlights || [],
      included: item.included || [],
      notIncluded: item.notIncluded || [],
      scheduleSample: item.scheduleSample || [],
    }));
  } catch (error) {
    console.warn('[Sanity] Gagal mengambil data tourPackage, menggunakan fallback lokal:', error);
    return fallbackPackages;
  }
}

export async function getOtherDestinations(): Promise<DestinationItem[]> {
  if (!isSanityConfigured) return fallbackDestinations;

  try {
    const data = await client.fetch(`*[_type == "destination"] | order(order asc)`);
    if (!data || data.length === 0) return fallbackDestinations;

    return data.map((item: any) => ({
      id: item.id?.current || item._id,
      title: item.title,
      priceFormatted: item.priceFormatted || '',
      unit: item.unit || '/ Jeep',
      duration: item.duration || '',
      capacity: item.capacity || 'Maks. 5–6 orang',
      image: item.image ? urlForImage(item.image).width(800).auto('format').url() : '/images/kawah-wurung.webp',
      description: item.description || '',
      highlights: item.highlights || [],
    }));
  } catch (error) {
    console.warn('[Sanity] Gagal mengambil data destination, menggunakan fallback lokal:', error);
    return fallbackDestinations;
  }
}

export async function getFleetGallery(): Promise<FleetItem[]> {
  if (!isSanityConfigured) return fallbackFleet;

  try {
    const data = await client.fetch(`*[_type == "fleet"] | order(order asc)`);
    if (!data || data.length === 0) return fallbackFleet;

    return data.map((item: any) => ({
      id: item.id || item._id,
      name: item.name,
      colorName: item.colorName || '',
      tag: item.tag || '',
      image: item.image ? urlForImage(item.image).width(800).auto('format').url() : '/images/jeep-white.webp',
    }));
  } catch (error) {
    console.warn('[Sanity] Gagal mengambil data fleet, menggunakan fallback lokal:', error);
    return fallbackFleet;
  }
}

export async function getTestimonials(): Promise<TestimonialItem[]> {
  if (!isSanityConfigured) return fallbackTestimonials;

  try {
    const data = await client.fetch(`*[_type == "testimonial"]`);
    if (!data || data.length === 0) return fallbackTestimonials;

    return data.map((item: any) => ({
      name: item.name,
      city: item.city || '',
      quote: item.quote,
      rating: item.rating || 5,
      avatar: item.avatar ? urlForImage(item.avatar).width(200).auto('format').url() : '/images/avatar-rina.webp',
    }));
  } catch (error) {
    console.warn('[Sanity] Gagal mengambil data testimonial, menggunakan fallback lokal:', error);
    return fallbackTestimonials;
  }
}

export async function getFaq(): Promise<FaqItem[]> {
  if (!isSanityConfigured) return fallbackFaq;

  try {
    const data = await client.fetch(`*[_type == "faq"] | order(order asc)`);
    if (!data || data.length === 0) return fallbackFaq;

    return data.map((item: any) => ({
      question: item.question,
      answer: item.answer,
    }));
  } catch (error) {
    console.warn('[Sanity] Gagal mengambil data FAQ, menggunakan fallback lokal:', error);
    return fallbackFaq;
  }
}

export async function getSiteConfig() {
  if (!isSanityConfigured) return fallbackSiteConfig;

  try {
    const data = await client.fetch(`*[_type == "siteSettings"][0]`);
    if (!data) return fallbackSiteConfig;

    const whatsapp = data.whatsapp || fallbackSiteConfig.whatsappRaw;
    const cleanWhatsapp = whatsapp.replace(/[^0-9]/g, '').replace(/^0/, '62');

    return {
      ...fallbackSiteConfig,
      name: data.name || fallbackSiteConfig.name,
      fullName: data.fullName || fallbackSiteConfig.fullName,
      description: data.description || fallbackSiteConfig.description,
      phone: data.phone || fallbackSiteConfig.phone,
      whatsappRaw: cleanWhatsapp,
      whatsappFormatted: data.whatsapp || fallbackSiteConfig.whatsappFormatted,
      whatsappUrl: (message?: string) => {
        const base = `https://wa.me/${cleanWhatsapp}`;
        return message ? `${base}?text=${encodeURIComponent(message)}` : base;
      },
      meetingPoints: data.meetingPoints || fallbackSiteConfig.meetingPoints,
      socials: {
        instagram: data.instagram || fallbackSiteConfig.socials.instagram,
        facebook: data.facebook || fallbackSiteConfig.socials.facebook,
        youtube: data.youtube || fallbackSiteConfig.socials.youtube,
      },
    };
  } catch (error) {
    console.warn('[Sanity] Gagal mengambil siteSettings, menggunakan fallback lokal:', error);
    return fallbackSiteConfig;
  }
}
