import { FooterNewsletter, PrimaryAnchor } from '@/components';
import { footerLinks, socialMedia } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

import call from '../../public/icons/call_secondary.svg';
import mail from '../../public/icons/mail_secondary.svg';
import timer from '../../public/icons/timer_secondary.svg';
import logo from '../../public/images/logo.svg';

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
              width={40}
              height={40}
            />

            <h2 className='text-[25px] font-semibold'>
              byte<span className='text-secondary'>code</span>
            </h2>
          </Link>

          <p className='pt-5 pb-8 md:pr-12 info-text !text-lg !leading-6 !text-light/70'>
            Nossa fábrica de software é focada nos resultados dos nossos
            clientes, entregando soluções eficientes e inovadoras para
            impulsionar seus negócios.
          </p>

          <div className='flex items-center gap-4 mb-3'>
            <Image src={call} alt='call' width={28} height={28} />
            <a
              href={`tel:${socialMedia.phone}`}
              className='hover:text-secondary transition-colors'
            >
              {socialMedia.phone}
            </a>
          </div>

          <div className='flex items-center gap-4 sm:mb-8 lg:mb-0'>
            <Image src={mail} alt='mail' width={28} height={28} />
            <a
              href={`mailto:${socialMedia.email}`}
              className='hover:text-secondary transition-colors'
            >
              {socialMedia.email}
            </a>
          </div>
        </div>

        {footerLinks.map((footerLink) => (
          <div
            key={`footer-link-${footerLink.title}`}
            className='flex flex-col lg:w-1/4 max-lg:w-1/2 max-sm:w-full max-sm:px-8'
          >
            <h3 className='text-lg font-semibold mb-2'>{footerLink.title}</h3>

            {footerLink.links.map((link) => (
              <Link
                key={`footer-link-${footerLink.title}-${link.label}`}
                href={link.link}
                className='info-text !text-lg !text-light/70 mb-3 hover:!text-secondary transition-colors'
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}

        <div className='lg:w-1/4 max-lg:w-1/2 max-sm:w-full max-sm:px-8'>
          <div className='flex items-center gap-3'>
            <Image src={timer} alt='timer' width={28} height={28} />
            <span>8 AM - 8 PM, Segunda - Domingo</span>
          </div>

          <p className='py-4 mb-4 info-text !text-lg !leading-6 !text-light/70'>
            Nosso Suporte está disponível 24/7 para responder suas dúvidas.
          </p>

          <PrimaryAnchor href='#'>Fale conosco</PrimaryAnchor>
        </div>
      </div>

      <div className='max-container sm:px-8 md:px-14 max-lg:mt-14'>
        <hr className='info-text !text-light/70' />
        <div className='flex max-lg:flex-col max-lg:gap-4 items-center justify-between py-7'>
          <p>bytecode - coding the future</p>
          <p>Copyright ® 2024 - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}
