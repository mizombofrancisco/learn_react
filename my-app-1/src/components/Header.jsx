import React, { useState } from 'react';
import { ShieldCheck, User, Menu, X, Lock } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Simulação de estado de autenticação (pode substituir pelo seu contexto ou auth state)
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <header className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800 text-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* 1. Logótipo e Indicador de Segurança */}
          <div className="flex items-center space-x-3">
            <a href="/" className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-1">
              <div className="bg-emerald-600/20 p-2 rounded-lg border border-emerald-500/30">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
              </div>
              <span className="font-bold text-lg tracking-wide text-white">
                Secure<span className="text-emerald-400">App</span>
              </span>
            </a>
            
            {/* Tag visual de conexão segura / SSL */}
            <div className="hidden md:flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs text-slate-300">
              <Lock className="w-3 h-3 text-emerald-400" />
              <span>TLS 1.3 End-to-End</span>
            </div>
          </div>

          {/* 2. Navegação Principal (Desktop) */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="/dashboard" className="text-slate-300 hover:text-emerald-400 transition-colors">Dashboard</a>
            <a href="/assets" className="text-slate-300 hover:text-emerald-400 transition-colors">Ativos</a>
            <a href="/audits" className="text-slate-300 hover:text-emerald-400 transition-colors">Auditorias</a>
            <a href="/settings" className="text-slate-300 hover:text-emerald-400 transition-colors">Configurações</a>
          </nav>

          {/* 3. Ações do Utilizador / Perfil */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-3 pl-4 border-l border-slate-700">
                <div className="text-right">
                  <p className="text-xs font-semibold text-white">Utilizador Ativo</p>
                  <p className="text-[10px] text-emerald-400 flex items-center justify-end space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Sessão Segura</span>
                  </p>
                </div>
                <button 
                  aria-label="Perfil do utilizador" 
                  className="bg-slate-800 p-2 rounded-full border border-slate-700 hover:border-emerald-500 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <User className="w-5 h-5 text-slate-300" />
                </button>
              </div>
            ) : (
              <a 
                href="/login" 
                className="bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shadow-sm"
              >
                Entrar com Segurança
              </a>
            )}
          </div>

          {/* Botão do Menu Mobile */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Menu principal"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Menu Mobile Desdobrável */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 space-y-3">
          <div className="flex items-center space-x-2 py-2 px-3 rounded-md bg-slate-800/50 text-xs text-emerald-400 border border-slate-700/50">
            <Lock className="w-3.5 h-3.5" />
            <span>Ambiente Cifrado (TLS 1.3)</span>
          </div>
          <a href="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800">Dashboard</a>
          <a href="/assets" className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800">Ativos</a>
          <a href="/audits" className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800">Auditorias</a>
          <a href="/settings" className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800">Configurações</a>
          
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between px-3">
            <span className="text-sm text-slate-400">Estado da Sessão</span>
            <span className="text-xs px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">Ativa</span>
          </div>
        </div>
      )}
    </header>
  );
}