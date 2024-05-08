import Image from 'next/image';
import Link from 'next/link';

import logo from '../../public/images/logo-svg.svg';

export default function Navbar() {
  return (
    <div className='bg-light w-full'>
      <div className='mx-28 py-[10px] flex justify-between'>
        <Link href='/' className='flex items-center gap-2'>
          <Image
            src={logo}
            className='h-[50px] w-[50px]'
            alt='bytecode - coding the future logo'
          />

          <h2 className='text-dark-gray2 text-[25px] pb-1 font-medium'>
            byte<span className='text-secondary'>code</span>
          </h2>
        </Link>

        <ul className='flex gap-14 items-center text-dark-gray2'>
          <li
            className={`
              font-medium pe-3 cursor-pointer after:cursor-pointer hover:text-primary relative
              after:content-[''] after:block after:w-2 after:h-2 after:absolute
              after:border-t-[1px] after:border-l-[1px] after:border-solid after:border-dark-gray
              after:-right-2 after:top-[5px] after:-rotate-[135deg]
              hover:after:border-primary
            `}
          >
            Produtos
          </li>
          <li
            className={`
              font-medium pe-3 cursor-pointer after:cursor-pointer hover:text-primary relative
              after:content-[''] after:block after:w-2 after:h-2 after:absolute
              after:border-t-[1px] after:border-l-[1px] after:border-solid after:border-dark-gray
              after:-right-2 after:top-[5px] after:-rotate-[135deg]
              hover:after:border-primary
            `}
          >
            Clientes
          </li>
          <li
            className={`
              font-medium pe-3 cursor-pointer after:cursor-pointer hover:text-primary relative
              after:content-[''] after:block after:w-2 after:h-2 after:absolute
              after:border-t-[1px] after:border-l-[1px] after:border-solid after:border-dark-gray
              after:-right-2 after:top-[5px] after:-rotate-[135deg]
              hover:after:border-primary
            `}
          >
            Conteúdos
          </li>
          <li
            className={`
              font-medium pe-3 cursor-pointer after:cursor-pointer hover:text-primary relative
              after:content-[''] after:block after:w-2 after:h-2 after:absolute
              after:border-t-[1px] after:border-l-[1px] after:border-solid after:border-dark-gray
              after:-right-2 after:top-[5px] after:-rotate-[135deg]
              hover:after:border-primary
            `}
          >
            Bytecode
          </li>
        </ul>
      </div>
    </div>
  );
}
