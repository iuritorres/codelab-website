import { PrimaryAnchor } from '@/components';
import { FooterNewsletter } from '@/components/FooterNewsletter';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/images/logo-svg.svg';

// FOOTER LINKS
const otherPages = [
  { title: 'Home', path: '/' },
  { title: 'Sobre', path: '/' },
  { title: 'Serviços', path: '/' },
  { title: 'Produtos', path: '/' },
  { title: 'Contato', path: '/' },
];

const quickLinks = [
  { title: 'Isenção de Responsabilidade', path: '/' },
  { title: 'Política de Privacidade', path: '/' },
  { title: 'Termos de Uso', path: '/' },
  { title: 'Créditos', path: '/' },
  { title: 'FAQ', path: '/' },
];

export function Footer() {
  return (
    <footer className='text-white font-light bg-dark-background mt-24 pt-24'>
      <FooterNewsletter />

      <div className='max-container sm:p-8 md:p-14 flex flex-wrap max-sm:flex-col max-sm:gap-14 max-sm:items-center justify-between'>
        <div className='lg:w-1/4 max-lg:w-1/2 max-sm:w-full max-sm:px-8'>
          <Link href='/' className='flex items-center gap-2'>
            <Image
              src={logo}
              className='w-10 h-10 -m-1'
              alt='bytecode - coding the future logo'
            />

            <h2 className='text-[25px] font-medium'>
              byte<span className='text-secondary'>code</span>
            </h2>
          </Link>

          <p className='pt-5 pb-8 md:pr-12 info-text'>
            Nossa fábrica de software é focada nos resultados dos nossos
            clientes, entregando soluções eficientes e inovadoras para
            impulsionar seus negócios.
          </p>

          <div className='flex items-center gap-4 mb-3'>
            <span className='material-symbols-rounded text-secondary'>
              call
            </span>
            <span>+55 (81) 9 7345-8833</span>
          </div>

          <div className='flex items-center gap-4'>
            <span className='material-symbols-rounded text-secondary'>
              location_on
            </span>
            <span>Uninassau | Paulista</span>
          </div>
        </div>

        <div className='flex flex-col lg:w-1/4 max-lg:w-1/2 max-sm:w-full max-sm:px-8'>
          <h3 className='text-lg font-medium'>Outras Páginas</h3>

          {otherPages.map((page) => (
            <Link
              key={`homeLink-${page.title}-${page.path}`}
              href={page.path}
              className='info-text mb-1 hover:text-secondary'
            >
              {page.title}
            </Link>
          ))}
        </div>

        <div className='flex flex-col lg:w-1/4 max-lg:w-1/2 max-sm:w-full max-sm:px-8'>
          <h3 className='text-lg font-medium'>Links Extras</h3>

          {quickLinks.map((page) => (
            <Link
              key={`homeLink-${page.title}-${page.path}`}
              href={page.path}
              className='info-text hover:text-secondary'
            >
              {page.title}
            </Link>
          ))}
        </div>

        <div className='lg:w-1/4 max-lg:w-1/2 max-sm:w-full max-sm:px-8'>
          <div className='flex items-center gap-3'>
            <span className='material-symbols-rounded'>timer</span>
            <span>8 AM - 8 PM, Segunda - Domingo</span>
          </div>

          <p className='py-4 mb-4 info-text'>
            Nosso Suporte está disponível 24/7 para responder suas dúvidas.
          </p>

          <PrimaryAnchor href='#'>Fale conosco</PrimaryAnchor>
        </div>
      </div>

      <div className='max-container sm:px-8 md:px-14 max-lg:mt-14'>
        <hr className='info-text' />
        <div className='flex max-lg:flex-col max-lg:gap-4 items-center justify-between py-7'>
          <p>bytecode - coding the future</p>
          <p>Copyright ® 2023 - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
