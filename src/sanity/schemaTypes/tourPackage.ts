import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'tourPackage',
  title: 'Paket Jeep Baluran',
  type: 'document',
  icon: () => '🚙',
  fields: [
    defineField({
      name: 'title',
      title: 'Nama Paket',
      type: 'string',
      validation: (rule) => rule.required(),
      description: 'Contoh: Rute Baluran (Start Banyuwangi Kota)'
    }),
    defineField({
      name: 'id',
      title: 'ID / Slug Paket',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'badge',
      title: 'Badge / Label Singkat',
      type: 'string',
      description: 'Contoh: Start Banyuwangi Kota / Best Seller'
    }),
    defineField({
      name: 'price',
      title: 'Harga (Angka)',
      type: 'number',
      validation: (rule) => rule.required().positive(),
      description: 'Masukkan angka tanpa titik, contoh: 750000'
    }),
    defineField({
      name: 'priceFormatted',
      title: 'Format Tampilan Harga',
      type: 'string',
      description: 'Contoh: Rp750.000'
    }),
    defineField({
      name: 'unit',
      title: 'Satuan Harga',
      type: 'string',
      initialValue: '/ Jeep',
    }),
    defineField({
      name: 'duration',
      title: 'Durasi Tour',
      type: 'string',
      description: 'Contoh: 5 Jam'
    }),
    defineField({
      name: 'capacity',
      title: 'Kapasitas Peserta',
      type: 'string',
      initialValue: 'Maks. 5–6 orang',
    }),
    defineField({
      name: 'pickup',
      title: 'Info Titik Penjemputan',
      type: 'string',
      description: 'Contoh: Penjemputan area Banyuwangi Kota'
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi Singkat',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Foto Paket Jeep',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'highlights',
      title: 'Highlight / Daya Tarik Rute',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'included',
      title: 'Fasilitas Termasuk (Included)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'notIncluded',
      title: 'Tidak Termasuk (Not Included)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'scheduleSample',
      title: 'Estimasi Jadwal / Itinerary',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'order',
      title: 'Urutan Tampil',
      type: 'number',
      initialValue: 1,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'priceFormatted',
      media: 'image',
    },
  },
});
