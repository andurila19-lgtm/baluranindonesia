import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'destination',
  title: 'Destinasi Sekitar Banyuwangi',
  type: 'document',
  icon: () => '📍',
  fields: [
    defineField({
      name: 'title',
      title: 'Nama Destinasi',
      type: 'string',
      validation: (rule) => rule.required(),
      description: 'Contoh: Rute Kawah Wurung'
    }),
    defineField({
      name: 'id',
      title: 'Slug / ID Destinasi',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'priceFormatted',
      title: 'Harga Tampilan',
      type: 'string',
      description: 'Contoh: Rp900.000'
    }),
    defineField({
      name: 'unit',
      title: 'Satuan',
      type: 'string',
      initialValue: '/ Jeep',
    }),
    defineField({
      name: 'duration',
      title: 'Durasi',
      type: 'string',
      description: 'Contoh: 6–7 Jam'
    }),
    defineField({
      name: 'capacity',
      title: 'Kapasitas',
      type: 'string',
      initialValue: 'Maks. 5–6 orang',
    }),
    defineField({
      name: 'image',
      title: 'Foto Destinasi',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi Singkat',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'highlights',
      title: 'Highlight Tempat',
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
