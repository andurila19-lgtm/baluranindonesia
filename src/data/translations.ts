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
  'widget.tab1': { id: 'Baluran (Start Kota)', en: 'Baluran (City Pickup)' },
  'widget.tab2': { id: 'Baluran (Start Gate)', en: 'Baluran (Main Gate)' },
  'widget.tab3': { id: 'Kawah Wurung', en: 'Kawah Wurung' },
  'widget.tab4': { id: 'Hutan De Djawatan', en: 'De Djawatan Forest' },
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

  // Packages Section & Cards
  'section.packages_title': { id: 'Paket Jeep Safari Baluran', en: 'Baluran Jeep Safari Packages' },
  'section.packages_sub': { id: 'Pilih paket Jeep Baluran sesuai kebutuhan perjalanan Anda.', en: 'Choose your preferred Baluran Jeep tour package.' },
  'section.see_all_pkg': { id: 'Lihat Semua Paket', en: 'View All Packages' },
  'pkg.bwx.title': { id: 'Rute Baluran (Start Banyuwangi Kota)', en: 'Baluran Route (Start Banyuwangi City)' },
  'pkg.bwx.badge': { id: 'Start Banyuwangi Kota', en: 'Start Banyuwangi City' },
  'pkg.bwx.duration': { id: '5 Jam', en: '5 Hours' },
  'pkg.bwx.capacity': { id: 'Maks. 5–6 orang', en: 'Max. 5–6 people' },
  'pkg.bwx.pickup': { id: 'Penjemputan area Banyuwangi Kota', en: 'Pickup in Banyuwangi City area' },
  'pkg.bwx.desc': { id: 'Cocok untuk Anda yang ingin perjalanan lebih praktis dengan layanan penjemputan di Bandara, Stasiun, Terminal, atau Pelabuhan.', en: 'Ideal for travelers seeking seamless pickup at Airport, Train Station, Ferry Port, or Hotel.' },
  
  'pkg.gate.title': { id: 'Rute Baluran (Start Pintu Masuk Baluran)', en: 'Baluran Route (Start Baluran Gate)' },
  'pkg.gate.badge': { id: 'Start Pintu Masuk Baluran', en: 'Start Baluran Main Gate' },
  'pkg.gate.duration': { id: '4 Jam', en: '4 Hours' },
  'pkg.gate.capacity': { id: 'Maks. 5–6 orang', en: 'Max. 5–6 people' },
  'pkg.gate.pickup': { id: 'Meeting point Pintu Masuk Baluran', en: 'Meeting point at Baluran National Park Gate' },
  'pkg.gate.desc': { id: 'Pilihan paket dengan durasi lebih singkat bagi Anda yang menuju titik keberangkatan secara mandiri.', en: 'Short duration budget-friendly package for guests driving directly to the park gate.' },

  // Why Us Section
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

  // Destinations Section & Cards
  'section.dest_title': { id: 'Destinasi Lainnya', en: 'Other Destinations' },
  'section.dest_sub': { id: 'Selain Baluran, kami juga melayani perjalanan ke destinasi wisata populer di sekitar Banyuwangi.', en: 'Beyond Baluran, we also offer Jeep tours to popular attractions around Banyuwangi.' },
  'dest.kw.title': { id: 'Rute Kawah Wurung', en: 'Kawah Wurung Highland Route' },
  'dest.kw.duration': { id: '6–7 Jam', en: '6–7 Hours' },
  'dest.kw.capacity': { id: 'Maks. 5–6 orang', en: 'Max. 5–6 people' },
  'dest.dj.title': { id: 'Rute Hutan De Djawatan', en: 'De Djawatan Forest Route' },
  'dest.dj.duration': { id: '5 Jam', en: '5 Hours' },
  'dest.dj.capacity': { id: 'Maks. 5–6 orang', en: 'Max. 5–6 people' },

  // Facilities & Terms (FASILITAS DAN KETENTUAN)
  'section.facilities_title': { id: 'Fasilitas dan Ketentuan', en: 'Facilities & Terms' },
  'section.facilities_sub': { id: 'Informasi penting sebelum Anda melakukan pemesanan.', en: 'Essential information before making your reservation.' },
  'section.facilities_link': { id: 'Lihat Detail Harga', en: 'View Pricing Details' },
  'facilities.included_title': { id: 'Sudah Termasuk', en: "What's Included" },
  'facilities.inc_1': { id: 'Mobil Jeep + Driver + BBM', en: '4x4 Jeep + Driver + Fuel' },
  'facilities.inc_2': { id: 'Penjemputan area Banyuwangi Kota (Bandara, Stasiun, Terminal, Pelabuhan)', en: 'Pickup in Banyuwangi City area (Airport, Station, Port, Hotel)' },
  'facilities.inc_3': { id: 'Sesuai rute yang dipilih', en: 'All destinations per selected route' },
  'facilities.excluded_title': { id: 'Tidak Termasuk', en: 'Not Included' },
  'facilities.exc_1': { id: 'Parkir', en: 'Parking fees' },
  'facilities.exc_2': { id: 'Tiket masuk wisata', en: 'National Park entrance tickets' },
  'facilities.exc_3': { id: 'Uang makan driver', en: 'Driver meal allowance' },
  'facilities.exc_4': { id: 'Tips (se-ikhlasnya)', en: 'Driver tips (optional)' },
  'facilities.exc_5': { id: 'Pemakaian di luar rute yang dipilih ada biaya tambahan', en: 'Additional surcharge for travel outside chosen route' },
  'facilities.terms_title': { id: 'Ketentuan Penting', en: 'Important Terms' },
  'facilities.terms_1': { id: 'Peak season surcharge 15–20% (Lebaran, Natal, Tahun Baru)', en: 'Peak season surcharge 15–20% (Eid, Christmas, New Year)' },
  'facilities.terms_2': { id: 'Request warna Jeep maksimal H-3', en: 'Jeep color request minimum D-3 before trip' },
  'facilities.terms_3': { id: 'Durasi dapat berubah mengikuti jadwal', en: 'Tour duration may adjust depending on schedule' },
  'facilities.terms_4': { id: 'Overtime Rp80.000/jam', en: 'Overtime Rp80,000/hour' },
  'facilities.terms_5': { id: 'Jumlah peserta sesuai kapasitas', en: 'Participant count must adhere to vehicle limit' },
  'facilities.capacity_title': { id: 'Kapasitas', en: 'Capacity' },
  'facilities.cap_1': { id: 'Maksimal 5–6 orang per Jeep', en: 'Maximum 5–6 passengers per Jeep' },

  // Fleet Gallery
  'section.fleet_title': { id: 'Galeri Armada', en: 'Our Jeep Fleet' },
  'section.fleet_sub': { id: 'Armada Jeep kami siap mengantar Anda menjelajahi keindahan Baluran.', en: 'Our customized 4x4 Jeep fleet is ready to take you across Baluran.' },
  'section.fleet_link': { id: 'Lihat Semua Foto', en: 'View All Photos' },

  // Testimonials
  'section.testi_title': { id: 'Apa Kata Mereka?', en: 'Traveler Testimonials' },
  'section.testi_sub': { id: 'Pengalaman seru bersama Baluran Indonesia.', en: 'Exciting safari experiences with Baluran Indonesia.' },
  'testi.quote1': { 
    id: 'Drivernya sangat ramah dan paham spot-spot terbaik untuk foto satwa di Savana Bekol. Anak-anak sangat senang melihat banteng dan rusa dari dekat. Jeepnya bersih dan tangguh!', 
    en: 'The driver was exceptionally friendly and knew all the top spots for wildlife photography at Bekol Savanna. Kids were thrilled to see buffaloes and deer up close. Clean, sturdy Jeep!' 
  },
  'testi.quote2': { 
    id: 'Penjemputan tepat waktu di stasiun Banyuwangi. Perjalanan lancar dan seru banget. Sunset di Savana Baluran beneran mirip di Afrika. Recommended buat yang mau liburan tanpa ribet!', 
    en: 'Punctual pickup right at Banyuwangi train station. Super smooth and scenic trip. Sunset at Bekol savanna truly felt like Serengeti Africa. Highly recommended!' 
  },
  'testi.quote3': { 
    id: 'Pelayanan sangat profesional dan responsif dari awal tanya-tanya di WhatsApp sampai selesai trip. Harga transparan tanpa biaya siluman. Bakal balik lagi sewa Jeep di sini!', 
    en: 'Extremely professional and responsive from WhatsApp booking to trip completion. Honest transparent pricing with zero hidden fees. Will definitely book again!' 
  },

  // Guide & FAQ
  'section.guide_title': { id: 'Panduan Wisata & FAQ', en: 'Visitor Guide & FAQ' },
  'section.guide_sub': { id: 'Semua yang perlu Anda ketahui sebelum berpetualang ke Taman Nasional Baluran.', en: 'Everything you need to know before venturing into Baluran National Park.' },
  'guide.card1_title': { id: 'Waktu Terbaik Berkunjung', en: 'Best Time to Visit' },
  'guide.card1_desc': { 
    id: 'Bulan Mei hingga Oktober (musim kemarau) adalah waktu terfavorit. Savana menguning eksotis seperti Afrika dan satwa liar sering berkumpul di kubangan air Bekol.', 
    en: 'Months from May to October (dry season) are best. The savanna turns golden like Africa and wild animals gather around watering holes.' 
  },
  'guide.card2_title': { id: 'Outfit & Persiapan', en: 'Outfit & Essentials' },
  'guide.card2_desc': { 
    id: 'Gunakan pakaian katun nyaman berwarna earthy/safari (khaki, cokelat, olive), kacamata hitam, topi, sunscreen, dan kamera telephoto untuk menangkap satwa dari kejauhan.', 
    en: 'Wear comfortable safari cotton clothes (khaki, olive, brown), sunglasses, hat, sunscreen, and telephoto camera for distant wildlife shots.' 
  },
  'guide.card3_title': { id: 'Etika Konservasi Satwa', en: 'Wildlife Conservation Etiquette' },
  'guide.card3_desc': { 
    id: 'Dilarang keras memberi makan satwa liar (terutama monyet ekor panjang), menjaga jarak aman dengan banteng & rusa, serta tidak membuang sampah sembarangan di area taman nasional.', 
    en: 'Strictly prohibited to feed wild monkeys, keep safe distance from wild buffaloes & deer, and never litter in the national park.' 
  },
  'guide.faq_title': { id: 'Pertanyaan yang Sering Diajukan', en: 'Frequently Asked Questions' },

  // FAQ Items
  'faq.q1': { id: 'Berapa harga sewa Jeep Safari Baluran?', en: 'How much is the Baluran Jeep Safari rental rate?' },
  'faq.a1': { 
    id: 'Harga paket Jeep Baluran kami mulai dari Rp650.000/Jeep (Start Pintu Masuk Batangan Baluran) dan Rp750.000/Jeep (Start Penjemputan Banyuwangi Kota). Satu Jeep dapat diisi hingga 5–6 orang penumpang.', 
    en: 'Our Baluran Jeep rates start from Rp650,000/Jeep (Start at Baluran Main Gate) and Rp750,000/Jeep (Start with Banyuwangi City pickup). Fits up to 5–6 passengers.' 
  },
  'faq.q2': { id: 'Apakah harga sudah termasuk tiket masuk Taman Nasional Baluran?', en: 'Are Baluran National Park entrance tickets included?' },
  'faq.a2': { 
    id: 'Harga sewa Jeep sudah mencakup unit Jeep 4x4, Driver berpengalaman, dan BBM. Tiket masuk kawasan dibayarkan langsung di loket resmi TN Baluran (WNI ~Rp16.000/orang di hari kerja atau ~Rp18.500 di hari libur; WNA ~Rp165.000).', 
    en: 'The Jeep rental covers 4x4 Jeep unit, driver guide, and fuel. Park entrance tickets are paid directly at the official ticket counter (Domestic ~Rp16,000 - Rp18,500; International ~Rp165,000).' 
  },
  'faq.q3': { id: 'Bisa dijemput di mana saja untuk paket Banyuwangi Kota?', en: 'Where are the pickup points for the Banyuwangi City package?' },
  'faq.a3': { 
    id: 'Kami melayani penjemputan gratis di area Banyuwangi Kota, meliputi Bandara Banyuwangi (BWX), Stasiun Ketapang, Stasiun Banyuwangi Kota, Pelabuhan Ketapang, terminal bus, serta hotel tempat Anda menginap.', 
    en: 'We provide complimentary pickup across Banyuwangi City, including Airport (BWX), Ketapang Station, Banyuwangi Kota Station, Ferry Port, and your hotel.' 
  },
  'faq.q4': { id: 'Kapan waktu terbaik untuk melakukan Jeep Safari di Baluran?', en: 'When is the best time for a Jeep Safari in Baluran?' },
  'faq.a4': { 
    id: 'Musim kemarau (Mei hingga Oktober) adalah waktu terbaik jika Anda ingin merasakan sensasi savana eksotis berwarna keemasan mirip padang rumput Serengeti Afrika (Africa van Java) serta melihat satwa liar berkumpul di kubangan air.', 
    en: 'Dry season (May to October) is the prime window to witness golden Serengeti-style savanna (Africa van Java) and observe wildlife around waterholes.' 
  },
  'faq.q5': { id: 'Bisakah request warna Jeep tertentu?', en: 'Can we request a specific Jeep color?' },
  'faq.a5': { 
    id: 'Bisa! Kami memiliki armada Jeep dengan varian warna putih, merah, hijau army, kuning, dan biru. Mohon request ketersediaan warna maksimal H-3 sebelum jadwal keberangkatan.', 
    en: 'Yes! We have Jeep fleets in white, red, army green, yellow, and blue. Please request your preferred color at least 3 days prior to departure.' 
  },

  // CTA Section
  'section.cta_title': { id: 'Siap Menjelajahi Baluran?', en: 'Ready to Explore Baluran?' },
  'section.cta_desc': { id: 'Booking sekarang melalui WhatsApp dan dapatkan pengalaman Jeep Safari yang tak terlupakan.', en: 'Book now via WhatsApp and enjoy an unforgettable savanna safari adventure.' },

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

  // 404 Page
  'page.404.title': { id: 'Tersesat di Savana Baluran', en: 'Lost in the Savanna' },
  'page.404.desc': { id: 'Jalur yang Anda tuju sepertinya tidak ada atau sudah berpindah. Tenang, driver Jeep kami siap mengantar Anda kembali ke rute yang benar!', en: 'The trail you are looking for seems to have moved. Rest assured, our Jeep driver guide is ready to get you back on track!' },
  'page.404.back_home': { id: 'Kembali ke Beranda', en: 'Back to Home' },
  'page.404.contact_wa': { id: 'Tanya Admin via WhatsApp', en: 'Ask Admin via WhatsApp' },

  // Footer
  'footer.desc': { id: 'Operator Jeep Safari Baluran terpercaya untuk petualangan savana Afrika van Java yang aman, nyaman, dan berkesan.', en: 'Trusted Baluran Jeep Safari operator for safe, comfortable, and memorable African savanna adventures in East Java.' },
  'footer.quick_links': { id: 'Menu Cepat', en: 'Quick Links' },
  'footer.destinations': { id: 'Destinasi Wisata', en: 'Tour Destinations' },
  'footer.contact_title': { id: 'Hubungi & Lokasi', en: 'Contact & Location' },
  'footer.rights': { id: 'Hak Cipta Dilindungi.', en: 'All Rights Reserved.' }
};
