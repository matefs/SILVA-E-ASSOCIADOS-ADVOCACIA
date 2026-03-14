export default function Expertise() {
  return (
    <section id="areas" className="py-24 bg-slate-50 relative overflow-hidden gsap-section">
      <div className="fixed inset-0 z-0 pointer-events-none block">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-slate-200 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 font-serif text-slate-900">Especialidades Jurídicas</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-slate-500 italic max-w-xl mx-auto uppercase text-xs font-bold tracking-widest">Excelência em cada detalhe</p>
        </div>
        
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6">
          
          <div className="group relative md:col-span-7 h-[400px] bento-card">
            <img 
              alt="Direito Empresarial" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90" 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="mb-4">
                <i className="fas fa-building text-amber-500 text-3xl"></i>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-3">
                Direito Empresarial & Compliance
              </h3>
              <p className="text-slate-200 text-sm leading-relaxed opacity-90 max-w-xl">
                Assessoria estratégica para empresas de médio e grande porte focada em segurança jurídica, redução de riscos e estruturação societária complexa.
              </p>
            </div>
          </div>
          
          <div className="group relative md:col-span-5 h-[400px] bento-card">
            <img 
              alt="Direito Civil" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90" 
              src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="mb-4">
                <i className="fas fa-balance-scale text-amber-500 text-3xl"></i>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-3">
                Direito Civil Estratégico
              </h3>
              <p className="text-slate-200 text-sm leading-relaxed opacity-90">
                Gestão de contratos, responsabilidade civil e resolução de conflitos patrimoniais com máxima eficiência.
              </p>
            </div>
          </div>
          
          <div className="group relative md:col-span-5 h-[400px] bento-card">
            <img 
              alt="Família e Sucessões" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90" 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="mb-4">
                <i className="fas fa-users text-amber-500 text-3xl"></i>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-3">
                Família e Sucessões
              </h3>
              <p className="text-slate-200 text-sm leading-relaxed opacity-90">
                Atendimento humanizado para divórcios, partilhas, inventários e planejamento sucessório patrimonial.
              </p>
            </div>
          </div>
          
          <div className="group relative md:col-span-7 h-[400px] bento-card">
            <img 
              alt="Trabalhista Corporativo" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90" 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="mb-4">
                <i className="fas fa-briefcase text-amber-500 text-3xl"></i>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-3">
                Trabalhista Corporativo
              </h3>
              <p className="text-slate-200 text-sm leading-relaxed opacity-90 max-w-xl">
                Defesa empresarial robusta, consultoria preventiva e adequação de compliance para o setor de recursos humanos.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
