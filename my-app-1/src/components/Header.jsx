import { Sprout, Menu, X, ShoppingCart, PhoneCall } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--border)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logótipo / Marca MizomboAgro */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--accent-bg)] border border-[var(--accent-border)] flex items-center justify-center text-[var(--accent)] shadow-sm">
              <Sprout className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="text-xl font-bold tracking-tight text-[var(--text-h)] block">
                Mizombo<span className="text-[var(--accent)]">Agro</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[var(--text)] block font-medium">
                Cultivo & Entrega Direta
              </span>
            </div>
          </div>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#produtos" className="text-sm font-medium text-[var(--text)] hover:text-[var(--text-h)] transition-colors">
              Nossos Produtos
            </a>
            <a href="#colheita" className="text-sm font-medium text-[var(--text)] hover:text-[var(--text-h)] transition-colors">
              Safra Atual
            </a>
            <a href="#entrega" className="text-sm font-medium text-[var(--text)] hover:text-[var(--text-h)] transition-colors">
              Logística & Entrega
            </a>
            <a href="#contacto" className="text-sm font-medium text-[var(--text)] hover:text-[var(--text-h)] transition-colors">
              Encomendar
            </a>
          </nav>

          {/* Botão de Ação */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#contacto" className="bg-[var(--accent)] hover:opacity-95 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-all shadow-sm flex items-center space-x-2">
              <ShoppingCart className="w-4 h-4" />
              <span>Fazer Encomenda</span>
            </a>
          </div>

          {/* Botão do Menu Mobile */}
          <div className="flex md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[var(--code-bg)] text-[var(--text-h)] border border-[var(--border)]"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Menu Desdobrável para Telemóveis */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--bg)] border-b border-[var(--border)] px-4 pt-2 pb-6 space-y-3 text-left">
          <a href="#produtos" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-medium text-[var(--text)] hover:text-[var(--text-h)]">Nossos Produtos</a>
          <a href="#colheita" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-medium text-[var(--text)] hover:text-[var(--text-h)]">Safra Atual</a>
          <a href="#entrega" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-medium text-[var(--text)] hover:text-[var(--text-h)]">Logística & Entrega</a>
          <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-medium text-[var(--text)] hover:text-[var(--text-h)]">Encomendar</a>
          <div className="pt-2">
            <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="w-full bg-[var(--accent)] text-white text-sm font-medium py-2.5 rounded-xl text-center block">
              Fazer Encomenda
            </a>
          </div>
        </div>
      )}
    </header>
  );
}