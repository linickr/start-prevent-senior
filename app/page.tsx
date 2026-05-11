import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import {
  FaClock, FaHandHoldingUsd, FaInfinity, FaUnlock,
  FaCheckCircle, FaStar, FaWhatsapp, FaHospital, FaFlask,
} from 'react-icons/fa';

export default function HomePage() {
  return (
    <>
      {/* ========== HERO SECTION ========== */}
      {/* No WP original: Lado esquerdo tem o formulário, direito tem o texto + logo Prevent Senior */}
      <section className="relative pt-28 pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-brand-blue">
        {/* Padrão de fundo decorativo */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'url(/images/bg-pattern.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LADO ESQUERDO - Formulário de cotação */}
            <div id="agendeaqui" className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl order-2 lg:order-1">
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-blue">
                  Preencha o formulário e receba uma cotação grátis
                </h2>
                <p className="text-gray-600 text-sm mt-2">
                  Desde já agradecemos seu contato, estamos separando o plano de seguros personalizado para seu perfil.
                </p>
              </div>
              <QuoteForm />
            </div>

            {/* LADO DIREITO - Texto + Logo Prevent Senior */}
            <div className="text-white animate-slide-up order-1 lg:order-2">
              <p className="text-brand-green font-semibold uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-brand-green"></span>
                Receba uma cotação hoje ainda
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Planos <span className="text-brand-green">Prevent Senior</span> personalizados para seu perfil
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Receba um atendimento humanizado, que realmente preza por oferecer o seguro certo para sua vida.
              </p>

              {/* Logos Prevent Senior + Start */}
              <div className="flex items-center gap-8 mb-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/prevent-senior-white.png"
                  alt="Prevent Senior"
                  className="h-12 md:h-16 w-auto"
                  style={{ mixBlendMode: 'screen' }}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logo-start-white.png"
                  alt="Start Corretora de Seguros"
                  className="h-12 md:h-16 w-auto"
                  style={{ mixBlendMode: 'screen' }}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#agendeaqui"
                  className="bg-brand-green hover:bg-brand-green-light text-brand-blue font-bold px-8 py-4 rounded-full transition-all shadow-xl hover:shadow-2xl text-center"
                >
                  Fale conosco
                </a>
                <a
                  href="https://wa.me/5521996703834?text=Ol%C3%A1%2C+vim+do+site+e+gostaria+de+ajuda+sobre+seguro+de+vida%21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white font-bold px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2"
                >
                  <FaWhatsapp size={18} /> 21 99670-3834
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== BLOCO DE CONFIANÇA - 98% Clientes Satisfeitos + Avatares ========== */}
      {/* No WP original: as 3 imagens (150x150) aparecem aqui como avatares circulares */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Esquerda - Logos Start (como aparecem no WP) */}
            <div>
              <div className="flex flex-col gap-6">
                <div className="bg-brand-blue rounded-2xl p-8 flex items-center justify-center gap-8">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/prevent-senior-white.png"
                    alt="Prevent Senior"
                    className="h-16 md:h-20 w-auto"
                    style={{ mixBlendMode: 'screen' }}
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/logo-start-white.png"
                    alt="Start Corretora de Seguros"
                    className="h-16 md:h-20 w-auto"
                    style={{ mixBlendMode: 'screen' }}
                  />
                </div>

                {/* Avatares de clientes (exatamente como no WP - 3 circles 150x150) */}
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/client-1.jpg"
                      alt="Cliente satisfeito"
                      className="w-14 h-14 rounded-full border-4 border-white object-cover shadow-md"
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/client-2.jpg"
                      alt="Cliente satisfeito"
                      className="w-14 h-14 rounded-full border-4 border-white object-cover shadow-md"
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/client-3.jpg"
                      alt="Cliente satisfeito"
                      className="w-14 h-14 rounded-full border-4 border-white object-cover shadow-md"
                    />
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-brand-green-dark leading-none">98%</p>
                    <p className="text-brand-blue font-semibold text-sm">Clientes Satisfeitos</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direita - Segundo formulário "Como podemos te ajudar" */}
            <div className="bg-brand-gray-light rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-brand-blue mb-2">
                Como podemos te ajudar com seu seguro?
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Solicite uma cotação personalizada e descubra o plano ideal.
              </p>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* ========== NÚMEROS DA PREVENT SENIOR ========== */}
      <section className="py-20 bg-brand-gray-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title mb-4">Números da Prevent Senior no Brasil</h2>
            <p className="text-gray-600 text-lg">
              Com certeza uma das seguradoras mais conhecidas do país, e que trabalha com alto nível de confiabilidade.
            </p>
          </div>

          {/* Progress bars (igual ao WP - Taxa de Avaliação e Investimento) */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-brand-blue">Taxa de Avaliação</span>
                <span className="font-bold text-brand-green-dark">98%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-brand-green to-brand-green-dark h-3 rounded-full" style={{ width: '98%' }}></div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-brand-blue">Investimento</span>
                <span className="font-bold text-brand-green-dark">95%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-brand-green to-brand-green-dark h-3 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
          </div>

          {/* 4 Stats (igual ao WP) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '50+', label: 'Unidades Próprias' },
              { value: '500K+', label: 'Beneficiários Satisfeitos' },
              { value: '20K+', label: 'Colaboradores Treinados' },
              { value: '28+', label: '28 anos de Experiência' },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow text-center">
                <p className="text-4xl md:text-5xl font-bold text-brand-green-dark mb-2">{stat.value}</p>
                <p className="text-brand-blue font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== VANTAGENS - 4 cards ========== */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <p className="section-subtitle">Temos a melhor oferta</p>
              <h2 className="section-title">As principais vantagens da Prevent Senior:</h2>
            </div>
            <div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Entenda porque somos a opção que mais se encaixa com sua realidade, oferecemos benefícios únicos para você, e nossos clientes.
              </p>
              <div className="bg-brand-gray-light p-5 rounded-2xl inline-block">
                <p className="text-sm font-semibold text-brand-blue mb-1">Horário de Atendimento</p>
                <p className="text-3xl font-bold text-brand-green-dark flex items-center gap-2">
                  <FaClock /> 24/7
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FaCheckCircle,
                title: 'Carências Reduzidas',
                desc: 'No Prevent Mais a carência pode ser reduzida após avaliação de período no plano anterior.',
              },
              {
                icon: FaHandHoldingUsd,
                title: 'Sem Taxa de Adesão',
                desc: 'Ou seja, nenhum tipo taxa extra é cobrada antes da contratação do plano.',
              },
              {
                icon: FaInfinity,
                title: 'Sem reajuste',
                desc: 'Sem reajuste por mudança de faixa etária após 44 anos e por tempo ilimitado.',
              },
              {
                icon: FaUnlock,
                title: 'Sem Fidelidade',
                desc: 'Em qualquer momento você pode cancelar o seu plano de saúde sem multas ou taxas.',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="card group hover:border-brand-green border-2 border-transparent">
                  <div className="w-14 h-14 bg-green-50 group-hover:bg-brand-green rounded-2xl flex items-center justify-center mb-4 transition-colors">
                    <Icon className="text-brand-green-dark group-hover:text-brand-blue transition-colors" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-blue mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.desc}</p>
                  <a href="#agendeaqui" className="text-brand-green-dark font-semibold text-sm hover:underline inline-flex items-center gap-1">
                    Cotação aqui →
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== HOSPITAIS - Lista de texto (igual WordPress original) ========== */}
      <section className="py-20 bg-brand-gray-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="section-subtitle">Hospitais & Laboratórios</p>
            <h2 className="section-title mb-4">hospitais e laboratórios que possuímos convênio</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Hospital Pró-Cardiaco Botafogo', addr: 'Rua General Polidoro, 192 - Botafogo - RJ', icon: FaHospital },
              { name: 'Sérgio Franco | Laboratório de Medicina Diagnóstica', addr: 'R. S. José, 40 - Sobre loja - Centro - RJ', icon: FaFlask },
              { name: 'Hospital Icaraí', addr: 'Av. Marquês do Paraná, 233 - Centro, Niterói - RJ, 24030-215', icon: FaHospital },
              { name: 'Hospital Pasteur', addr: 'Av. Amaro Cavalcanti, 495 - Todos os Santos, Rio de Janeiro - RJ, 20735-040', icon: FaHospital },
              { name: 'Hospital São Francisco na Providência de Deus', addr: 'Rua Conde de Bonfim, 1033 - Tijuca, Rio de Janeiro - RJ, 20520-053', icon: FaHospital },
              { name: 'Hospital São Lucas Copacabana', addr: 'Tv. Frederico Pamplona, 32 - Copacabana, Rio de Janeiro - RJ, 22061-080', icon: FaHospital },
              { name: 'Hospital Badim', addr: 'R. São Francisco Xavier, 390 - Maracanã, Rio de Janeiro - RJ, 20550-013', icon: FaHospital },
              { name: 'Hospital Unimed Ferj', addr: 'Av. Ayrton Senna, 2550 - Barra da Tijuca, Rio de Janeiro - RJ, 22775-003', icon: FaHospital },
            ].map((h, i) => {
              const Icon = h.icon;
              return (
                <div key={i} className="card flex gap-4">
                  <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="text-brand-green" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-blue mb-1 text-lg leading-tight">{h.name}</h3>
                    <p className="text-sm text-gray-600">{h.addr}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== CTA "PORQUE NOS ESCOLHER" - 3º formulário ========== */}
      <section className="py-20 bg-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url(/images/bg-pattern.png)',
          backgroundSize: 'cover',
        }}></div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-brand-green font-semibold uppercase tracking-wider mb-3">
                Porque nos escolher
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Soluções Personalizadas para o seu perfil
              </h2>
              <p className="text-xl text-gray-200 mb-8">
                Receba uma cotação ainda hoje:
              </p>

              <div className="space-y-4">
                {[
                  'Atendimento humanizado e profissional',
                  'Análise personalizada do seu perfil',
                  'Os melhores planos do mercado',
                  'Suporte 24 horas por dia',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <FaCheckCircle className="text-brand-green flex-shrink-0" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
