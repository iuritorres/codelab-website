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
      ${className}
      `}
    >
      <span className='material-symbols-rounded text-primary text-[44px] mb-6'>
        {icon}
      </span>

      <h1 className='title-text !text-xl !font-bold mb-4'>{title}</h1>
      <p className='info-text !text-base'>{description}</p>
    </div>
  );
}
