import { Navbar, PrimaryAnchor } from '@/components';

export function Header() {
  return (
    <>
      <link
        rel='preload'
        fetchPriority='high'
        as='image'
        href='/images/teacher-and-little-girl-banner.webp'
        type='image/webp'
      />

      <header className='w-full h-[800px] md:h-[650px] relative'>
        <Navbar />

        <div className='max-container mt-14 sm:mt-28 md:mt-12 lg:mt-24 wide:ps-24 text-light w-3/4 flex flex-col gap-5'>
          <h1 className='text-3xl sm:text-4xl leading-10 font-bold'>
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
        {/* <div className='absolute top-0 left-0 w-full h-full bg-header bg-center bg-cover -scale-x-100 -z-10' /> */}
        <div
          className='absolute top-0 left-0 w-full h-full
            bg-[url("/images/teacher-and-little-girl-banner.webp")]
            bg-center bg-cover -scale-x-100 -z-10'
        />
      </header>
    </>
  );
}
