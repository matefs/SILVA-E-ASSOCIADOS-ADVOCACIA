import { useState, type FormEvent } from 'react';

export default function Contact() {
  const [btnText, setBtnText] = useState('Solicitar Análise Jurídica');
  const [btnStatus, setBtnStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setBtnStatus('loading');
    setBtnText('Enviando...');
    
    setTimeout(() => {
      setBtnStatus('success');
      setBtnText('Mensagem Enviada!');
      (e.target as HTMLFormElement).reset();
      
      setTimeout(() => {
        setBtnStatus('idle');
        setBtnText('Solicitar Análise Jurídica');
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contato" className="py-24 bg-slate-900 gsap-section">
      <div className="container mx-auto px-6">
        <div className="w-full bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="md:w-5/12 bg-slate-800 text-white p-12">
            <h3 className="text-3xl mb-8 font-serif">Vamos conversar?</h3>
            <p className="text-slate-400 mb-10 leading-relaxed">
              Nossa equipe entrará em contato em menos de 24 horas para uma pré-análise do seu caso.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <i className="fas fa-phone text-amber-500 mt-1"></i>
                <div>
                  <p className="text-xs uppercase font-bold text-slate-500 tracking-widest">Telefone</p>
                  <p className="text-lg font-medium">+55 (11) 98765-4321</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <i className="fas fa-envelope text-amber-500 mt-1"></i>
                <div>
                  <p className="text-xs uppercase font-bold text-slate-500 tracking-widest">E-mail</p>
                  <p className="text-lg font-medium">juridico@silva.adv.br</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <i className="fas fa-location-dot text-amber-500 mt-1"></i>
                <div>
                  <p className="text-xs uppercase font-bold text-slate-500 tracking-widest">Endereço</p>
                  <p className="text-lg font-medium">Alameda Santos, 1200 - Jardins, São Paulo/SP</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-7/12 p-12 bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-400">Nome Completo</label>
                  <input type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:ring-2 focus:ring-amber-600 outline-none transition" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-400">WhatsApp</label>
                  <input type="tel" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:ring-2 focus:ring-amber-600 outline-none transition" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-400">E-mail</label>
                <input type="email" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:ring-2 focus:ring-amber-600 outline-none transition" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-400">Assunto</label>
                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:ring-2 focus:ring-amber-600 outline-none transition cursor-pointer text-slate-700">
                  <option>Direito Civil</option>
                  <option>Trabalhista</option>
                  <option>Empresarial</option>
                  <option>Outros</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-400">Breve relato</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:ring-2 focus:ring-amber-600 outline-none transition"></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={btnStatus !== 'idle'}
                className={`w-full font-bold py-4 rounded-lg shadow-lg transition transform active:scale-95 text-white ${
                  btnStatus === 'success' ? 'bg-green-600 hover:bg-green-700' : 'bg-slate-900 hover:bg-slate-800'
                }`}
              >
                {btnText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
