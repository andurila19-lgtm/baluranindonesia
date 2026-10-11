export interface TourPackage {
  id: string;
  title: string;
  badge: string;
  price: number;
  priceFormatted: string;
  unit: string;
  duration: string;
  capacity: string;
  pickup: string;
  description: string;
  image: string;
  highlights: string[];
  included: string[];
  notIncluded: string[];
  scheduleSample: string[];
}

export interface DestinationItem {
  id: string;
  title: string;
  priceFormatted: string;
  unit: string;
  duration: string;
  capacity: string;
  image: string;
  description: string;
  highlights: string[];
}

export interface FleetItem {
  id: string;
  name: string;
  colorName: string;
  tag: string;
  image: string;
}

export interface TestimonialItem {
  name: string;
  city: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const siteConfig = {
  name: 'Baluran Indonesia',
  fullName: 'BALURAN INDONESIA - Jeep Safari Baluran',
  description: 'Operator Jeep Baluran terpercaya untuk pengalaman wisata aman, nyaman, dan berkesan di Taman Nasional Baluran & Banyuwangi.',
  url: 'https://baluranindonesia.com',
  phone: '085333050863',
  whatsappRaw: '6285333050863',
  whatsappFormatted: '085333050863',
  whatsappUrl: (message?: string) => {
    const base = 'https://wa.me/6285333050863';
    return message ? `${base}?text=${encodeURIComponent(message)}` : base;
  },
  meetingPoints: [
    'Bandara Banyuwangi (BWX)',
    'Stasiun Ketapang / Banyuwangi Kota',
    'Pelabuhan Ketapang',
    'Terminal & Hotel Banyuwangi Kota',
    'Pintu Masuk / Pos Batangan TN Baluran'
  ],
  socials: {
    instagram: 'https://instagram.com/baluranindonesia',
    facebook: 'https://facebook.com/baluranindonesia',
    youtube: 'https://youtube.com/@baluranindonesia'
  }
};

export const packagesData: TourPackage[] = [
  {
    id: 'rute-banyuwangi',
    title: 'Rute Baluran (Start Banyuwangi Kota)',
    badge: 'Start Banyuwangi Kota',
    price: 750000,
    priceFormatted: 'Rp750.000',
    unit: '/ Jeep',
    duration: '5 Jam',
    capacity: 'Maks. 5–6 orang',
    pickup: 'Penjemputan area Banyuwangi Kota',
    description: 'Cocok untuk Anda yang ingin perjalanan lebih praktis dengan layanan penjemputan di Bandara, Stasiun, Terminal, atau Pelabuhan.',
    image: '/images/paket-banyuwangi.jpg',
    highlights: [
      'Savana Bekol (Africa van Java view)',
      'Spot satwa liar banteng jawa, rusa, & merak',
      'Pantai Bama & Mangrove Trail',
      'Menara Pandang Bekol 360°'
    ],
    included: [
      'Mobil Jeep 4x4 Terawat',
      'Driver berpengalaman merangkap tour guide',
      'Bahan Bakar Minyak (BBM)',
      'Antar jemput hotel / stasiun / bandara area Banyuwangi Kota',
      'Bantuan dokumentasi foto & video'
    ],
    notIncluded: [
      'Tiket masuk TN Baluran (WNI Rp16.000 / WNA Rp165.000)',
      'Parkir kendaraan',
      'Makan driver & tips sukarela'
    ],
    scheduleSample: [
      '07:30 - Penjemputan di hotel / stasiun area Banyuwangi Kota',
      '08:30 - Tiba di gerbang TN Baluran & safety briefing',
      '09:00 - Safari Savana Bekol, hunting foto satwa liar & Gunung Baluran',
      '10:30 - Santai di Pantai Bama & jembatan Mangrove',
      '12:00 - Perjalanan kembali ke Banyuwangi Kota',
      '12:30 - Tiba di lokasi penjemputan dengan selamat'
    ]
  },
  {
    id: 'rute-pintu-masuk',
    title: 'Rute Baluran (Start Pintu Masuk Baluran)',
    badge: 'Start Pintu Masuk Baluran',
    price: 650000,
    priceFormatted: 'Rp650.000',
    unit: '/ Jeep',
    duration: '4 Jam',
    capacity: 'Maks. 5–6 orang',
    pickup: 'Meeting point Pintu Masuk Baluran',
    description: 'Pilihan paket dengan durasi lebih singkat bagi Anda yang menuju titik keberangkatan secara mandiri.',
    image: '/images/paket-pintu-masuk.jpg',
    highlights: [
      'Hutan Musim Evergreen Baluran',
      'Savana Bekol & Pohon Raisa ikonik',
      'Pantai Bama pasir putih',
      'Spot sunset / sunrise eksotis'
    ],
    included: [
      'Mobil Jeep 4x4 Offroad',
      'Driver ramah & memahami spot foto rahasia',
      'BBM selama eksplorasi rute Baluran',
      'Meeting point di Rest Area / Gerbang Batangan Baluran'
    ],
    notIncluded: [
      'Tiket masuk kawasan TN Baluran',
      'Pengeluaran pribadi & makan driver',
      'Parkir kendaraan'
    ],
    scheduleSample: [
      '08:30 - Bertemu driver di Meeting Point Pintu Masuk TN Baluran (Batangan)',
      '09:00 - Menyusuri jalur hutan musim menuju Savana Bekol',
      '09:30 - Foto di pohon kesendirian / Savana Bekol berlatar Gunung Baluran',
      '11:00 - Explore Pantai Bama & dermaga mangrove',
      '12:30 - Kembali ke Pintu Masuk Baluran'
    ]
  }
];

export const otherDestinationsData: DestinationItem[] = [
  {
    id: 'kawah-wurung',
    title: 'Rute Kawah Wurung',
    priceFormatted: 'Rp900.000',
    unit: '/ Jeep',
    duration: '6–7 Jam',
    capacity: 'Maks. 5–6 orang',
    image: '/images/kawah-wurung.jpg',
    description: 'Hamparan savana berbukit hijau bak permadani Selandia Baru di kaki Ijen Bondowoso-Banyuwangi.',
    highlights: ['Bukit Cincin', 'Kawah Melingkar Hijau', 'Spot Foto Tanjakan Cinta', 'Udara Pegunungan Sejuk']
  },
  {
    id: 'hutan-de-djawatan',
    title: 'Rute Hutan De Djawatan',
    priceFormatted: 'Rp700.000',
    unit: '/ Jeep',
    duration: '5 Jam',
    capacity: 'Maks. 5–6 orang',
    image: '/images/de-djawatan.jpg',
    description: 'Kawasan pohon trembesi raksasa berlumut yang menyerupai suasana magis hutan Fangorn Lord of the Rings.',
    highlights: ['Pohon Trembesi Raksasa Ratusan Tahun', 'Spot Foto Estetik Vintage', 'Rumah Pohon & Lorong Hijau']
  }
];

export const whyChooseUsData = [
  {
    icon: 'tag',
    title: 'Harga Transparan',
    description: 'Semua harga paket ditampilkan terbuka tanpa biaya tersembunyi.'
  },
  {
    icon: 'truck',
    title: 'Armada Milik Operator',
    description: 'Jeep terawat dan siap untuk perjalanan savana setiap hari.'
  },
  {
    icon: 'map-pin',
    title: 'Penjemputan Banyuwangi',
    description: 'Layanan penjemputan di area Banyuwangi Kota (Hotel/Stasiun/Bandara/Pelabuhan).'
  },
  {
    icon: 'user-check',
    title: 'Operator Berpengalaman',
    description: 'Fokus pada wisata Jeep Baluran dan sekitarnya dengan driver lokal profesional.'
  }
];

export const facilitiesData = {
  included: [
    'Mobil Jeep + Driver + BBM',
    'Penjemputan area Banyuwangi Kota (Bandara, Stasiun, Terminal, Pelabuhan)',
    'Sesuai rute yang dipilih',
    'Safety equipment & P3K standar',
    'Bantuan pengambilan dokumentasi foto'
  ],
  notIncluded: [
    'Parkir kendaraan luar',
    'Tiket masuk wisata (WNI/WNA)',
    'Uang makan driver',
    'Tips (se-ikhlasnya)',
    'Pemakaian di luar rute yang dipilih ada biaya tambahan'
  ],
  terms: [
    'Peak season surcharge 15–20% (Lebaran, Natal, Tahun Baru)',
    'Request warna Jeep maksimal H-3 keberangkatan',
    'Durasi dapat berubah mengikuti jadwal dan kondisi lapangan',
    'Overtime Rp80.000/jam',
    'Jumlah peserta sesuai kapasitas'
  ],
  capacity: {
    max: 'Maksimal 5–6 orang',
    unit: 'per Jeep',
    description: 'Kabin lega, tempat duduk nyaman menghadap ke depan/samping sesuai tipe armada, serta sirkulasi udara optimal.'
  }
};

export const fleetGalleryData: FleetItem[] = [
  {
    id: 'fleet-white',
    name: 'Jeep Safari Putih',
    colorName: 'Pure White',
    tag: 'Classic Explorer',
    image: '/images/jeep-white.jpg'
  },
  {
    id: 'fleet-red',
    name: 'Jeep Safari Merah',
    colorName: 'Crimson Red',
    tag: 'Bold Adventure',
    image: '/images/jeep-red.jpg'
  },
  {
    id: 'fleet-army',
    name: 'Jeep Safari Army',
    colorName: 'Military Olive',
    tag: 'Authentic 4x4',
    image: '/images/jeep-army.jpg'
  },
  {
    id: 'fleet-yellow',
    name: 'Jeep Safari Kuning',
    colorName: 'Bumblebee Yellow',
    tag: 'Vibrant Vibe',
    image: '/images/jeep-yellow.jpg'
  },
  {
    id: 'fleet-blue',
    name: 'Jeep Safari Biru',
    colorName: 'Sky Blue',
    tag: 'Ocean Breeze',
    image: '/images/jeep-blue.jpg'
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    name: 'Rina',
    city: 'Jakarta',
    quote: 'Perjalanan ke Baluran sangat seru! Jeep nyaman, driver ramah, dan pemandangannya luar biasa.',
    rating: 5,
    avatar: '/images/avatar-rina.jpg'
  },
  {
    name: 'Dimas',
    city: 'Surabaya',
    quote: 'Harga jelas, layanan profesional, rekomended banget untuk explore Baluran.',
    rating: 5,
    avatar: '/images/avatar-dimas.jpg'
  },
  {
    name: 'Siti',
    city: 'Bali',
    quote: 'Penjemputan di bandara sangat membantu, perjalanan lancar dan menyenangkan.',
    rating: 5,
    avatar: '/images/avatar-siti.jpg'
  }
];

export const faqData: FaqItem[] = [
  {
    question: 'Berapa harga sewa Jeep Safari Baluran?',
    answer: 'Harga paket Jeep Baluran kami mulai dari Rp650.000/Jeep (Start Pintu Masuk Batangan Baluran) dan Rp750.000/Jeep (Start Penjemputan Banyuwangi Kota). Satu Jeep dapat diisi hingga 5–6 orang penumpang.'
  },
  {
    question: 'Apakah harga sudah termasuk tiket masuk Taman Nasional Baluran?',
    answer: 'Harga sewa Jeep sudah mencakup unit Jeep 4x4, Driver berpengalaman, dan BBM. Tiket masuk kawasan dibayarkan langsung di loket resmi TN Baluran (WNI ~Rp16.000/orang di hari kerja atau ~Rp18.500 di hari libur; WNA ~Rp165.000).'
  },
  {
    question: 'Bisa dijemput di mana saja untuk paket Banyuwangi Kota?',
    answer: 'Kami melayani penjemputan gratis di area Banyuwangi Kota, meliputi Bandara Banyuwangi (BWX), Stasiun Ketapang, Stasiun Banyuwangi Kota, Pelabuhan Ketapang, terminal bus, serta hotel tempat Anda menginap.'
  },
  {
    question: 'Kapan waktu terbaik untuk melakukan Jeep Safari di Baluran?',
    answer: 'Musim kemarau (Mei hingga Oktober) adalah waktu terbaik jika Anda ingin merasakan sensasi savana eksotis berwarna keemasan mirip padang rumput Serengeti Afrika (Africa van Java) serta melihat satwa liar berkumpul di kubangan air.'
  },
  {
    question: 'Bisakah request warna Jeep tertentu?',
    answer: 'Bisa! Kami memiliki armada Jeep dengan varian warna putih, merah, hijau army, kuning, dan biru. Mohon request ketersediaan warna maksimal H-3 sebelum jadwal keberangkatan.'
  }
];
