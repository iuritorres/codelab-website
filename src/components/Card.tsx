interface CardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export default function Card({
  icon,
  title,
  description,
  className,
}: CardProps) {
  return (
    <div
      className={`
      bg-light2 hover:bg-[#d9dbdc] p-8 rounded-primary border-b-8
      border-primary border-solid shadow-primary-shadow cursor-default
      ${className}
      `}
    >
      <span className='material-symbols-rounded text-primary text-[44px] mb-6'>
        {icon}
      </span>

      <h3 className='text-[17.5px] leading-5 text-dark-gray2 font-bold mb-2'>
        {title}
      </h3>
      <p className='text-light-gray text-[15px]'>{description}</p>
    </div>
  );
}
