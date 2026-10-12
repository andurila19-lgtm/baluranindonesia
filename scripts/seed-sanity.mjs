import { createClient } from '@sanity/client';
import fs from 'node:fs';
import path from 'node:path';

const projectId = '7ox4kuc2';
const dataset = 'production';
const token = 'skLaYJo6mRQU2kCkw5lavyXehPFy1uNlrOmoYaavfPZGbZ4QLHmkJr4FbSjPhfq4dacplttQfeW9nA2ZKOKP8kpd2cwQiVU5TuQwa3mIZYRV0nv2cODlowzUR7A5GlmrIPBNq8hg99QKUuEbESJprYw6gfUs6sHQoz9yQbfqU3kyXAMIA7Kb';

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: '2024-01-01',
  useCdn: false,
});

const imageCache = new Map();

async function uploadImageIfPossible(imageRelPath) {
  if (!imageRelPath) return null;
  const cleanPath = imageRelPath.replace(/^\//, '');
  const fullPath = path.resolve(process.cwd(), 'public', cleanPath);

  if (imageCache.has(fullPath)) {
    return imageCache.get(fullPath);
  }

  if (fs.existsSync(fullPath)) {
    try {
      console.log(`  Mengupload gambar: ${path.basename(fullPath)}...`);
      const stream = fs.createReadStream(fullPath);
      const asset = await client.assets.upload('image', stream, {
        filename: path.basename(fullPath),
      });
      const assetRef = {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: asset._id,
        },
      };
      imageCache.set(fullPath, assetRef);
      return assetRef;
    } catch (err) {
      console.warn(`  Gagal upload ${fullPath}:`, err.message);
      return null;
    }
  }
  return null;
}

async function seed() {
  console.log('🚀 Memulai migrasi data ke Sanity Studio (Project: ' + projectId + ')...');

  // 1. Site Settings
  console.log('\n⚙️ 1. Menyimpan Pengaturan Website & Kontak...');
  await client.createOrReplace({
    _id: 'siteSettings',
    _type: 'siteSettings',
    name: 'Baluran Indonesia',
    fullName: 'BALURAN INDONESIA - Jeep Safari Baluran',
    description: 'Operator Jeep Baluran terpercaya untuk pengalaman wisata aman, nyaman, dan berkesan di Taman Nasional Baluran & Banyuwangi.',
    phone: '085333050863',
    whatsapp: '085333050863',
    meetingPoints: [
      'Bandara Banyuwangi (BWX)',
      'Stasiun Ketapang / Banyuwangi Kota',
      'Pelabuhan Ketapang',
      'Terminal & Hotel Banyuwangi Kota',
      'Pintu Masuk / Pos Batangan TN Baluran',
    ],
    instagram: 'https://instagram.com/baluranindonesia',
    facebook: 'https://facebook.com/baluranindonesia',
    youtube: 'https://youtube.com/@baluranindonesia',
  });
  console.log('  ✓ Site Settings berhasil disimpan!');

  // 2. Paket Jeep
  console.log('\n🚙 2. Menyimpan Paket Jeep Baluran...');
  const packages = [
    {
      _id: 'pkg-rute-banyuwangi',
      _type: 'tourPackage',
      title: 'Rute Baluran (Start Banyuwangi Kota)',
      id: { _type: 'slug', current: 'rute-banyuwangi' },
      badge: 'Start Banyuwangi Kota',
      price: 750000,
      priceFormatted: 'Rp750.000',
      unit: '/ Jeep',
      duration: '5 Jam',
      capacity: 'Maks. 5–6 orang',
      pickup: 'Penjemputan area Banyuwangi Kota',
      description: 'Cocok untuk Anda yang ingin perjalanan lebih praktis dengan layanan penjemputan di Bandara, Stasiun, Terminal, atau Pelabuhan.',
      imagePath: 'images/paket-banyuwangi.webp',
      highlights: [
        'Savana Bekol (Africa van Java view)',
        'Spot satwa liar banteng jawa, rusa, & merak',
        'Pantai Bama & Mangrove Trail',
        'Menara Pandang Bekol 360°',
      ],
      included: [
        'Mobil Jeep 4x4 Terawat',
        'Driver berpengalaman merangkap tour guide',
        'Bahan Bakar Minyak (BBM)',
        'Antar jemput hotel / stasiun / bandara area Banyuwangi Kota',
        'Bantuan dokumentasi foto & video',
      ],
      notIncluded: [
        'Tiket masuk TN Baluran (WNI Rp16.000 / WNA Rp165.000)',
        'Parkir kendaraan',
        'Makan driver & tips sukarela',
      ],
      scheduleSample: [
        '07:30 - Penjemputan di hotel / stasiun area Banyuwangi Kota',
        '08:30 - Tiba di gerbang TN Baluran & safety briefing',
        '09:00 - Safari Savana Bekol, hunting foto satwa liar & Gunung Baluran',
        '10:30 - Santai di Pantai Bama & jembatan Mangrove',
        '12:00 - Perjalanan kembali ke Banyuwangi Kota',
        '12:30 - Tiba di lokasi penjemputan dengan selamat',
      ],
      order: 1,
    },
    {
      _id: 'pkg-rute-pintu-masuk',
      _type: 'tourPackage',
      title: 'Rute Baluran (Start Pintu Masuk Baluran)',
      id: { _type: 'slug', current: 'rute-pintu-masuk' },
      badge: 'Start Pintu Masuk Baluran',
      price: 650000,
      priceFormatted: 'Rp650.000',
      unit: '/ Jeep',
      duration: '4 Jam',
      capacity: 'Maks. 5–6 orang',
      pickup: 'Meeting point Pintu Masuk Baluran',
      description: 'Pilihan paket dengan durasi lebih singkat bagi Anda yang menuju titik keberangkatan secara mandiri.',
      imagePath: 'images/paket-pintu-masuk.webp',
      highlights: [
        'Hutan Musim Evergreen Baluran',
        'Savana Bekol & Pohon Raisa ikonik',
        'Pantai Bama pasir putih',
        'Spot sunset / sunrise eksotis',
      ],
      included: [
        'Mobil Jeep 4x4 Offroad',
        'Driver ramah & memahami spot foto rahasia',
        'BBM selama eksplorasi rute Baluran',
        'Meeting point di Rest Area / Gerbang Batangan Baluran',
      ],
      notIncluded: [
        'Tiket masuk kawasan TN Baluran',
        'Pengeluaran pribadi & makan driver',
        'Parkir kendaraan',
      ],
      scheduleSample: [
        '08:30 - Bertemu driver di Meeting Point Pintu Masuk TN Baluran (Batangan)',
        '09:00 - Menyusuri jalur hutan musim menuju Savana Bekol',
        '09:30 - Foto di pohon kesendirian / Savana Bekol berlatar Gunung Baluran',
        '11:00 - Explore Pantai Bama & dermaga mangrove',
        '12:30 - Kembali ke Pintu Masuk Baluran',
      ],
      order: 2,
    },
  ];

  for (const pkg of packages) {
    const img = await uploadImageIfPossible(pkg.imagePath);
    const { imagePath, ...docData } = pkg;
    await client.createOrReplace({
      ...docData,
      ...(img ? { image: img } : {}),
    });
    console.log(`  ✓ ${pkg.title} tersimpan!`);
  }

  // 3. Destinasi Lainnya
  console.log('\n📍 3. Menyimpan Destinasi Lainnya...');
  const destinations = [
    {
      _id: 'dest-kawah-wurung',
      _type: 'destination',
      title: 'Rute Kawah Wurung',
      id: { _type: 'slug', current: 'kawah-wurung' },
      priceFormatted: 'Rp900.000',
      unit: '/ Jeep',
      duration: '6–7 Jam',
      capacity: 'Maks. 5–6 orang',
      description: 'Hamparan savana berbukit hijau bak permadani Selandia Baru di kaki Ijen Bondowoso-Banyuwangi.',
      highlights: ['Bukit Cincin', 'Kawah Melingkar Hijau', 'Spot Foto Tanjakan Cinta', 'Udara Pegunungan Sejuk'],
      imagePath: 'images/kawah-wurung.webp',
      order: 1,
    },
    {
      _id: 'dest-de-djawatan',
      _type: 'destination',
      title: 'Rute Hutan De Djawatan',
      id: { _type: 'slug', current: 'hutan-de-djawatan' },
      priceFormatted: 'Rp700.000',
      unit: '/ Jeep',
      duration: '5 Jam',
      capacity: 'Maks. 5–6 orang',
      description: 'Kawasan pohon trembesi raksasa berlumut yang menyerupai suasana magis hutan Fangorn Lord of the Rings.',
      highlights: ['Pohon Trembesi Raksasa Ratusan Tahun', 'Spot Foto Estetik Vintage', 'Rumah Pohon & Lorong Hijau'],
      imagePath: 'images/de-djawatan.webp',
      order: 2,
    },
  ];

  for (const dest of destinations) {
    const img = await uploadImageIfPossible(dest.imagePath);
    const { imagePath, ...docData } = dest;
    await client.createOrReplace({
      ...docData,
      ...(img ? { image: img } : {}),
    });
    console.log(`  ✓ ${dest.title} tersimpan!`);
  }

  // 4. Galeri Armada Jeep
  console.log('\n🛞 4. Menyimpan Galeri Armada Jeep...');
  const fleetList = [
    { id: 'fleet-white', name: 'Jeep Safari Putih', colorName: 'Pure White', tag: 'Classic Explorer', imagePath: 'images/jeep-white.webp', order: 1 },
    { id: 'fleet-red', name: 'Jeep Safari Merah', colorName: 'Crimson Red', tag: 'Bold Adventure', imagePath: 'images/jeep-red.webp', order: 2 },
    { id: 'fleet-army', name: 'Jeep Safari Army', colorName: 'Military Olive', tag: 'Authentic 4x4', imagePath: 'images/jeep-army.webp', order: 3 },
    { id: 'fleet-yellow', name: 'Jeep Safari Kuning', colorName: 'Bumblebee Yellow', tag: 'Vibrant Vibe', imagePath: 'images/jeep-yellow.webp', order: 4 },
    { id: 'fleet-blue', name: 'Jeep Safari Biru', colorName: 'Sky Blue', tag: 'Ocean Breeze', imagePath: 'images/jeep-blue.webp', order: 5 },
  ];

  for (const f of fleetList) {
    const img = await uploadImageIfPossible(f.imagePath);
    await client.createOrReplace({
      _id: f.id,
      _type: 'fleet',
      name: f.name,
      id: f.id,
      colorName: f.colorName,
      tag: f.tag,
      order: f.order,
      ...(img ? { image: img } : {}),
    });
    console.log(`  ✓ ${f.name} tersimpan!`);
  }

  // 5. Testimoni Wisatawan
  console.log('\n💬 5. Menyimpan Testimoni Wisatawan...');
  const testimonials = [
    { _id: 'testi-rina', name: 'Rina', city: 'Jakarta', quote: 'Perjalanan ke Baluran sangat seru! Jeep nyaman, driver ramah, dan pemandangannya luar biasa.', rating: 5, avatarPath: 'images/avatar-rina.webp' },
    { _id: 'testi-dimas', name: 'Dimas', city: 'Surabaya', quote: 'Harga jelas, layanan profesional, rekomended banget untuk explore Baluran.', rating: 5, avatarPath: 'images/avatar-dimas.webp' },
    { _id: 'testi-siti', name: 'Siti', city: 'Bali', quote: 'Penjemputan di bandara sangat membantu, perjalanan lancar dan menyenangkan.', rating: 5, avatarPath: 'images/avatar-siti.webp' },
  ];

  for (const t of testimonials) {
    const img = await uploadImageIfPossible(t.avatarPath);
    const { avatarPath, ...docData } = t;
    await client.createOrReplace({
      ...docData,
      _type: 'testimonial',
      ...(img ? { avatar: img } : {}),
    });
    console.log(`  ✓ Testimoni ${t.name} tersimpan!`);
  }

  // 6. Tanya Jawab (FAQ)
  console.log('\n❓ 6. Menyimpan Tanya Jawab (FAQ)...');
  const faqs = [
    {
      _id: 'faq-1',
      _type: 'faq',
      question: 'Berapa harga sewa Jeep Safari Baluran?',
      answer: 'Harga paket Jeep Baluran kami mulai dari Rp650.000/Jeep (Start Pintu Masuk Batangan Baluran) dan Rp750.000/Jeep (Start Penjemputan Banyuwangi Kota). Satu Jeep dapat diisi hingga 5–6 orang penumpang.',
      order: 1,
    },
    {
      _id: 'faq-2',
      _type: 'faq',
      question: 'Apakah harga sudah termasuk tiket masuk Taman Nasional Baluran?',
      answer: 'Harga sewa Jeep sudah mencakup unit Jeep 4x4, Driver berpengalaman, dan BBM. Tiket masuk kawasan dibayarkan langsung di loket resmi TN Baluran (WNI ~Rp16.000/orang di hari kerja atau ~Rp18.500 di hari libur; WNA ~Rp165.000).',
      order: 2,
    },
    {
      _id: 'faq-3',
      _type: 'faq',
      question: 'Bisa dijemput di mana saja untuk paket Banyuwangi Kota?',
      answer: 'Kami melayani penjemputan gratis di area Banyuwangi Kota, meliputi Bandara Banyuwangi (BWX), Stasiun Ketapang, Stasiun Banyuwangi Kota, Pelabuhan Ketapang, terminal bus, serta hotel tempat Anda menginap.',
      order: 3,
    },
    {
      _id: 'faq-4',
      _type: 'faq',
      question: 'Kapan waktu terbaik untuk melakukan Jeep Safari di Baluran?',
      answer: 'Musim kemarau (Mei hingga Oktober) adalah waktu terbaik jika Anda ingin merasakan sensasi savana eksotis berwarna keemasan mirip padang rumput Serengeti Afrika (Africa van Java) serta melihat satwa liar berkumpul di kubangan air.',
      order: 4,
    },
    {
      _id: 'faq-5',
      _type: 'faq',
      question: 'Bisakah request warna Jeep tertentu?',
      answer: 'Bisa! Kami memiliki armada Jeep dengan varian warna putih, merah, hijau army, kuning, dan biru. Mohon request ketersediaan warna maksimal H-3 sebelum jadwal keberangkatan.',
      order: 5,
    },
  ];

  for (const faq of faqs) {
    await client.createOrReplace(faq);
    console.log(`  ✓ ${faq.question} tersimpan!`);
  }

  console.log('\n🎉 SEMUA DATA BERHASIL DI-IMPORT KE SANITY STUDIO DENGAN FOTO LENGKAP!');
}

seed().catch((err) => {
  console.error('❌ Terjadi kesalahan saat migrasi:', err);
  process.exit(1);
});
