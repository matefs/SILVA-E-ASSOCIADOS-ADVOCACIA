export default function Testimonials() {
  const testimonials = [
    {
      name: "Ricardo Mendes",
      time: "Há 2 semanas",
      text: "Atendimento impecável e solução rápida para o meu caso contratual. Recomendo fortemente."
    },
    {
      name: "Mariana Costa",
      time: "Há 1 mês",
      text: "Extremamente profissionais. Me senti segura durante todo o processo de inventário."
    },
    {
      name: "João Pedro",
      time: "Há 3 meses",
      text: "Melhor consultoria empresarial que já contratei. Salvou nossa operação trabalhista."
    },
    {
      name: "Beatriz Lima",
      time: "Há 5 dias",
      text: "Eficiência e transparência. Explicaram cada passo do processo de forma clara."
    }
  ];

  return (
    <section className="py-12 bg-slate-100 border-y border-slate-200 overflow-hidden gsap-section">
      <div className="container mx-auto px-6 mb-8 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <i className="fab fa-google text-2xl text-slate-800"></i>
          <div className="text-sm font-bold uppercase tracking-widest text-slate-400">Avaliações dos Clientes</div>
        </div>
        <div className="flex text-amber-500 space-x-1 items-center">
          <div className="flex space-x-1">
            <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i>
          </div>
          <span className="ml-2 text-slate-900 font-bold">4.9</span>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee hover:[animation-play-state:paused] flex w-max">
          <div className="flex space-x-6 pr-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="w-80 p-6 bg-white rounded-2xl shadow-sm border border-slate-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-slate-200 rounded-full mr-3"></div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">{t.name}</h4>
                    <p className="text-xs text-slate-400">{t.time}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 italic">"{t.text}"</p>
              </div>
            ))}
          </div>
          {/* Duplicate for infinite marquee effect */}
          <div className="flex space-x-6 pr-6">
            {testimonials.map((t, idx) => (
              <div key={`dup-${idx}`} className="w-80 p-6 bg-white rounded-2xl shadow-sm border border-slate-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-slate-200 rounded-full mr-3"></div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">{t.name}</h4>
                    <p className="text-xs text-slate-400">{t.time}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 italic">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
