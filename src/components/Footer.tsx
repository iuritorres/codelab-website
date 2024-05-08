import Image from 'next/image';
import Link from 'next/link';
import { FormEvent } from 'react';
import logo from '../../public/images/logo-svg.svg';
import PrimaryButton from './PrimaryButton';
import PrimaryAnchor from './PrimaryAnchor';

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

export default function Footer() {
  // NEWSLETTER SUBMIT
  // const handleNewsletterSubmit = (event: FormEvent) => {
  //   event.preventDefault();
  // const email:HTMLInputElement = document.getElementById('footer-newsletter-email')?.value;
  // newsletter api...
  // };

  return (
    <footer className='text-white font-light relative bg-dark-background mt-24 pt-24'>
      {/* NEWSLETTER */}
      <div className='mx-28 absolute top-0 start-50 -translate-y-1/2'>
        <div
          className='bg-light px-7 py-8 shadow-primary-shadow
          cursor-default h-full flex gap-4 items-center'
        >
          <div className='flex gap-4'>
            <span className='material-symbols-rounded text-3xl text-primary-dark'>
              mail
            </span>

            <div className='w-3/4'>
              <h3 className='text-dark-gray2 text-lg font-bold'>Newsletter</h3>
              <p className='text-light-gray mt-1'>
                Assine nossa newsletter e receba conteúdos exclusivos sobre
                gestão educacional para impulsionar o sucesso da sua
                instituição.
              </p>
            </div>
          </div>

          <form className='flex h-1/2 w-1/2'>
            <input
              name='newsletter-email'
              type='email'
              className='text-sm placeholder:text-dark-gray/80
              border-light-gray/50 border-solid border-[1px] border-r-0
              p-2 w-full'
              placeholder='Digite seu email'
              required
            />

            <PrimaryButton className='rounded-none font-bold text-sm'>
              Enviar
            </PrimaryButton>
          </form>
        </div>
      </div>

      {/* FOOTER CONTENT */}
      <div className='mx-28 py-5 flex justify-between'>
        <div className='w-1/4'>
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

          <p className='py-5 text-[15px] text-light-gray'>
            Nossa fábrica de software é focada nos resultados dos nossos
            clientes, entregando soluções eficientes e inovadoras para
            impulsionar seus negócios.
          </p>

          <div className='flex items-center gap-4 mb-3'>
            <span className='material-symbols-rounded text-secondary'>call</span>
            <span className='text-[15px]'>+55 (81) 9 7345-8833</span>
          </div>

          <div className='flex items-center gap-4'>
            <span className='material-symbols-rounded text-secondary'>
              location_on
            </span>
            <span className='text-[15px]'>Uninassau | Paulista</span>
          </div>
        </div>

        <div className='flex flex-col'>
          <h3 className='text-[17.5px] font-medium'>Outras Páginas</h3>

          {otherPages.map((page) => (
            <Link
              key={`homeLink-${page.title}-${page.path}`}
              href={page.path}
              className='text-[15px] text-light-gray mb-1'
            >
              {page.title}
            </Link>
          ))}
        </div>

        <div className='flex flex-col'>
          <h3 className='text-[17.5px] font-medium'>Links Extras</h3>

          {quickLinks.map((page) => (
            <Link
              key={`homeLink-${page.title}-${page.path}`}
              href={page.path}
              className='text-[15px] text-light-gray mb-1'
            >
              {page.title}
            </Link>
          ))}
        </div>

        <div className='w-1/4'>
          <div className='flex items-center gap-3'>
            <span className='material-symbols-rounded'>timer</span>
            <span>8 AM - 8 PM, Segunda - Domingo</span>
          </div>

          <p className='py-4 mb-4 text-[15px] text-light-gray'>
            Nosso Suporte está disponível 24/7 para responder suas dúvidas.
          </p>

          <PrimaryAnchor href='#'>Fale conosco</PrimaryAnchor>
        </div>
      </div>

      <div className='mx-28 mt-4'>
        <hr className='border-light-gray/70' />
        <div className='text-[15px] flex items-center justify-between py-7'>
          <p>bytecode - coding the future</p>
          <p>Copyright ® 2023 - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
