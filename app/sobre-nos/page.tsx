import { FaHandshake, FaHeart, FaShieldAlt, FaUsers, FaAward, FaLightbulb } from 'react-icons/fa';
import QuoteForm from '@/components/QuoteForm';

export const metadata = {
  title: 'Sobre Nós - Start Corretora',
  description: 'Conheça a Start Corretora, especialista em planos Prevent Senior com atendimento humanizado.',
};

export default function SobreNosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/client-3.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <p className="text-brand-green font-semibold uppercase tracking-wider mb-3">Sobre Nós</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Quem é a Start Corretora</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Uma corretora especializada em planos Prevent Senior, com foco em atendimento humanizado e personalizado.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-subtitle">Nossa Missão</p>
              <h2 className="section-title mb-6">Cuidar de quem cuida de você</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                A Start Corretora nasceu com o propósito de oferecer atendimento personalizado, profissional e humanizado a quem busca o melhor plano de saúde para sua família.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Como corretora oficial da Prevent Senior, somos especialistas em encontrar o plano ideal para cada perfil, com condições exclusivas e benefícios diferenciados.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Acreditamos que escolher um plano de saúde não deve ser complicado. Por isso, nossa equipe está sempre disponível para tirar dúvidas e oferecer soluções sob medida.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: FaHeart, label: 'Atendimento Humanizado', value: '100%' },
                { icon: FaUsers, label: 'Clientes Atendidos', value: '5K+' },
                { icon: FaAward, label: 'Anos no Mercado', value: '10+' },
                { icon: FaShieldAlt, label: 'Confiabilidade', value: 'Total' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="bg-brand-gray-light p-6 rounded-2xl text-center">
                    <Icon className="text-brand-green-dark mx-auto mb-3" size={32} />
                    <p className="text-3xl font-bold text-brand-blue mb-1">{item.value}</p>
                    <p className="text-sm text-gray-600">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-brand-gray-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="section-subtitle">Nossos Valores</p>
            <h2 className="section-title mb-4">O que nos move todos os dias</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: FaHandshake,
                title: 'Confiança',
                desc: 'Transparência total em cada negociação. Você sempre sabe exatamente o que está contratando.',
              },
              {
                icon: FaHeart,
                title: 'Empatia',
                desc: 'Entendemos suas necessidades e oferecemos soluções que realmente fazem diferença na sua vida.',
              },
              {
                icon: FaLightbulb,
                title: 'Excelência',
                desc: 'Buscamos sempre o melhor para nossos clientes, com profissionais qualificados e atualizados.',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="card text-center">
                  <div className="w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-brand-blue" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-blue mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="bg-brand-blue rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'url(/images/bg-pattern.png)',
              backgroundSize: 'cover',
            }}></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-2 text-center">Quer falar com a gente?</h2>
              <p className="text-gray-200 text-center mb-8">
                Solicite uma cotação personalizada e descubra o plano ideal para você.
              </p>
              <QuoteForm variant="dark" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
