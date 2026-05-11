import QuoteForm from '@/components/QuoteForm';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export const metadata = {
  title: 'Solicite sua Cotação - Start Corretora',
  description: 'Solicite uma cotação grátis e personalizada para o seu plano de saúde Prevent Senior.',
};

export default function CotacaoPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white">
        <div className="container-custom text-center">
          <p className="text-brand-green font-semibold uppercase tracking-wider mb-3">Cotação Grátis</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Solicite sua Cotação</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Preencha o formulário abaixo e receba uma proposta personalizada em até 24 horas.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h2 className="section-title mb-6">Estamos prontos para te atender</h2>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Nossa equipe de especialistas está disponível para entender suas necessidades e encontrar o melhor plano Prevent Senior para você e sua família.
              </p>

              <div className="space-y-5">
                {[
                  { icon: FaPhoneAlt, label: 'Telefone', value: '(21) 99670-3834', href: 'tel:+5521996703834' },
                  { icon: FaWhatsapp, label: 'WhatsApp', value: '(21) 99670-3834', href: 'https://wa.me/5521996703834' },
                  { icon: FaEnvelope, label: 'E-mail', value: 'gustavo@startcorretora.com.br', href: 'mailto:gustavo@startcorretora.com.br' },
                  { icon: FaEnvelope, label: 'E-mail', value: 'flavio@startcorretora.com.br', href: 'mailto:flavio@startcorretora.com.br' },
                  { icon: FaMapMarkerAlt, label: 'Endereço', value: 'Rua Gastão Penalva, 15, Bloco 1, Apto. 215 - Andaraí, Rio de Janeiro - RJ' },
                  { icon: FaClock, label: 'Horário de Atendimento', value: '24 horas por dia, 7 dias por semana' },
                ].map((item, i) => {
                  const Icon = item.icon;
                  const Wrapper = item.href ? 'a' : 'div';
                  return (
                    <Wrapper
                      key={i}
                      href={item.href}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-brand-gray-light transition-colors"
                    >
                      <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="text-brand-green" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                        <p className="font-semibold text-brand-blue">{item.value}</p>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>
            </div>

            {/* Form */}
            <div className="bg-brand-gray-light p-6 md:p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-brand-blue mb-6">Preencha seus dados</h3>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
