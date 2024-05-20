import { Navbar, PrimaryAnchor } from '@/components';

export function Header() {
  return (
    <header className='w-full h-[800px] md:h-[650px] relative'>
      <Navbar />

      <div className='max-container mt-14 sm:mt-28 md:mt-12 lg:mt-24 wide:ps-24 text-light w-3/4 flex flex-col gap-5'>
        <h1 className='text-3xl md:text-[34px] leading-10 font-medium'>
          Simplifique sua gestão
          <br />
          educacional com
          <br />
          nossas solucões
        </h1>
        <p>
          Sistemas de gestão educacional integrados de maneira ágil e<br />
          segura. Tudo em uma única plataforma.
        </p>

        <PrimaryAnchor href='#'>Conhecer nossas solucões</PrimaryAnchor>
      </div>

      <div className='absolute top-0 left-0 w-full h-full bg-header bg-center bg-cover -scale-x-100 -z-10' />
    </header>
  );
}
