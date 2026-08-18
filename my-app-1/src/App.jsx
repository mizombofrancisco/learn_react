import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header' // <-- IMPORTAÇÃO CORRETA

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="min-h-screen bg-slate-950 text-slate-100">
      
      {/* 1. O Cabeçalho fica aqui no topo */}
      <Header />

      {/* 2. O resto do conteúdo da sua página */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-xl font-semibold mb-4">Painel Principal</h2>
        <p className="text-slate-400">
          Esta é a área onde o conteúdo dinâmico da sua aplicação será renderizado.
        </p>
      </main>

    </div>
    </>
  )
}

export default App;