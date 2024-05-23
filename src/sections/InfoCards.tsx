import { Card } from '@/components';
import { CardProps } from '@/components/Card';
import { infoCardsData } from '@/constants';

export function InfoCards() {
  return (
    <section className='w-auto wide:max-container flex flex-wrap gap-7'>
      {infoCardsData.map((cardProps: CardProps) => (
        <Card
          {...cardProps}
          key={`card-${cardProps.title}`}
          className='w-full lg:w-[48%] xl:w-[23%] z-10'
        />
      ))}
    </section>
  );
}
