import Image from 'next/image';

export interface HorizontalCardProps {
  icon: string;
  title: string;
  content: string;
}

export function HorizontalCard({ icon, title, content }: HorizontalCardProps) {
  return (
    <div
      className='
      bg-white hover:bg-[#ecedee] p-8 rounded-primary transition-colors
      shadow-primary-shadow cursor-default h-full flex items-start gap-4 min-w-64'
    >
      <Image
        src={icon}
        alt={title}
        width={44}
        height={44}
        className='h-8 flex-1'
      />

      <div>
        <h3 className='title-text !text-xl !font-bold'>{title}</h3>
        <p className='info-text !text-base mt-1'>{content}</p>
      </div>
    </div>
  );
}
