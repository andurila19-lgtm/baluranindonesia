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

  // Common UI
  'common.book_wa': { id: 'Booking via WhatsApp', en: 'Book via WhatsApp' },
  'common.see_detail': { id: 'Lihat Detail', en: 'View Details' },
  'common.per_jeep': { id: '/ Jeep', en: '/ Jeep' },
  'common.request_color': { id: 'Request Warna Ini', en: 'Request This Color' },
  'common.chat_wa': { id: 'Chat WhatsApp:', en: 'WhatsApp Chat:' },
  'common.max_cap': { id: 'Maks. 5–6 orang', en: 'Max. 5–6 people' },
  'common.need_help': { id: 'Butuh Bantuan? Chat WhatsApp Admin', en: 'Need Help? Chat Admin on WhatsApp' },
  'common.fast_response': { id: 'Respon Cepat 24 Jam', en: 'Fast 24/7 Response' },
  'common.view_all_packages': { id: 'Lihat Semua Paket', en: 'View All Packages' },
  'common.view_all_dest': { id: 'Lihat Semua Destinasi', en: 'View All Destinations' },

  // Hero Section
  'hero.tag': { id: 'OPERATOR RESMI JEEP SAFARI BALURAN', en: 'OFFICIAL BALURAN JEEP SAFARI OPERATOR' },
  'hero.title': { id: 'Jelajahi Taman Nasional Baluran dengan Jeep Safari', en: 'Explore Baluran National Park with Jeep Safari' },
  'hero.desc': { 
    id: 'Sensasi petualangan melintasi savana emas Africa van Java, mengamati satwa liar, dan pesona Pantai Bama bersama operator Jeep lokal berpengalaman.', 
    en: 'Experience the thrilling golden savanna of Africa van Java, spot wild animals, and enjoy pristine Bama Beach with seasoned local 4x4 Jeep operators.' 
  },
  'hero.book_now': { id: 'Booking Sekarang', en: 'Book Now' },
  'hero.view_packages': { id: 'Lihat Semua Paket', en: 'View All Packages' },

  // Route Picker Widget
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

  // Sections
  'section.packages_title': { id: 'Paket Jeep Safari Baluran', en: 'Baluran Jeep Safari Packages' },
  'section.packages_sub': { id: 'Pilih paket Jeep Baluran sesuai kebutuhan perjalanan Anda.', en: 'Choose your preferred Baluran Jeep tour package.' },
  'section.see_all_pkg': { id: 'Lihat Semua Paket', en: 'View All Packages' },
  'section.why_title': { id: 'Mengapa Memilih Baluran Indonesia?', en: 'Why Choose Baluran Indonesia?' },
  'section.why_desc': { id: 'Kami adalah operator Jeep Baluran yang fokus pada layanan perjalanan aman, nyaman, dan berkesan dengan harga jelas dan pelayanan profesional.', en: 'We are a dedicated Baluran Jeep operator focused on safe, comfortable, and memorable adventures with transparent pricing and professional service.' },
  'section.why.f1_title': { id: 'Harga Transparan', en: 'Transparent Pricing' },
  'section.why.f1_desc': { id: 'Semua harga paket ditampilkan terbuka tanpa biaya tersembunyi.', en: 'All package rates are clearly displayed with zero hidden fees.' },
  'section.why.f2_title': { id: 'Armada Milik Operator', en: 'Direct Operator Fleet' },
  'section.why.f2_desc': { id: 'Jeep terawat dan siap untuk perjalanan savana setiap hari.', en: 'Well-maintained 4x4 Jeeps ready for daily savanna adventures.' },
  'section.why.f3_title': { id: 'Penjemputan Banyuwangi', en: 'Banyuwangi Pickup' },
  'section.why.f3_desc': { id: 'Layanan penjemputan di area Banyuwangi Kota (Hotel/Stasiun/Bandara/Pelabuhan).', en: 'Convenient pickup across Banyuwangi City (Hotel/Station/Airport/Port).' },
  'section.why.f4_title': { id: 'Operator Berpengalaman', en: 'Seasoned Local Guides' },
  'section.why.f4_desc': { id: 'Fokus pada wisata Jeep Baluran dan sekitarnya dengan layanan terpercaya.', en: 'Dedicated Baluran safari specialists providing reliable local guidance.' },

  'section.dest_title': { id: 'Destinasi Lainnya', en: 'Other Destinations' },
  'section.dest_sub': { id: 'Selain Baluran, kami juga melayani perjalanan ke destinasi wisata populer di sekitar Banyuwangi.', en: 'Beyond Baluran, we also offer Jeep tours to popular attractions around Banyuwangi.' },
  'section.facilities_title': { id: 'Fasilitas dan Ketentuan', en: 'Facilities & Terms' },
  'section.fleet_title': { id: 'Galeri Armada', en: 'Our Jeep Fleet' },
  'section.fleet_sub': { id: 'Armada Jeep kami siap mengantar Anda menjelajahi keindahan Baluran.', en: 'Our customized 4x4 Jeep fleet is ready to take you across Baluran.' },
  'section.testi_title': { id: 'Apa Kata Mereka?', en: 'Traveler Testimonials' },
  'section.testi_sub': { id: 'Pengalaman seru bersama Baluran Indonesia.', en: 'Exciting safari experiences with Baluran Indonesia.' },
  'section.cta_title': { id: 'Siap Menjelajahi Baluran?', en: 'Ready to Explore Baluran?' },
  'section.cta_desc': { id: 'Booking sekarang melalui WhatsApp dan dapatkan pengalaman Jeep Safari yang tak terlupakan.', en: 'Book now via WhatsApp and enjoy an unforgettable safari adventure.' },

  // Package Page (/paket)
  'page.packages.title': { id: 'Paket Jeep Safari Baluran', en: 'Baluran Jeep Safari Packages' },
  'page.packages.subtitle': { id: 'Pilih titik keberangkatan yang paling sesuai dengan rencana liburan Anda di Banyuwangi & Situbondo.', en: 'Choose the best departure point tailored to your Banyuwangi & Situbondo travel itinerary.' },
  'page.packages.badge': { id: 'PILIHAN LENGKAP JEEP SAFARI', en: 'COMPLETE JEEP SAFARI SELECTION' },
  'page.packages.intro_title': { id: 'Semua Harga per Unit Jeep (Bukan per Orang)', en: 'All Rates Are per Jeep Unit (Not per Person)' },
  'page.packages.intro_desc': { id: 'Kapasitas 1 mobil Jeep dapat diisi hingga 5–6 orang penumpang. Biaya sudah termasuk bahan bakar dan driver lokal berpengalaman.', en: 'Each 4x4 Jeep fits up to 5–6 passengers. Rates include fuel and an experienced local driver guide.' },

  // Pricing Page (/harga)
  'page.pricing.title': { id: 'Daftar Harga & Ketentuan Sewa Jeep', en: 'Jeep Rental Rates & Terms' },
  'page.pricing.subtitle': { id: 'Semua tarif ditampilkan secara jujur dan transparan tanpa ada biaya tersembunyi di akhir perjalanan.', en: 'All prices are clear and transparent with zero hidden surprises at the end of your trip.' },
  'page.pricing.badge': { id: 'TARIF RESMI & TRANSPARAN', en: 'OFFICIAL & TRANSPARENT RATES' },

  // Guide Page (/panduan)
  'page.guide.title': { id: 'Panduan Wisata Baluran', en: 'Baluran Safari Travel Guide' },
  'page.guide.subtitle': { id: 'Semua informasi penting agar liburan petualangan Anda di Savana Bekol dan Pantai Bama berjalan lancar dan berkesan.', en: 'Essential visitor tips so your adventure in Bekol Savanna and Bama Beach is smooth and unforgettable.' },
  'page.guide.badge': { id: 'TIPS & INFORMASI PENTING', en: 'ESSENTIAL TIPS & VISITOR INFO' },

  // About Page (/tentang-kami)
  'page.about.title': { id: 'Tentang Baluran Indonesia', en: 'About Baluran Indonesia' },
  'page.about.subtitle': { id: 'Operator spesialis Jeep Safari lokal yang berkomitmen menghadirkan pengalaman petualangan savana terindah, aman, dan tak terlupakan.', en: 'Dedicated local 4x4 Safari operator committed to providing the safest and most memorable savanna adventure.' },
  'page.about.badge': { id: 'TENTANG OPERATOR RESMI', en: 'OFFICIAL LOCAL OPERATOR' },

  // Contact Page (/kontak)
  'page.contact.title': { id: 'Hubungi Kami', en: 'Contact Us' },
  'page.contact.subtitle': { id: 'Konsultasikan rencana liburan dan reservasi Jeep Safari Baluran dengan fast response.', en: 'Consult your itinerary and book your Baluran Jeep Safari with instant friendly assistance.' },
  'page.contact.badge': { id: 'FAST RESPONSE 24/7', en: '24/7 FAST RESPONSE' },
  'page.contact.form_title': { id: 'Format Pesan Cepat WhatsApp', en: 'Quick WhatsApp Booking Form' },
  'page.contact.form_subtitle': { id: 'Pesan langsung ke WhatsApp kami tanpa ribet. Data akan diformat otomatis.', en: 'Send directly to our WhatsApp. Your booking details will be formatted automatically.' },
  'page.contact.direct_title': { id: 'Kontak Langsung', en: 'Direct Contact Info' },

  // Destinations Page (/destinasi)
  'page.dest.title': { id: 'Destinasi Wisata Sekitar Banyuwangi', en: 'Destinations Around Banyuwangi' },
  'page.dest.subtitle': { id: 'Eksplorasi keindahan alam Banyuwangi dan Bondowoso selain Taman Nasional Baluran.', en: 'Explore stunning landscapes around Banyuwangi & Bondowoso beyond Baluran National Park.' },
  'page.dest.badge': { id: 'DESTINASI POPULER', en: 'POPULAR DESTINATIONS' },

  // Footer
  'footer.desc': { id: 'Operator Jeep Safari Baluran terpercaya untuk petualangan savana Afrika van Java yang aman, nyaman, dan berkesan.', en: 'Trusted Baluran Jeep Safari operator for safe, comfortable, and memorable African savanna adventures in East Java.' },
  'footer.quick_links': { id: 'Menu Cepat', en: 'Quick Links' },
  'footer.destinations': { id: 'Destinasi Wisata', en: 'Tour Destinations' },
  'footer.contact_title': { id: 'Hubungi & Lokasi', en: 'Contact & Location' },
  'footer.rights': { id: 'Hak Cipta Dilindungi.', en: 'All Rights Reserved.' }
};
