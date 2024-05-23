import Image from 'next/image';

export interface CardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export function Card({ icon, title, description, className }: CardProps) {
  return (
    <div
      className={`
      bg-light2 hover:brightness-95 p-8 rounded-primary border-b-8 min-w-64
      border-primary border-solid shadow-primary-shadow cursor-default flex-1
      transition-colors
      ${className}
      `}
    >
      <Image src={icon} alt={title} width={44} height={44} className='mb-2' />

      <h1 className='title-text !text-xl !font-bold mb-5'>{title}</h1>
      <p className='info-text !text-base'>{description}</p>
    </div>
  );
}
