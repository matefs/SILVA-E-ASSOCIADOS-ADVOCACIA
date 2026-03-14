export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 gsap-section">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 border-b border-slate-800 pb-12 mb-12">
        <div className="col-span-2">
          <div className="flex items-center space-x-2 text-white mb-6">
            <div className="w-8 h-8 bg-amber-600 flex items-center justify-center rounded">
              <span className="text-xl font-serif font-bold">S</span>
            </div>
            <span className="text-lg font-serif font-bold tracking-wider">SILVA & ASSOCIADOS</span>
          </div>
          <p className="max-w-sm leading-relaxed">
            Escritório com atuação nacional, dedicado à defesa rigorosa dos interesses de nossos constituintes com base na ética e na transparência total.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Navegação</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#inicio" className="hover:text-amber-500 transition-colors">Início</a></li>
            <li><a href="#sobre" className="hover:text-amber-500 transition-colors">O Escritório</a></li>
            <li><a href="#areas" className="hover:text-amber-500 transition-colors">Áreas de Atuação</a></li>
            <li><a href="#faq" className="hover:text-amber-500 transition-colors">Dúvidas</a></li>
            <li><a href="#contato" className="hover:text-amber-500 transition-colors">Agendar Consulta</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Siga-nos</h4>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 bg-slate-800 flex items-center justify-center rounded-full hover:bg-amber-600 hover:text-white transition-colors">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="w-10 h-10 bg-slate-800 flex items-center justify-center rounded-full hover:bg-amber-600 hover:text-white transition-colors">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="w-10 h-10 bg-slate-800 flex items-center justify-center rounded-full hover:bg-amber-600 hover:text-white transition-colors">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest font-medium">
        <p>&copy; 2026 Silva & Associados - OAB/SP 000.000. Todos os direitos reservados.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
}
