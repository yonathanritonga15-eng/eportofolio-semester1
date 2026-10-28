// Mengambil jalur base repository secara otomatis (/eportofolio-semester1/)
const BASE = import.meta.env.BASE_URL;

export const profilePhoto = `${BASE}images/WhatsApp%20Image%202026-10-28%20at%2022.10.08.jpeg`;

export const profilePhotoSecondary =
  'https://images.pexels.com/photos/31409070/pexels-photo-31409070.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export interface DocumentationPhoto {
  image: string;
  imageAlt: string;
  title: string;
  caption: string;
  category: string;
}

export const documentationPhotos: DocumentationPhoto[] = [
  {
    image: `${BASE}images/WhatsApp%20Image%202026-10-28%20at%2022.10.08.jpeg`,
    imageAlt: 'Dokumentasi Kegiatan PPG Prajabatan PJOK',
    title: '',
    caption: '',
    category: 'Dokumentasi Semester 1',
  },
  {
    image: `${BASE}images/WhatsApp%20Image%202026-10-28%20at%2022.10.11%20(1).jpeg`,
    imageAlt: 'Dokumentasi Pembelajaran Kelas',
    title: '',
    caption: '',
    category: 'Dokumentasi Semester 1',
  },
  {
    image: `${BASE}images/WhatsApp%20Image%202026-10-28%20at%2022.10.11.jpeg`,
    imageAlt: 'Dokumentasi Diskusi Perkuliahan',
    title: '',
    caption: '',
    category: 'Dokumentasi Semester 1',
  },
  {
    image: `${BASE}images/WhatsApp%20Image%202026-10-28%20at%2022.10.12%20(1).jpeg`,
    imageAlt: 'Dokumentasi Kegiatan PPL',
    title: '',
    caption: '',
    category: 'Dokumentasi Semester 1',
  },
  {
    image: `${BASE}images/WhatsApp%20Image%202026-10-28%20at%2022.10.12.jpeg`,
    imageAlt: 'Dokumentasi Refleksi Pembelajaran',
    title: '',
    caption: '',
    category: 'Dokumentasi Semester 1',
  },
  {
    image: `${BASE}images/WhatsApp%20Image%202026-10-28%20at%2022.10.13%20(1).jpeg`,
    imageAlt: 'Dokumentasi Kebersamaan Kelompok',
    title: '',
    caption: '',
    category: 'Dokumentasi Semester 1',
  },
  {
    image: `${BASE}images/WhatsApp%20Image%202026-10-28%20at%2022.10.13.jpeg`,
    imageAlt: 'Dokumentasi Aktivitas Olahraga PJOK',
    title: '',
    caption: '',
    category: 'Dokumentasi Semester 1',
  },
];
