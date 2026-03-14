export default function Hero() {
  return (
    <header id="inicio" className="bg-hero min-h-screen flex items-center pt-20 gsap-section">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-white space-y-8">
          <div className="inline-block px-4 py-1 border border-amber-600 text-amber-500 text-xs font-bold tracking-widest uppercase rounded-full">
            Excelência Jurídica desde 2008
          </div>
          <h1 className="text-5xl md:text-7xl leading-tight font-serif">
            Defendendo seus direitos com <span className="text-amber-600 italic">integridade</span> e rigor.
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-xl leading-relaxed">
            Unimos tradição e inovação para entregar soluções jurídicas estratégicas em casos complexos de alta relevância.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contato" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded font-bold text-center transition-colors shadow-xl"
            >
              Agendar Atendimento
            </a>
            <a 
              href="#areas" 
              className="bg-transparent border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded font-bold text-center transition-colors"
            >
              Nossas Especialidades
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
