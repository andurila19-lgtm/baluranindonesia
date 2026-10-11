export interface TranslationSet {
  [key: string]: {
    id: string;
    en: string;
  };
}

export const translations: TranslationSet = {
  // Navigation
  'nav.home': { id: 'Beranda', en: 'Home' },
  'nav.packages': { id: 'Paket Jeep Baluran', en: 'Baluran Jeep Packages' },
  'nav.destinations': { id: 'Destinasi Lainnya', en: 'Other Destinations' },
  'nav.pricing': { id: 'Harga', en: 'Pricing' },
  'nav.about': { id: 'Tentang Kami', en: 'About Us' },
  'nav.guide': { id: 'Panduan', en: 'Visitor Guide' },
  'nav.contact': { id: 'Kontak', en: 'Contact' },

  // Hero Section
  'hero.tag': { 
    id: 'OPERATOR RESMI JEEP SAFARI BALURAN', 
    en: 'OFFICIAL BALURAN JEEP SAFARI OPERATOR' 
  },
  'hero.title': { 
    id: 'Jelajahi Taman Nasional Baluran dengan Jeep Safari', 
    en: 'Explore Baluran National Park with Jeep Safari' 
  },
  'hero.desc': { 
    id: 'Sensasi petualangan melintasi savana emas Africa van Java, mengamati satwa liar, dan pesona Pantai Bama bersama operator Jeep lokal berpengalaman.', 
    en: 'Experience the thrilling African-like golden savanna, spot wild animals, and enjoy pristine Bama Beach with seasoned local 4x4 Jeep operators.' 
  },
  'hero.book_now': { id: 'Booking Sekarang', en: 'Book Now' },
  'hero.view_packages': { id: 'Lihat Semua Paket', en: 'View All Packages' },

  // Hero Interactive Widget
  'widget.badge': { id: 'PILIH RUTE CEPAT', en: 'QUICK ROUTE PICKER' },
  'widget.title': { id: 'Eksplorasi Rute Favorit', en: 'Popular Safari Routes' },
  'widget.sub': { id: 'Klik rute untuk cek tarif & langsung pesan:', en: 'Click route to check rate & book instantly:' },
  'widget.price_label': { id: 'Tarif Sewa 1 Jeep:', en: 'Rate per 1 Jeep:' },
  'widget.cap': { id: 'Maks. 5–6 Orang', en: 'Max. 5–6 People' },
  'widget.duration_label': { id: 'Durasi:', en: 'Duration:' },
  'widget.pickup_label': { id: 'Penjemputan:', en: 'Pickup Point:' },
  'widget.book_btn': { id: 'Pesan Rute Ini via WhatsApp', en: 'Book This Route via WhatsApp' },
  'widget.trust1': { id: '✓ BBM & Driver Termasuk', en: '✓ Fuel & Driver Included' },
  'widget.trust2': { id: '✓ Tanpa Calo', en: '✓ Direct Operator (No Middlemen)' },
  'widget.trust3': { id: '✓ Driver Ramah', en: '✓ Friendly Local Guides' },

  // Trust Bar
  'trust.fleet_title': { id: 'Armada Jeep Milik Sendiri', en: 'Company-Owned Fleet' },
  'trust.fleet_sub': { id: 'Terawat, bersih, & siap safari', en: 'Well-maintained, clean & ready' },
  'trust.pickup_title': { id: 'Penjemputan Fleksibel', en: 'Flexible Pickup' },
  'trust.pickup_sub': { id: 'Bandara, Stasiun, & Hotel Banyuwangi', en: 'Airport, Station & Hotels in Banyuwangi' },
  'trust.price_title': { id: 'Harga Jujur & Terbuka', en: 'Honest & Transparent Pricing' },
  'trust.price_sub': { id: 'Tanpa ada biaya tersembunyi', en: 'Zero hidden fees or surprises' },
  'trust.driver_title': { id: 'Driver Pemandu & Foto', en: 'Driver Guide & Photographer' },
  'trust.driver_sub': { id: 'Paham spot foto estetik Baluran', en: 'Knows top scenic photography spots' },

  // Section Headers
  'section.packages_title': { id: 'Paket Jeep Safari Baluran', en: 'Baluran Jeep Safari Packages' },
  'section.packages_sub': { id: 'Pilih paket Jeep Baluran sesuai kebutuhan perjalanan Anda.', en: 'Choose your preferred Baluran Jeep tour package.' },
  'section.see_all_pkg': { id: 'Lihat Semua Paket', en: 'View All Packages' },
  'section.why_title': { id: 'Mengapa Memilih Baluran Indonesia?', en: 'Why Choose Baluran Indonesia?' },
  'section.dest_title': { id: 'Destinasi Lainnya', en: 'Other Destinations' },
  'section.dest_sub': { id: 'Selain Baluran, kami juga melayani perjalanan ke destinasi wisata populer di sekitar Banyuwangi.', en: 'Beyond Baluran, we also provide Jeep tours to top attractions around Banyuwangi.' },
  'section.facilities_title': { id: 'Fasilitas dan Ketentuan', en: 'Facilities & Terms' },
  'section.fleet_title': { id: 'Galeri Armada', en: 'Our Jeep Fleet' },
  'section.fleet_sub': { id: 'Armada Jeep kami siap mengantar Anda menjelajahi keindahan Baluran.', en: 'Our customized 4x4 Jeep fleet is ready to take you across Baluran.' },
  'section.testi_title': { id: 'Apa Kata Mereka?', en: 'Traveler Testimonials' },
  'section.testi_sub': { id: 'Pengalaman seru bersama Baluran Indonesia.', en: 'Exciting safari experiences with Baluran Indonesia.' },
  'section.cta_title': { id: 'Siap Menjelajahi Baluran?', en: 'Ready to Explore Baluran?' },
  'section.cta_desc': { id: 'Booking sekarang melalui WhatsApp dan dapatkan pengalaman Jeep Safari yang tak terlupakan.', en: 'Book now via WhatsApp and get an unforgettable safari adventure.' },

  // Common Buttons & Labels
  'common.book_wa': { id: 'Booking via WhatsApp', en: 'Book via WhatsApp' },
  'common.see_detail': { id: 'Lihat Detail', en: 'View Details' },
  'common.per_jeep': { id: '/ Jeep', en: '/ Jeep' },
  'common.request_color': { id: 'Request Warna Ini', en: 'Request This Color' },
  'common.chat_wa': { id: 'Chat WhatsApp:', en: 'WhatsApp Chat:' },
  'common.max_cap': { id: 'Maks. 5–6 orang', en: 'Max. 5–6 people' }
};
