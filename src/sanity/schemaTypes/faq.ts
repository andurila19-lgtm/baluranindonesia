import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'faq',
  title: 'Tanya Jawab (FAQ)',
  type: 'document',
  icon: () => '❓',
  fields: [
    defineField({
      name: 'question',
      title: 'Pertanyaan',
      type: 'string',
      validation: (rule) => rule.required(),
      description: 'Contoh: Berapa harga sewa Jeep Safari Baluran?'
    }),
    defineField({
      name: 'answer',
      title: 'Jawaban',
      type: 'text',
      rows: 4,
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
      title: 'question',
      subtitle: 'answer',
    },
  },
});
