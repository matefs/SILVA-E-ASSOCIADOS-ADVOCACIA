export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white gsap-section">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=1000" 
              alt="Reunião" 
              className="rounded-lg shadow-2xl relative z-10 w-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-slate-100 -z-0 rounded-lg hidden md:block border border-slate-200"></div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl text-slate-900 font-serif">Comprometimento em cada detalhe do seu processo.</h2>
            <div className="w-20 h-1 bg-amber-600"></div>
            <p className="text-slate-600 text-lg leading-relaxed">
              Nosso escritório se destaca pela proximidade com o cliente. Acreditamos que o sucesso jurídico nasce de uma escuta ativa e da compreensão profunda dos objetivos de cada pessoa ou empresa que representamos.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Contamos com uma estrutura moderna e tecnologia de ponta para acompanhamento processual, garantindo que você esteja sempre informado sobre cada movimentação da sua causa.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <p className="text-3xl font-serif font-bold text-amber-600">15+</p>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Anos de Mercado</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-amber-600">2.5k</p>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Causas Vencidas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
