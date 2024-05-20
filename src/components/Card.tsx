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
      bg-light2 hover:bg-[#d9dbdc] p-8 rounded-primary border-b-8 min-w-64
      border-primary border-solid shadow-primary-shadow cursor-default flex-1
      ${className}
      `}
    >
      <span className='material-symbols-rounded text-primary text-[44px] mb-6'>
        {icon}
      </span>

      <h3 className='title-text !text-xl !font-bold mb-4'>{title}</h3>
      <p className='info-text'>{description}</p>
    </div>
  );
}
