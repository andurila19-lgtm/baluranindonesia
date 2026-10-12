import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Pengaturan Kontak & Website',
  type: 'document',
  icon: () => '⚙️',
  fields: [
    defineField({
      name: 'name',
      title: 'Nama Brand',
      type: 'string',
      initialValue: 'Baluran Indonesia',
    }),
    defineField({
      name: 'fullName',
      title: 'Nama Lengkap Usaha',
      type: 'string',
      initialValue: 'BALURAN INDONESIA - Jeep Safari Baluran',
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi Singkat',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'whatsapp',
      title: 'Nomor WhatsApp Admin (Booking)',
      type: 'string',
      description: 'Contoh: 085333050863',
      initialValue: '085333050863',
    }),
    defineField({
      name: 'phone',
      title: 'Nomor Telepon Cadangan',
      type: 'string',
      initialValue: '085333050863',
    }),
    defineField({
      name: 'meetingPoints',
      title: 'Daftar Titik Penjemputan',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'instagram',
      title: 'Link Instagram',
      type: 'url',
    }),
    defineField({
      name: 'facebook',
      title: 'Link Facebook',
      type: 'url',
    }),
    defineField({
      name: 'youtube',
      title: 'Link YouTube',
      type: 'url',
    }),
    defineField({
      name: 'pageLayoutConfig',
      title: 'Konfigurasi Visual Page Builder (JSON)',
      type: 'text',
      description: 'Menyimpan susunan urutan seksi, grid kolom, dan border kustom dari Visual Page Builder.',
      rows: 5,
    }),
  ],
});
