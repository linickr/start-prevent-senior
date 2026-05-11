import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaYoutube, FaPinterest, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-brand-blue-dark text-white pt-16 pb-6">
      <div className="container-custom">
        {/* Logos Prevent Senior + Start no topo (igual ao WordPress original) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 pb-10 mb-10 border-b border-white/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/prevent-senior-white.png"
            alt="Prevent Senior"
            className="h-14 md:h-16 w-auto"
            style={{ mixBlendMode: 'screen' }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo-start-white.png"
            alt="Start Corretora de Seguros"
            className="h-14 md:h-16 w-auto"
            style={{ mixBlendMode: 'screen' }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Seguros personalizados para seu perfil.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <a href="mailto:gustavo@startcorretora.com.br" className="flex items-center gap-2 hover:text-brand-green transition-colors">
                <FaEnvelope className="text-brand-green flex-shrink-0" size={14} />
                <span>gustavo@startcorretora.com.br</span>
              </a>
              <a href="mailto:flavio@startcorretora.com.br" className="flex items-center gap-2 hover:text-brand-green transition-colors">
                <FaEnvelope className="text-brand-green flex-shrink-0" size={14} />
                <span>flavio@startcorretora.com.br</span>
              </a>
              <a href="https://wa.me/5521996703834" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-green transition-colors">
                <FaWhatsapp className="text-brand-green flex-shrink-0" size={14} />
                <span>21 99670-3834</span>
              </a>
            </div>
          </div>

          {/* Atendimento */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-brand-green">Atendimento</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="text-gray-300 hover:text-brand-green transition-colors">Novidades</Link></li>
              <li><Link href="/cotacao" className="text-gray-300 hover:text-brand-green transition-colors">Solicite sua Cotação</Link></li>
              <li><Link href="/sobre-nos" className="text-gray-300 hover:text-brand-green transition-colors">Sobre Nós</Link></li>
            </ul>
          </div>

          {/* Institucional */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-brand-green">Institucional</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="text-gray-300 hover:text-brand-green transition-colors">Novidades</Link></li>
              <li><Link href="/cotacao" className="text-gray-300 hover:text-brand-green transition-colors">Solicite sua Cotação</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-brand-green transition-colors">Perguntas Frequentes</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-brand-green transition-colors">Termos & Condições</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-brand-green transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-brand-green">Inscreva-se</h4>
            <p className="text-sm text-gray-300 mb-4">
              Cadastre seu e-mail e receba em primeira-mão o que há de mais atual no mercado de seguros.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green"
              />
              <button
                type="submit"
                className="w-full bg-brand-green hover:bg-brand-green-light text-brand-blue font-bold py-2.5 rounded-lg transition-colors"
              >
                Enviar
              </button>
            </form>

            <div className="flex gap-3 mt-6">
              <a href="#" aria-label="Facebook" className="w-9 h-9 bg-white/10 hover:bg-brand-green hover:text-brand-blue rounded-full flex items-center justify-center transition-colors">
                <FaFacebookF size={14} />
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 bg-white/10 hover:bg-brand-green hover:text-brand-blue rounded-full flex items-center justify-center transition-colors">
                <FaTwitter size={14} />
              </a>
              <a href="#" aria-label="Youtube" className="w-9 h-9 bg-white/10 hover:bg-brand-green hover:text-brand-blue rounded-full flex items-center justify-center transition-colors">
                <FaYoutube size={14} />
              </a>
              <a href="#" aria-label="Pinterest" className="w-9 h-9 bg-white/10 hover:bg-brand-green hover:text-brand-blue rounded-full flex items-center justify-center transition-colors">
                <FaPinterest size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="border-t border-white/10 pt-6 pb-6">
          <div className="flex items-start gap-3 text-sm text-gray-300">
            <FaMapMarkerAlt className="text-brand-green mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-white">Start Corretora de Seguros LTDA</p>
              <p>Rua Gastão Penalva, nº 15, Bloco 1, Apto. 215 – Andaraí – Rio de Janeiro – RJ – CEP: 20540-220</p>
              <p>CNPJ: 48.385.999/1000-69</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-sm text-gray-400">
          <p>Todos os direitos reservados - start corretora | {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
