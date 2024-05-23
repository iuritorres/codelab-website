import { Navbar, PrimaryAnchor } from '@/components';
import Image from 'next/image';

import headerBanner from '../../public/images/teacher-and-little-girl-banner.webp';

export function Header() {
  return (
    <header className='w-full h-[800px] md:h-[650px] relative'>
      <Navbar />

      <div className='max-container mt-14 sm:mt-28 md:mt-12 lg:mt-24 wide:ps-24 text-light w-3/4 flex flex-col gap-8'>
        <h1 className='text-3xl sm:text-4xl leading-10 font-bold'>
          Simplifique sua Gestão
          <br />
          Educacional com
          <br />
          Nossas Solucões
        </h1>
        <p>
          Sistemas de gestão educacional integrados de maneira ágil e<br />
          segura. Tudo em uma única plataforma.
        </p>

        <PrimaryAnchor href='#'>Conhecer nossas solucões</PrimaryAnchor>
      </div>

      <Image
        src={headerBanner}
        alt='Teacher and little girl banner'
        width={1461}
        height={834}
        priority={true}
        loading='eager'
        className='absolute top-0 left-1/2 -translate-x-1/2
          h-[90%] w-full object-cover max-container mt-16 -z-10'
      />
    </header>
  );
}
