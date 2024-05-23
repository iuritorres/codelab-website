import { simplifiedManagementData } from '@/constants';
import Image from 'next/image';

import teacherWithHerStudents from '../../public/images/teacher-with-her-students.jpg';

export function SimplifiedManagement() {
  return (
    <section className='max-container flex max-md:flex-col justify-between items-center'>
      <div className='flex-1'>
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
        <div className='relative hover:brightness-75 cursor-pointer'>
          <Image
            src={teacherWithHerStudents}
            alt='teacher with her students'
            className='media max-md:h-[300px] h-[380px] object-cover'
          />
          <span
            className='material-symbols-rounded text-8xl text-primary-dark
            absolute left-1/2 -translate-x-[50%] top-1/2 -translate-y-[50%]'
          >
            play_circle
          </span>
        </div>
      </div>
    </section>
  );
}
