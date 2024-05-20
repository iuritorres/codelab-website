'use client';

import { FormEvent, useRef } from 'react';
import { PrimaryButton } from './PrimaryButton';

export function FooterNewsletter() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const email = inputRef.current?.value;
    alert(`
      Nossa newsletter chegará em breve! :D
      Seu Email: ${email}
    `);
  };

  return (
    <div className='max-container w-11/12 -mt-40 mb-8'>
      <div
        className='bg-light p-8 shadow-primary-shadow
          cursor-default h-full flex gap-8 items-center
          max-lg:flex-col
        '
      >
        <div className='flex gap-4'>
          <span className='material-symbols-rounded text-3xl text-primary-dark'>
            mail
          </span>

          <div className='max-lg:w-full'>
            <h3 className='text-dark-gray2 text-lg font-bold'>Newsletter</h3>
            <p className='info-text mt-1'>
              Assine nossa newsletter e receba conteúdos exclusivos sobre gestão
              educacional para impulsionar o sucesso da sua instituição.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className='flex max-sm:flex-col h-1/2 w-4/5 max-lg:w-full'
        >
          <input
            ref={inputRef}
            type='email'
            name='footer-newsletter-email'
            placeholder='Digite seu email'
            autoComplete='email'
            required
            className='text-sm text-dark-gray placeholder:text-dark-gray/80
            border-light-gray/50 border-solid border-[1px] border-r-0
            p-2 w-full max-sm:h-12'
          />

          <PrimaryButton
            type='submit'
            className='!rounded-none font-bold text-sm max-sm:w-full'
          >
            Enviar
          </PrimaryButton>
        </form>
      </div>
    </div>
  );
}
