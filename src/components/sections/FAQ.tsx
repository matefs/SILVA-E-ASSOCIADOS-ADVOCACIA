import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "Quanto tempo demora para um processo ser finalizado?",
    answer: "O tempo varia conforme a complexidade e a instância. Processos digitais costumam ser mais ágeis, mas nossa equipe trabalha para garantir que sua causa avance o mais rápido possível."
  },
  {
    question: "Vocês realizam atendimentos por videoconferência?",
    answer: "Sim. Atendemos clientes em todo o Brasil e no exterior através de plataformas de vídeo, garantindo a mesma segurança e sigilo de uma reunião presencial."
  },
  {
    question: "Quais documentos preciso separar para a primeira consulta?",
    answer: "Geralmente RG, CPF e comprovante de residência. Documentos específicos da causa (contratos, prints, fotos) ajudam muito na análise inicial."
  },
  {
    question: "É cobrado valor para a primeira reunião de análise?",
    answer: "A triagem inicial para entender a viabilidade do caso é gratuita. Consultas de parecer jurídico aprofundado seguem a tabela de honorários da OAB."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white gsap-section">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl text-center mb-12 font-serif text-slate-900">Dúvidas Frequentes</h2>
        <div className="space-y-4">
          {faqData.map((faq, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div 
                key={idx} 
                className={`faq-item border border-slate-200 rounded-lg overflow-hidden transition-all duration-300 ${isActive ? 'faq-item-active border-slate-300 shadow-sm' : ''}`}
              >
                <button 
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-slate-50 transition"
                >
                  <span className="font-bold text-slate-800">{faq.question}</span>
                  <div className={`text-amber-600 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}>
                    {isActive ? <Minus size={24} /> : <Plus size={24} />}
                  </div>
                </button>
                <div 
                  className={`faq-answer px-6 bg-slate-50 transition-all duration-300 ease-in-out ${isActive ? 'max-h-[200px] py-4' : 'max-h-0'}`}
                >
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
