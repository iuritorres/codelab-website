import Link from 'next/link';
import { cx } from '../_utils';

interface TagProps {
  link?: string;
  name: string;
  className?: string;
}

export function Tag({ link = '#', name, className = '', ...props }: TagProps) {
  return (
    <Link
      href={link}
      className={cx(
        'inline-block py-2 sm:py-3 px-6 sm:px-10 bg-dark text-white rounded-full capitalize font-semibold border-2 border-solid border-white hover:scale-105 transition-all ease duration-200 text-sm sm:text-base',
        className
      )}
      {...props}
    >
      {name}
    </Link>
  );
}
