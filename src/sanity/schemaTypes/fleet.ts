import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'fleet',
  title: 'Galeri Armada Jeep',
  type: 'document',
  icon: () => '🛞',
  fields: [
    defineField({
      name: 'name',
      title: 'Nama Armada',
      type: 'string',
      validation: (rule) => rule.required(),
      description: 'Contoh: Jeep Safari Putih'
    }),
    defineField({
      name: 'id',
      title: 'ID Armada',
      type: 'string',
      description: 'Contoh: fleet-white'
    }),
    defineField({
      name: 'colorName',
      title: 'Nama Warna',
      type: 'string',
      description: 'Contoh: Pure White'
    }),
    defineField({
      name: 'tag',
      title: 'Tagline / Karakter',
      type: 'string',
      description: 'Contoh: Classic Explorer'
    }),
    defineField({
      name: 'image',
      title: 'Foto Jeep',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
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
      title: 'name',
      subtitle: 'colorName',
      media: 'image',
    },
  },
});
