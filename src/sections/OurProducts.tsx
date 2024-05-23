import { HorizontalCard, PrimaryAnchor } from '@/components';

import { ourProductsCardsData } from '@/constants';

const columns = [
  ourProductsCardsData.slice(0, 2),
  ourProductsCardsData.slice(2, 4),
];

export function OurProducts() {
  return (
    <section className='max-container flex max-lg:flex-col justify-between items-center'>
      <div>
        <span className='subtitle-text'>Nossos Produtos</span>
        <h2 className='title-text'>Conheça Nossos Produtos</h2>

        <p className='info-text pr-9 mt-7 mb-14'>
          Nossos produtos visam aumentar a produtividade e promover eficiência
          na gestão educacional, resultando em melhores desempenhos e resultados
          positivos para a sua instituição de ensino.
        </p>

        <PrimaryAnchor href='#'>Ver todos</PrimaryAnchor>
      </div>

      <div className='grid max-md:grid-cols-1 grid-cols-2 gap-3 max-lg:mt-14'>
        {columns.map((column, index) => (
          <div
            key={`our-products-column-${index}`}
            className='grid grid-rows-2 gap-3'
          >
            {column.map((card) => (
              <div key={`column1-card-${card.title}`} className='w-full h-full'>
                <HorizontalCard
                  icon={card.icon}
                  title={card.title}
                  content={card.content}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
