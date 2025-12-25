import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 mt-12 bg-white/50 backdrop-blur-sm">
      <Container className="text-center">
        <div className="mb-4">
          <span className="font-bold text-indigo-600">Stop Bullying</span> — Bersama Ciptakan Perubahan
        </div>
        <div className="text-sm text-slate-500">© {new Date().getFullYear()} Stop Bullying Campaign. Semua hak dilindungi.</div>
      </Container>
    </footer>
  );
}
