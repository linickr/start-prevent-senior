import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Start Corretora – Corretora de Seguros da Prevent Senior',
  description:
    'Atendimento personalizado, profissional e humanizado. Planos Prevent Senior personalizados para seu perfil. Solicite uma cotação grátis.',
  keywords: 'prevent senior, plano de saúde, corretora de seguros, rio de janeiro, seguro saúde',
  openGraph: {
    title: 'Start Corretora – Prevent Senior',
    description: 'Planos Prevent Senior personalizados para seu perfil.',
    url: 'https://startcorretora.com.br',
    siteName: 'Start Corretora',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
