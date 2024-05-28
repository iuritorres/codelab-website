import { JivoChatWidget, VLibrasWidget } from '@/components';
import { googleTagManagerId } from '@/constants';
import { GoogleTagManager } from '@next/third-parties/google';
import { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Torres Sistemas | Seu negócio na Internet',
  category: 'technology',
  description: `
  A Torres Sistemas é uma agência de criação de sites com 5+ anos de experiência no ramo. Nosso foco é ajudar empresas a estabelecer uma presença online sólida e eficaz. Como especialistas em desenvolvimento web, oferecemos soluções personalizadas para atender às necessidades específicas de cada cliente.
  
  Nossos Serviços:
  - Criação de Sites Personalizados: Desenvolvemos sites modernos, responsivos e otimizados para dispositivos móveis.
  - Design Atraente: Criamos layouts atraentes que refletem a identidade da sua marca.
  - SEO (Otimização para Mecanismos de Busca): Otimizamos seu site para que ele seja facilmente encontrado pelos motores de busca, aumentando sua visibilidade online.
  - Manutenção e Atualização: Mantemos seu site funcionando perfeitamente e atualizado com as últimas tendências.
  
  Por que escolher a Torres Sistemas?
  - Experiência e Conhecimento: Com mais de 5 anos no mercado, entendemos as nuances do ambiente digital.
  - Atendimento Personalizado: Valorizamos o relacionamento com nossos clientes e estamos sempre prontos para atendê-los.
  - Resultados Mensuráveis: Nosso foco é gerar resultados tangíveis para o seu negócio.
  
  Explore nosso portfólio e descubra como a Torres Sistemas pode impulsionar o seu negócio na internet! 💻🚀
  
  Além disso, para turbinar suas vendas online, considere as seguintes estratégias:
    - Personalização e Relacionamento: Aproveite o potencial do mercado digital para personalizar a experiência do cliente e oferecer um atendimento eficiente após a criação do site. Isso aumentará a satisfação e fidelidade dos clientes.
      https://sebrae.com.br/sites/PortalSebrae/artigos/artigosEmpreendedorismo/10-estrategias-de-vendas-online-como-turbinar-seu-negocio-na-internet,3cfd2c3136b8b810VgnVCM1000001b00320aRCRD
    - Planejamento: Elabore um plano de comunicação digital com objetivos claros, metas, prazos e indicadores. Isso ajudará a direcionar suas ações e medir o sucesso do seu negócio na internet.
      https://sebrae.com.br/sites/PortalSebrae/sebraeaz/5-dicas-para-o-seu-negocio-ter-sucesso-na-internet,a7c6b7a270ecf610VgnVCM1000004c00210aRCRD

  Espero que essas dicas sejam úteis para o sucesso contínuo do seu negócio online! 🌟✨`,

  // other: adOptWidgetMetadata, // AdOptWidget
  other: {
    'google-site-verification': '_y8EhGrT12I71OBUSDqWslLRK-hFI25OJ1EyLHofHrE',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body
        className={`${montserrat.className} min-h-screen scroll-smooth select-none`}
      >
        {children}

        {/* Global Scripts */}
        <VLibrasWidget />
        <JivoChatWidget />
        {/* <AdOptWidget /> */}
      </body>

      <GoogleTagManager gtmId={googleTagManagerId} />
    </html>
  );
}
