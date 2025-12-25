export type Item = {
  id: string;
  type: "photo" | "video";
  title: string;
  src: string;
  caption: string;
};

export const GALLERY: Item[] = [
  {
    id: "g1",
    type: "photo",
    title: "Sesi Perkenalan",
    src: "/media/perkenalan.jpeg",
    caption: "Suasana awal pertemuan dengan peserta.",
  },
  {
    id: "g2",
    type: "video",
    title: "Pre-test Interaktif",
    src: "/media/pretest1.mp4",
    caption: "Peserta mengisi pre-test untuk mengukur pemahaman awal.",
  },
  {
    id: "g3",
    type: "video",
    title: "Materi Edukasi",
    src: "/media/materi.mp4",
    caption: "Pemateri menyampaikan materi dengan pendekatan visual.",
  },
  {
    id: "g4",
    type: "video",
    title: "Sesi Game",
    src: "/media/game.mp4",
    caption: "Sesi game untuk ice breaking.",
  },
  {
    id: "g5",
    type: "photo",
    title: "Poster Kegiatan",
    src: "/media/posttest.jpeg",
    caption: "Poster yang digunakan dalam sesi edukasi.",
  },
  {
    id: "g6",
    type: "photo",
    title: "Diskusi Kelompok",
    src: "/media/diskusi.jpeg",
    caption: "Cuplikan diskusi dan interaksi peserta.",
  },
];

export default [...GALLERY];
