import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getTourPackages, getOtherDestinations } from '../sanity/api';

export async function GET(context: APIContext) {
  const [packages, destinations] = await Promise.all([
    getTourPackages(),
    getOtherDestinations(),
  ]);

  const items = [
    ...packages.map((pkg) => ({
      title: `Paket Jeep Safari: ${pkg.title}`,
      description: `${pkg.description} Harga mulai ${pkg.priceFormatted} dengan durasi ${pkg.duration}. Kapasitas: ${pkg.capacity}.`,
      link: `/paket/${pkg.id}/`,
      pubDate: new Date('2026-01-01'),
    })),
    ...destinations.map((dest) => ({
      title: `Destinasi Wisata Sekitar: ${dest.title}`,
      description: `${dest.description || ''} Estimasi tarif: ${dest.priceFormatted}. Durasi: ${dest.duration}.`,
      link: `/destinasi/${dest.id}/`,
      pubDate: new Date('2026-01-15'),
    })),
  ];

  return rss({
    title: 'Baluran Indonesia - Jeep Safari & Wisata Taman Nasional Baluran',
    description: 'Update paket safari Jeep 4x4, info destinasi Africa van Java, Savana Bekol, Pantai Bama, dan wisata Banyuwangi.',
    site: context.site || 'https://baluranindonesia.reaksy.com',
    items,
    customData: `<language>id-ID</language><copyright>Copyright 2026 Baluran Indonesia</copyright>`,
  });
}
