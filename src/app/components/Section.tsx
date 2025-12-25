type Props = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({ title, subtitle, children, className = "" }: Props) {
  return (
    <section id="edukasi" className={`py-8 px-5 md:py-16 ${className}`}>
      <div className="mb-6 md:max-w-4xl  m-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold">{title}</h2>
        {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
      </div>
      <div>{children}</div>
    </section>
  );
}