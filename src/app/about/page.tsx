import TEAM from "../../data/team";
import Container from "../components/Container";
import Section from "../components/Section";
import TeamCard from "../components/TeamCard";

export default function AboutPage() {
  return (
    <div>
      <Section
        title="Tentang ANDINI"
        subtitle="Visi & Misi, Tim, dan alasan adanya program"
      >
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-5">
              <h3 className="font-bold">Visi</h3>
              <p className="mt-2">
                Menurunkan angka pernikahan dini dan menciptakan lingkungan yang
                mendukung pendidikan anak.
              </p>

              <h3 className="font-bold mt-4">Misi</h3>
              <ul className="list-disc ml-5 mt-2 text-sm">
                <li>Edukasi remaja & orangtua</li>
                <li>Advokasi kebijakan lokal</li>
                <li>Dukungan psikososial</li>
              </ul>
            </div>

            <div className="card p-5">
              <h3 className="font-bold">Mengapa program ini dibuat?</h3>
              <p className="mt-2 text-sm">
                Pernikahan dini membawa risiko kesehatan, pendidikan, dan sosial
                yang berat. ANDINI hadir untuk mencegah dampak tersebut melalui
                edukasi, advokasi, dan intervensi berbasis bukti.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section title="Our Team" subtitle="Tim inti program ANDINI">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM.map((m, index) => (
              <TeamCard key={m.id} member={m} />
            ))}
          </div>
        </Container>
      </Section>
      <Section title="Media Sosial" subtitle="Ikuti kami untuk update terbaru">
        <Container>
          <div className="max-w-2xl mx-auto rounded-full">
            <div className="card p-3 md:p-8 hover:shadow-lg transition-all duration-300 border border-gray-100">
              {/* WRAPPER MOBILE-FIRST */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                {/* Left Side */}
                <div className="flex items-start md:items-center gap-4 md:gap-6">
                  {/* Icon */}
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-8 h-8 md:w-10 md:h-10 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                      Instagram
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base mb-2 md:mb-3">
                      Follow untuk konten terbaru dan update
                    </p>

                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">Username:</span>
                      <span className="text-base md:text-lg font-semibold text-gray-900">
                        @andini.project25
                      </span>
                    </div>
                  </div>
                </div>

                {/* Button — mobile: full width */}
                <a
                  href="https://instagram.com/andini.project25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 md:px-6 py-2 md:py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <svg
                    className="w-6 h-6 md:w-10 md:h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                  </svg>
                  <span className="text-base md:text-lg">Follow</span>
                </a>
              </div>
            </div>

            <div className="text-center mt-6">
              <p className="text-gray-600">
                Temukan konten eksklusif, behind-the-scenes, dan update terbaru
                hanya di Instagram kami
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
