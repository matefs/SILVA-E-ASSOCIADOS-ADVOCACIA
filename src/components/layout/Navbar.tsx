import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-slate-900/95 backdrop-blur-sm text-white z-50 border-b border-slate-800 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="w-10 h-10 bg-amber-600 flex items-center justify-center rounded">
            <span className="text-2xl font-serif font-bold">S</span>
          </div>
          <span className="text-xl font-serif font-bold tracking-wider">SILVA & ASSOCIADOS</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide uppercase">
          <a href="#inicio" className="hover:text-amber-500 transition-colors">Início</a>
          <a href="#sobre" className="hover:text-amber-500 transition-colors">O Escritório</a>
          <a href="#areas" className="hover:text-amber-500 transition-colors">Atuação</a>
          <a href="#faq" className="hover:text-amber-500 transition-colors">Dúvidas</a>
          <a href="#contato" className="bg-amber-600 hover:bg-amber-700 px-6 py-2.5 rounded shadow-lg transition-colors"> Consultoria </a>
        </div>

        <button 
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-8 space-y-4 animate-in slide-in-from-top-4 duration-300">
          <a href="#inicio" onClick={() => setIsOpen(false)} className="block text-lg hover:text-amber-500 transition-colors">Início</a>
          <a href="#sobre" onClick={() => setIsOpen(false)} className="block text-lg hover:text-amber-500 transition-colors">O Escritório</a>
          <a href="#areas" onClick={() => setIsOpen(false)} className="block text-lg hover:text-amber-500 transition-colors">Atuação</a>
          <a href="#faq" onClick={() => setIsOpen(false)} className="block text-lg hover:text-amber-500 transition-colors">Dúvidas</a>
          <a href="#contato" onClick={() => setIsOpen(false)} className="block text-lg text-amber-500 font-bold transition-colors">Falar com Advogado</a>
        </div>
      )}
    </nav>
  );
}
