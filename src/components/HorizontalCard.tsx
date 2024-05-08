interface HorizontalCardProps {
  icon: string;
  title: string;
  content: string;
}

export default function HorizontalCard({
  icon,
  title,
  content,
}: HorizontalCardProps) {
  return (
    <div
      className='
      bg-white hover:bg-[#ecedee] px-7 py-3 rounded-primary
      shadow-primary-shadow cursor-default h-full flex gap-4'
    >
      <span className='material-symbols-rounded text-primary-dark text-3xl'>
        {icon}
      </span>

      <div>
        <h3 className='text-[17.5px] text-dark-gray2 font-bold'>{title}</h3>
        <p className='text-[15px] text-light-gray mt-1'>{content}</p>
      </div>
    </div>
  );
}
