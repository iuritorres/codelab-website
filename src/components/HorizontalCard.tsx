interface HorizontalCardProps {
  icon: string;
  title: string;
  content: string;
}

export function HorizontalCard({
  icon,
  title,
  content,
}: HorizontalCardProps) {
  return (
    <div
      className='
      bg-white hover:bg-[#ecedee] p-8 rounded-primary
      shadow-primary-shadow cursor-default h-full flex gap-4 min-w-64'
    >
      <span className='material-symbols-rounded text-primary-dark text-3xl'>
        {icon}
      </span>

      <div>
        <h3 className='title-text !text-xl !font-bold'>{title}</h3>
        <p className='info-text mt-1'>{content}</p>
      </div>
    </div>
  );
}
