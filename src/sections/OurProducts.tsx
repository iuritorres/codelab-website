import { HorizontalCard, PrimaryAnchor } from '@/components';

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
        <div className='grid grid-rows-2 gap-3'>
          <div className='w-full h-full'>
            <HorizontalCard
              icon='calendar_month'
              title='Frequência'
              content='Solução abrangente para acompanhar, monitorar e otimizar a frequência dos alunos nas instituições de ensino.'
            />
          </div>
          <div className='w-full h-full'>
            <HorizontalCard
              icon='menu_book'
              title='Biblioteca Online'
              content='Biblioteca online para estudantes: acesso fácil a recursos educacionais, promovendo aprendizado autônomo e acesso conveniente a conteúdos relevantes.'
            />
          </div>
        </div>

        <div className='grid grid-rows-2 gap-3'>
          <div className='w-full h-full'>
            <HorizontalCard
              icon='checklist'
              title='Lançamento de Notas'
              content='Nossa solução simplifica o trabalho dos professores e fornece um feedback claro aos alunos sobre seu desempenho acadêmico.'
            />
          </div>
          <div className='w-full h-full'>
            <HorizontalCard
              icon='thumbs_up_down'
              title='Moods (Feedbacks)'
              content='Sistema de feedback interativo: fortaleça a comunicação entre alunos e professores, promovendo um ambiente colaborativo e melhorando a qualidade da aprendizagem.'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
