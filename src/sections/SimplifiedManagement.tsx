import { simplifiedManagementData } from '@/constants';

export function SimplifiedManagement() {
  return (
    <section className='max-container flex max-md:flex-col justify-between '>
      <div className='flex-1 my-auto'>
        <span className='subtitle-text'>Nosso Software</span>
        <h2 className='title-text'>Gestão Simplificada</h2>

        <p className='info-text pr-9 mt-7'>
          Nosso software de gestão educacional oferece um conjunto abrangente de
          funcionalidades para atender às necessidades específicas das
          instituições de ensino. Gerencie alunos, turmas, matrículas, notas,
          frequência, calendários acadêmicos e muito mais em uma única
          plataforma fácil de usar.
        </p>

        <div className='flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-10 my-8 text-primary-dark'>
          <div className='text-3xl flex gap-4'>
            <span className='material-symbols-rounded text-4xl'>school</span>
            <div>
              <span className='font-bold'>
                {simplifiedManagementData.customers}+
              </span>
              <p className='info-text'>Clientes</p>
            </div>
          </div>

          <div className='text-3xl flex gap-4'>
            <span className='material-symbols-rounded text-4xl'>groups</span>
            <div>
              <span className='font-bold'>
                {simplifiedManagementData.developers}+
              </span>
              <p className='info-text'>Desenvolvedores</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex-1'>
        <a
          href='#'
          className='rounded-media shadow-media flex justify-center items-center
            bg-homePageVideo bg-center bg-cover hover:opacity-90
            w-full max-md:h-[300px] h-[380px]
          '
        >
          <span className='material-symbols-rounded text-8xl text-primary-dark'>
            play_circle
          </span>
        </a>
      </div>
    </section>
  );
}
