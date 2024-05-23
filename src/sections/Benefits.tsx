import { benefits } from '@/constants';
import Image from 'next/image';

import universityStudents from '../../public/images/university-students-throwing-their-caps-up.jpg';

export function Benefits() {
  return (
    <section className='max-container py-5 grid grid-cols-2 max-lg:grid-cols-1'>
      <div className='col-span-1'>
        <Image
          src={universityStudents}
          alt='university students throwing their caps up'
          className='media lg:w-5/6 max-lg:mb-12 max-md:h-[300px] h-[500px] object-cover'
          placeholder='blur'
          width={600}
          height={500}
        />
      </div>

      <div className='col-span-1'>
        <span className='subtitle-text'>Quem somos</span>
        <h2 className='title-text'>Nossos Benefícios</h2>

        <p className='info-text pr-9 mt-5 mb-10'>
          Somos uma equipe dedicada a transformar a gestão educacional por meio
          de soluções inovadoras e eficientes. Nossos produtos proporcionam
          resultados tangíveis para instituições educacionais, incluindo aumento
          de produtividade, redução de erros, melhor comunicação e otimização do
          tempo.
        </p>

        {/* PROGRESS BARS */}
        {benefits.map((benefit) => (
          <div
            key={`benefits-${benefit.title}-${benefit.value}`}
            className='mb-4'
          >
            <div className='flex justify-between'>
              <span className='info-text'>{benefit.title}</span>
              <span className='info-text'>{benefit.value}%</span>
            </div>

            <progress className='w-full' value={benefit.value} max={100} />
          </div>
        ))}
      </div>
    </section>
  );
}
