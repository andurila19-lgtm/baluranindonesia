import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'testimonial',
  title: 'Testimoni Wisatawan',
  type: 'document',
  icon: () => '💬',
  fields: [
    defineField({
      name: 'name',
      title: 'Nama Tamu / Pelanggan',
      type: 'string',
      validation: (rule) => rule.required(),
      description: 'Contoh: Rina'
    }),
    defineField({
      name: 'city',
      title: 'Kota Asal',
      type: 'string',
      description: 'Contoh: Jakarta'
    }),
    defineField({
      name: 'quote',
      title: 'Ulasan / Komentar',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating Bintang (1-5)',
      type: 'number',
      initialValue: 5,
      validation: (rule) => rule.min(1).max(5),
    }),
    defineField({
      name: 'avatar',
      title: 'Foto Profil (Opsional)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'city',
      media: 'avatar',
    },
  },
});
