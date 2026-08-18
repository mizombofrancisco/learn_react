import { useState } from 'react';
import Header from './components/Header';
import { 
  Sprout, Truck, Wheat, CheckCircle2, ArrowRight, 
  PackageCheck, ShieldCheck, PhoneCall, MapPin, Calendar, Scale,
  Handshake, Sparkles, Building2, Leaf, Cpu, Mail, Globe
} from 'lucide-react';

export default function App() {
  const [categoria, setCategoria] = useState('todos');

  return (
    <div className="min-h-screen text-[var(--text)] flex flex-col">
      
      {/* 1. Cabeçalho Customizado */}
      <Header />

      {/* 2. Conteúdo Principal */}
      <main className="flex-1 w-full" id="produtos">
        
        {/* Hero Section - Focado em Colheita e Cultivo */}
        <section className="relative overflow-hidden py-20 lg:py-32 border-b border-[var(--border)] bg-wheat-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Apresentação textual */}
              <div className="space-y-6 text-left">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[var(--accent-bg)] border border-[var(--accent-border)] text-[var(--text-h)] text-xs font-medium">
                  <Sprout className="w-4 h-4 text-[var(--accent)]" />
                  <span>MizomboAgro • Da Terra Direto para o seu Armazém</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-h)] leading-tight">
                  Cultivo de Excelência e <span className="text-[var(--accent)]">Entrega Garantida</span>
                </h1>
                
                <p className="text-base sm:text-lg text-[var(--text)] leading-relaxed">
                  Produzimos e comercializamos grãos e cereais de alta qualidade (trigo, feijão, milho e leguminosas). Garantimos colheitas rigorosamente selecionadas e entrega rápida em grande escala para mercados, indústrias e parceiros.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
                  <a href="#produtos-lista" className="bg-[var(--accent)] hover:opacity-95 text-white font-medium px-6 py-3 rounded-xl transition-all shadow-md flex items-center justify-center space-x-2">
                    <span>Ver Produtos Agrícolas</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="#contacto" className="bg-[var(--code-bg)] hover:opacity-80 text-[var(--text-h)] border border-[var(--border)] font-medium px-6 py-3 rounded-xl transition-all flex items-center justify-center">
                    Solicitar Cotação
                  </a>
                </div>
              </div>

              {/* Destaque Visual de Safra / Grãos */}
              <div className="bg-[var(--code-bg)]/80 border border-[var(--border)] rounded-2xl p-6 shadow-xl backdrop-blur-sm agro-card-glow text-left space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[var(--border)]">
                  <h3 className="text-sm font-semibold text-[var(--text-h)] uppercase tracking-wider">Safra Disponível 2026</h3>
                  <span className="flex items-center space-x-1.5 text-xs text-[var(--text-h)] bg-[var(--accent-bg)] px-2.5 py-1 rounded-full border border-[var(--accent-border)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span>
                    <span>Colheita Fresca</span>
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[var(--bg)] p-4 rounded-xl border border-[var(--border)]">
                    <span className="text-xs text-[var(--text)] block mb-1">Trigo Selecionado</span>
                    <p className="text-xl font-bold text-[var(--text-h)]">Grão Duro</p>
                    <span className="text-[10px] text-[var(--accent)] font-medium">Pronto para entrega</span>
                  </div>

                  <div className="bg-[var(--bg)] p-4 rounded-xl border border-[var(--border)]">
                    <span className="text-xs text-[var(--text)] block mb-1">Feijão Nheengatu / Macá</span>
                    <p className="text-xl font-bold text-[var(--text-h)]">Calibre A</p>
                    <span className="text-[10px] text-[var(--accent)] font-medium">Sacos de 50kg</span>
                  </div>

                  <div className="bg-[var(--bg)] p-4 rounded-xl border border-[var(--border)]">
                    <span className="text-xs text-[var(--text)] block mb-1">Milho Amarelo</span>
                    <p className="text-xl font-bold text-[var(--text-h)]">Safra Seca</p>
                    <span className="text-[10px] text-[var(--accent)] font-medium">Ideal para ração e consumo</span>
                  </div>

                  <div className="bg-[var(--bg)] p-4 rounded-xl border border-[var(--border)]">
                    <span className="text-xs text-[var(--text)] block mb-1">Logística</span>
                    <p className="text-xl font-bold text-[var(--text-h)]">Frota Própria</p>
                    <span className="text-[10px] text-[var(--accent)] font-medium">Entrega pontual</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Secção de Catálogo de Produtos Agrícolas */}
        <section id="produtos-lista" className="py-20 bg-harvest-pattern border-b border-[var(--border)] text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-h)] mb-3">Nossos Produtos e Culturas</h2>
              <p className="text-[var(--text)] text-sm sm:text-base">Colhidos diretamente dos nossos campos com padrões exigentes de qualidade, limpeza e empacotamento.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Produto 1: Trigo */}
              <div className="bg-[var(--code-bg)] border border-[var(--border)] p-6 rounded-2xl agro-card-glow flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent-bg)] border border-[var(--accent-border)] flex items-center justify-center text-[var(--accent)] mb-4">
                    <Wheat className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-h)] mb-2">Trigo de Alta Qualidade</h3>
                  <p className="text-sm text-[var(--text)] mb-4">Grãos limpos, secos e testados laboratorialmente, ideais para moagem e panificação industrial.</p>
                </div>
                <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[var(--accent)]">Disponível em grandes lotes</span>
                  <a href="#contacto" className="text-xs font-bold text-[var(--text-h)] hover:text-[var(--accent)] flex items-center space-x-1">
                    <span>Pedir Cotação</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Produto 2: Feijão */}
              <div className="bg-[var(--code-bg)] border border-[var(--border)] p-6 rounded-2xl agro-card-glow flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent-bg)] border border-[var(--accent-border)] flex items-center justify-center text-[var(--accent)] mb-4">
                    <Sprout className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-h)] mb-2">Feijão Selecionado</h3>
                  <p className="text-sm text-[var(--text)] mb-4">Variedades de feijão rico em nutrientes, limpo de impurezas e embalado adequadamente para conservação.</p>
                </div>
                <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[var(--accent)]">Sacos de 25kg e 50kg</span>
                  <a href="#contacto" className="text-xs font-bold text-[var(--text-h)] hover:text-[var(--accent)] flex items-center space-x-1">
                    <span>Pedir Cotação</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Produto 3: Milho e Outros */}
              <div className="bg-[var(--code-bg)] border border-[var(--border)] p-6 rounded-2xl agro-card-glow flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent-bg)] border border-[var(--accent-border)] flex items-center justify-center text-[var(--accent)] mb-4">
                    <Scale className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-h)] mb-2">Milho em Grão e Outros</h3>
                  <p className="text-sm text-[var(--text)] mb-4">Milho graúdo cultivado em solo fértil, perfeito para indústria de rações, moagem ou consumo geral.</p>
                </div>
                <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[var(--accent)]">Pronta entrega</span>
                  <a href="#contacto" className="text-xs font-bold text-[var(--text-h)] hover:text-[var(--accent)] flex items-center space-x-1">
                    <span>Pedir Cotação</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Secção de Portfólio Expandido: Outros Produtos e Culturas */}
        <section className="py-20 border-b border-[var(--border)] text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[var(--accent-bg)] border border-[var(--accent-border)] text-[var(--text-h)] text-xs font-medium mb-3">
                <Leaf className="w-4 h-4 text-[var(--accent)]" />
                <span>Portfólio Diversificado</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-h)] mb-3">Outros Produtos do Ecossistema Agrícola</h2>
              <p className="text-[var(--text)] text-sm sm:text-base">Expandindo a nossa produção para atender às crescentes exigências do mercado agroalimentar e industrial.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[var(--code-bg)] border border-[var(--border)] p-5 rounded-2xl agro-card-glow">
                <h3 className="text-base font-semibold text-[var(--text-h)] mb-1">Soja em Grão</h3>
                <p className="text-xs text-[var(--text)] mb-3">Elevado teor proteico, destinado à indústria de óleos alimentares e formulação de rações animais.</p>
                <span className="text-[10px] font-bold text-[var(--accent)] uppercase tracking-wider">Lotes Industriais</span>
              </div>

              <div className="bg-[var(--code-bg)] border border-[var(--border)] p-5 rounded-2xl agro-card-glow">
                <h3 className="text-base font-semibold text-[var(--text-h)] mb-1">Girassol</h3>
                <p className="text-xs text-[var(--text)] mb-3">Sementes oleaginosas limpas e selecionadas para extração de óleo vegetal refinado de alta qualidade.</p>
                <span className="text-[10px] font-bold text-[var(--accent)] uppercase tracking-wider">Safra Controlada</span>
              </div>

              <div className="bg-[var(--code-bg)] border border-[var(--border)] p-5 rounded-2xl agro-card-glow">
                <h3 className="text-base font-semibold text-[var(--text-h)] mb-1">Arroz Local</h3>
                <p className="text-xs text-[var(--text)] mb-3">Cultura de regadio produzida sob rigorosos padrões de frescura e empacotamento comercial.</p>
                <span className="text-[10px] font-bold text-[var(--accent)] uppercase tracking-wider">Sacos de 25kg</span>
              </div>

              <div className="bg-[var(--code-bg)] border border-[var(--border)] p-5 rounded-2xl agro-card-glow">
                <h3 className="text-base font-semibold text-[var(--text-h)] mb-1">Hortícolas e Raízes</h3>
                <p className="text-xs text-[var(--text)] mb-3">Tubérculos e legumes frescos colhidos e escoados diariamente para mercados retalhistas.</p>
                <span className="text-[10px] font-bold text-[var(--accent)] uppercase tracking-wider">Frescor Diário</span>
              </div>
            </div>
          </div>
        </section>

        {/* Secção de Parcerias Estratégicas (Wonetino Group & Eventos) */}
        <section className="py-20 bg-[var(--code-bg)]/40 border-b border-[var(--border)] text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[var(--accent-bg)] border border-[var(--accent-border)] text-[var(--text-h)] text-xs font-medium">
                  <Handshake className="w-4 h-4 text-[var(--accent)]" />
                  <span>Alianças Corporativas e Eventos</span>
                </div>
                <h2 className="text-3xl font-bold text-[var(--text-h)]">Parceria Estratégica com o Wonetino Group</h2>
                <p className="text-sm sm:text-base text-[var(--text)] leading-relaxed">
                  A MizomboAgro fortalece a sua presença no mercado através de uma sólida parceria institucional com o <strong>Wonetino Group</strong>. Juntos, impulsionamos o desenvolvimento agroindustrial, participamos em feiras de negócios do setor e promovemos eventos de networking focado na inovação e segurança alimentar.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span className="text-sm text-[var(--text)]">Participação conjunta em feiras agrícolas, fóruns de investimento e exposições comerciais.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span className="text-sm text-[var(--text)]">Sinfonias logísticas e expansão da cadeia de distribuição em parceria com o Wonetino Group.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span className="text-sm text-[var(--text)]">Eventos institucionais direcionados a investidores, parceiros de retalho e indústrias parceiras.</span>
                  </div>
                </div>
              </div>

              <div className="bg-[var(--code-bg)] border border-[var(--border)] p-8 rounded-2xl shadow-lg space-y-6">
                <h3 className="text-lg font-semibold text-[var(--text-h)] border-b border-[var(--border)] pb-4 flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-[var(--accent)]" />
                  <span>Próximos Eventos e Atividades</span>
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-[var(--bg)] rounded-xl border border-[var(--border)]">
                    <span className="text-[10px] font-bold text-[var(--accent)] uppercase tracking-wider block mb-1">Outubro 2026</span>
                    <h4 className="text-sm font-semibold text-[var(--text-h)]">Fórum de Agronegócio Mizombo & Wonetino</h4>
                    <p className="text-xs text-[var(--text)] mt-1">Encontro corporativo para apresentação de novas oportunidades de fornecimento em grande escala.</p>
                  </div>
                  <div className="p-4 bg-[var(--bg)] rounded-xl border border-[var(--border)]">
                    <span className="text-[10px] font-bold text-[var(--accent)] uppercase tracking-wider block mb-1">Novembro 2026</span>
                    <h4 className="text-sm font-semibold text-[var(--text-h)]">Feira de Inovação e Tecnologia Agrícola</h4>
                    <p className="text-xs text-[var(--text)] mt-1">Exibição de práticas sustentáveis de cultivo e novas linhas de grãos selecionados.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Secção de Futuros Projetos */}
        <section className="py-20 border-b border-[var(--border)] text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[var(--accent-bg)] border border-[var(--accent-border)] text-[var(--text-h)] text-xs font-medium mb-3">
                <Sparkles className="w-4 h-4 text-[var(--accent)]" />
                <span>Inovação Contínua</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-h)] mb-3">Futuros Projetos e Investimentos</h2>
              <p className="text-[var(--text)] text-sm sm:text-base">Planeando o futuro do setor agroindustrial com foco em tecnologia de ponta e sustentabilidade ambiental.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[var(--code-bg)] border border-[var(--border)] p-6 rounded-2xl agro-card-glow">
                <div className="w-12 h-12 rounded-xl bg-[var(--accent-bg)] border border-[var(--accent-border)] flex items-center justify-center text-[var(--accent)] mb-4">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-h)] mb-2">Complexo de Silos Verticais</h3>
                <p className="text-sm text-[var(--text)]">Construção de armazéns inteligentes com controlo automatizado de temperatura e humidade para preservação a longo prazo de grandes volumes de grãos.</p>
              </div>

              <div className="bg-[var(--code-bg)] border border-[var(--border)] p-6 rounded-2xl agro-card-glow">
                <div className="w-12 h-12 rounded-xl bg-[var(--accent-bg)] border border-[var(--accent-border)] flex items-center justify-center text-[var(--accent)] mb-4">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-h)] mb-2">Agricultura de Precisão (IoT)</h3>
                <p className="text-sm text-[var(--text)]">Implementação de sensores em campo e sistemas de rega automatizados acionados por energia solar para otimização de recursos hídricos.</p>
              </div>

              <div className="bg-[var(--code-bg)] border border-[var(--border)] p-6 rounded-2xl agro-card-glow">
                <div className="w-12 h-12 rounded-xl bg-[var(--accent-bg)] border border-[var(--accent-border)] flex items-center justify-center text-[var(--accent)] mb-4">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-h)] mb-2">Plataforma Digital B2B</h3>
                <p className="text-sm text-[var(--text)]">Lançamento de portal de encomendas online integrado com o Wonetino Group para rastreio em tempo real de frotas e cotações instantâneas.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Secção de Logística e Entrega */}
        <section id="entrega" className="py-20 border-b border-[var(--border)] text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[var(--accent-bg)] border border-[var(--accent-border)] text-[var(--text-h)] text-xs font-medium">
                  <Truck className="w-4 h-4 text-[var(--accent)]" />
                  <span>Logística Rápida e Segura</span>
                </div>
                <h2 className="text-3xl font-bold text-[var(--text-h)]">Da nossa lavoura diretamente para o seu armazém ou negócio</h2>
                <p className="text-sm sm:text-base text-[var(--text)] leading-relaxed">
                  Contamos com uma estrutura de transporte dedicada para garantir que os grãos cheguem ao destino final sem perdas, protegidos da humidade e dentro dos prazos estabelecidos.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span className="text-sm text-[var(--text)]">Entrega pontual assegurada por frota própria de camiões e viaturas de carga.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span className="text-sm text-[var(--text)]">Embalagens resistentes que preservam a qualidade e o frescor dos cereais.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span className="text-sm text-[var(--text)]">Atendimento personalizado para mercados retalhistas, grossistas e indústrias.</span>
                  </div>
                </div>
              </div>

              <div className="bg-[var(--code-bg)] border border-[var(--border)] p-8 rounded-2xl shadow-lg space-y-6">
                <h3 className="text-lg font-semibold text-[var(--text-h)] border-b border-[var(--border)] pb-4 flex items-center space-x-2">
                  <PackageCheck className="w-5 h-5 text-[var(--accent)]" />
                  <span>Vantagens de Comprar Connosco</span>
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-[var(--bg)] rounded-xl border border-[var(--border)]">
                    <ShieldCheck className="w-5 h-5 text-[var(--accent)] shrink-0" />
                    <span className="text-sm font-medium text-[var(--text-h)]">Garantia de pureza e grãos rigorosamente limpos</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-[var(--bg)] rounded-xl border border-[var(--border)]">
                    <Scale className="w-5 h-5 text-[var(--accent)] shrink-0" />
                    <span className="text-sm font-medium text-[var(--text-h)]">Pesagem certificada em cada lote entregue</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-[var(--bg)] rounded-xl border border-[var(--border)]">
                    <Truck className="w-5 h-5 text-[var(--accent)] shrink-0" />
                    <span className="text-sm font-medium text-[var(--text-h)]">Rotas de entrega regulares para todo o território</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Secção de Contacto e Encomendas */}
        <section id="contacto" className="py-20 text-center bg-[var(--code-bg)]/30">
          <div className="max-w-3xl mx-auto px-4">
            <div className="w-12 h-12 rounded-xl bg-[var(--accent-bg)] border border-[var(--accent-border)] flex items-center justify-center text-[var(--accent)] mx-auto mb-4">
              <PhoneCall className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-[var(--text-h)] mb-4">Faça a sua Encomenda ou Solicite Cotação</h2>
            <p className="text-[var(--text)] text-sm sm:text-base mb-8">
              Precisa de abastecer o seu comércio com trigo, feijão ou milho de alta qualidade? Entre em contacto connosco agora mesmo e garanta os melhores preços de safra.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+244000000000" className="bg-[var(--accent)] hover:opacity-95 text-white font-medium px-8 py-4 rounded-xl transition-all shadow-lg text-base flex items-center space-x-2 w-full sm:w-auto justify-center">
                <PhoneCall className="w-5 h-5" />
                <span>Ligar para Encomendas</span>
              </a>
              <a href="mailto:geral@mizomboagro.com" className="bg-[var(--code-bg)] hover:opacity-85 text-[var(--text-h)] border border-[var(--border)] font-medium px-8 py-4 rounded-xl transition-all text-base w-full sm:w-auto justify-center flex items-center">
                Enviar E-mail Comercial
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* 3. Rodapé Profissional MizomboAgro */}
      <footer className="bg-[var(--code-bg)] border-t border-[var(--border)] pt-16 pb-8 text-left text-sm text-[var(--text)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[var(--border)]">
            
            {/* Coluna 1: Sobre / Identidade */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-[var(--accent-bg)] border border-[var(--accent-border)] flex items-center justify-center text-[var(--accent)]">
                  <Sprout className="w-4 h-4" />
                </div>
                <span className="font-bold text-[var(--text-h)] text-base tracking-wide">MizomboAgro</span>
              </div>
              <p className="text-xs text-[var(--text)] leading-relaxed">
                Da terra diretamente para o seu armazém. Produção e fornecimento em grande escala de grãos, cereais e leguminosas com padrão de qualidade superior.
              </p>
              <div className="inline-flex items-center space-x-2 text-xs font-medium text-[var(--accent)] bg-[var(--accent-bg)] px-3 py-1 rounded-full border border-[var(--accent-border)]">
                <Handshake className="w-3.5 h-3.5" />
                <span>Parceiro Oficial: Wonetino Group</span>
              </div>
            </div>

            {/* Coluna 2: Navegação Rápida */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-[var(--text-h)] uppercase tracking-wider">Links Rápidos</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#produtos-lista" className="hover:text-[var(--accent)] transition-colors">Produtos e Culturas</a></li>
                <li><a href="#entrega" className="hover:text-[var(--accent)] transition-colors">Logística e Distribuição</a></li>
                <li><a href="#contacto" className="hover:text-[var(--accent)] transition-colors">Solicitar Cotação</a></li>
                <li><a href="#produtos" className="hover:text-[var(--accent)] transition-colors">Safra Disponível 2026</a></li>
              </ul>
            </div>

            {/* Coluna 3: Culturas Principais */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-[var(--text-h)] uppercase tracking-wider">Culturas & Portfólio</h4>
              <ul className="space-y-2 text-xs">
                <li className="flex items-center space-x-1.5"><span className="w-1 h-1 rounded-full bg-[var(--accent)]"></span><span>Trigo Selecionado (Grão Duro)</span></li>
                <li className="flex items-center space-x-1.5"><span className="w-1 h-1 rounded-full bg-[var(--accent)]"></span><span>Feijão (Nheengatu / Macá)</span></li>
                <li className="flex items-center space-x-1.5"><span className="w-1 h-1 rounded-full bg-[var(--accent)]"></span><span>Milho Amarelo e Seco</span></li>
                <li className="flex items-center space-x-1.5"><span className="w-1 h-1 rounded-full bg-[var(--accent)]"></span><span>Soja e Girassol Industrial</span></li>
              </ul>
            </div>

            {/* Coluna 4: Contacto Direto */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-[var(--text-h)] uppercase tracking-wider">Contactos Comerciais</h4>
              <ul className="space-y-2.5 text-xs">
                <li className="flex items-center space-x-2">
                  <PhoneCall className="w-4 h-4 text-[var(--accent)] shrink-0" />
                  <span>+244 000 000 000</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-[var(--accent)] shrink-0" />
                  <span>geral@mizomboagro.com</span>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                  <span>Centros de Produção e Armazéns Agrícolas</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Barra inferior de Copyright e Termos */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--text)] gap-4">
            <p>&copy; 2026 MizomboAgro & Wonetino Group. Todos os direitos reservados.</p>
            <div className="flex items-center space-x-6">
              <span className="hover:text-[var(--accent)] transition-colors cursor-pointer">Política de Privacidade</span>
              <span className="hover:text-[var(--accent)] transition-colors cursor-pointer">Termos de Fornecimento</span>
              <span className="hover:text-[var(--accent)] transition-colors cursor-pointer">Segurança Alimentar</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}