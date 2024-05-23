import { navbarLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import logo from '../../public/images/logo.svg';

interface NavbarItemProps {
  children: ReactNode;
  className?: string;
}

function NavbarItem({ children, className }: NavbarItemProps) {
  return (
    <li
      className={`
        font-semibold sm:pe-3 cursor-pointer after:cursor-pointer hover:text-primary relative
        after:content-[''] sm:after:block after:hidden after:w-2 after:h-2 after:absolute
        after:border-t-[1px] after:border-l-[1px] after:border-solid after:border-dark-gray
        after:-right-2 after:top-[5px] after:-rotate-[135deg] sm:text-center
        hover:after:border-primary basis-1/2 sm:basis-0 ${className}
      `}
    >
      {children}
    </li>
  );
}

export function Navbar() {
  return (
    <div className='w-full bg-light p-7 sm:px-20 lg:px-10 xl:px-28 lg:py-2'>
      <div className='w-full max-container flex flex-col items-center lg:flex-row lg:justify-between'>
        <Link href='/' className='flex items-center gap-1 sm:gap-2 md:gap-1'>
          <Image
            src={logo}
            width={40}
            height={40}
            className='h-9 w-9 sm:h-[40px] sm:w-[40px] lg:h-[50px] lg:w-[50px]'
            alt='bytecode - coding the future logo'
          />

          <h2 className='text-dark-gray text-[20px] sm:text-[23.35px] md:text-[25px]  pb-1 font-semibold'>
            byte<span className='text-secondary'>code</span>
          </h2>
        </Link>

        <ul
          className='w-full text-dark-gray2 mt-4 pt-3 sm:mt-5 sm:pt-4 border-t-2 border-dark-gray lg:border-0
            flex flex-wrap gap-y-2 sm:justify-between lg:justify-normal lg:gap-12 lg:m-0 lg:p-0 lg:w-auto
          '
        >
          {navbarLinks.map((navbarLink, index) => (
            <NavbarItem
              key={`navbar-link-${navbarLink.label}`}
              className={index % 2 !== 0 ? 'text-right' : ''}
            >
              {navbarLink.label}
            </NavbarItem>
          ))}
        </ul>
      </div>
    </div>
  );
}
