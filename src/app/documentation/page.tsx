import { GALLERY } from "@/data/gallery";
import Container from "../components/Container";
import GalleryGrid from "../components/GalleryGrid";
import Section from "../components/Section";

export default function Documentation(){
  return (
    <div>
      <Section title="Gallery & Dokumentasi" subtitle="Foto dan video kegiatan ANDINI">
        <Container>
          <GalleryGrid items={GALLERY} />
        </Container>
      </Section>

      <Section title="Artikel & Dokumentasi" subtitle="Artikel pendukung">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-4">
              <h3 className="font-bold">Mengapa pendidikan menunda pernikahan?</h3>
              <p className="mt-2 text-sm">Pendidikan meningkatkan peluang ekonomi, pengetahuan reproduksi yang aman, dan kesiapan psikologis untuk mengambil keputusan dewasa.</p>
            </div>

            <div className="card p-4">
              <h3 className="font-bold">Studi kasus daerah pedesaan</h3>
              <p className="mt-2 text-sm">Intervensi berbasis sekolah terbukti menurunkan angka pernikahan dini jika dikombinasikan dengan program advokasi orangtua.</p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
