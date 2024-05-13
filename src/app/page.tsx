import Card from '@/components/Card';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HorizontalCard from '@/components/HorizontalCard';
import PrimaryAnchor from '@/components/PrimaryAnchor';

export default function Home() {
  return (
    <>
      <Header />

      <main className='relative'>
        {/* CARDS */}
        <div className='mx-6 w-auto flex flex-wrap gap-7 absolute -top-14'>
          <Card
            icon='forum'
            title='Comunicação Eficiente'
            description='Nosso software de gestão educacional oferece recursos avançados de comunicação que facilitam a comunicação entre escola, pais e alunos, permitindo a troca de informações importantes.'
            className='w-full lg:w-[48%] xl:w-[23%]'
          />

          <Card
            icon='account_tree'
            title='Integração Simplificada'
            description='Nosso software de gestão educacional permite a integração simplificada com outros sistemas utilizados pela sua instituição.'
            className='w-full lg:w-[48%] xl:w-[23%]'
          />

          <Card
            icon='rebase'
            title='Automação de Processos'
            description='Reduza a carga de trabalho administrativo e aumente a eficiência com a automação de processos.'
            className='w-full lg:w-[48%] xl:w-[23%]'
          />

          <Card
            icon='support_agent'
            title='Suporte Ativo'
            description='Oferecemos suporte técnico dedicado, com uma equipe especializada disponível para responder às suas perguntas e resolver quaisquer problemas.'
            className='w-full lg:w-[48%] xl:w-[23%]'
          />
        </div>

        {/* SIMPLIFIED MANAGEMENT */}
        {/* <section className='w-full pt-96 pb-20'>
          <div className='mx-28 flex justify-between items-center'>
            <div className='w-1/2'>
              <span className='text-md text-primary-dark'>Nosso Software</span>
              <h1 className='text-2xl text-dark-gray2 font-medium'>
                Gestão Simplificada
              </h1>

              <p className='text-light-gray pr-9 mt-7'>
                Nosso software de gestão educacional oferece um conjunto
                abrangente de funcionalidades para atender às necessidades
                específicas das instituições de ensino. Gerencie alunos, turmas,
                matrículas, notas, frequência, calendários acadêmicos e muito
                mais em uma única plataforma fácil de usar.
              </p>

              <div className='flex items-center gap-10 mt-8 text-primary-dark'>
                <div className='text-3xl flex gap-4'>
                  <span className='material-symbols-rounded text-4xl'>
                    school
                  </span>
                  <div>
                    <span className='font-bold'>20+</span>
                    <p className='text-light-gray text-base'>Clientes</p>
                  </div>
                </div>

                <div className='text-3xl flex gap-4'>
                  <span className='material-symbols-rounded text-4xl'>
                    groups
                  </span>
                  <div>
                    <span className='font-bold'>12+</span>
                    <p className='text-light-gray text-base'>Desenvolvedores</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='w-1/2'>
              <a
                href='#'
                className='rounded-media shadow-media flex justify-center items-center
              h-80 bg-homePageVideo bg-center bg-cover hover:opacity-90
              '
              >
                <span className='material-symbols-rounded text-7xl text-primary-dark'>
                  play_circle
                </span>
              </a>
            </div>
          </div>
        </section> */}

        <section className='w-full py-10 absolute top-[1200px] bg-light'>
          <div className='mx-6 grid grid-rows-2 xl:px-28'>
            <div className='row-span-1'>
              <span className='text-md text-primary-dark'>Nosso Software</span>
              <h1 className='text-2xl text-dark-gray2 font-medium'>
                Gestão Simplificada
              </h1>

              <p className='text-light-gray pr-9 mt-7'>
                Nosso software de gestão educacional oferece um conjunto
                abrangente de funcionalidades para atender às necessidades
                específicas das instituições de ensino. Gerencie alunos, turmas,
                matrículas, notas, frequência, calendários acadêmicos e muito
                mais em uma única plataforma fácil de usar.
              </p>

              <div className='flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-10 my-8 text-primary-dark'>
                <div className='text-3xl flex gap-4'>
                  <span className='material-symbols-rounded text-4xl'>
                    school
                  </span>
                  <div>
                    <span className='font-bold'>20+</span>
                    <p className='text-light-gray text-base '>
                      Clientes
                    </p>
                  </div>
                </div>

                <div className='text-3xl flex gap-4'>
                  <span className='material-symbols-rounded text-4xl'>
                    groups
                  </span>
                  <div>
                    <span className='font-bold'>12+</span>
                    <p className='text-light-gray text-base '>
                      Desenvolvedores
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='row-span-1'>
              <a
                href='#'
                className='rounded-media shadow-media flex justify-center items-center
                h-1/2 w-full bg-homePageVideo bg-center bg-cover hover:opacity-90
                '
              >
                <span className='material-symbols-rounded text-7xl text-primary-dark'>
                  play_circle
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* OUR PRODUCTS */}
        {/* <section className='bg-light w-full py-10'>
        <div className='mx-28 flex py-5'>
          <div>
            <span className='text-md text-primary-dark'>Nosso Software</span>
            <h1 className='text-2xl text-dark-gray2 font-medium'>
              Gestão Simplificada
            </h1>

            <p className='text-light-gray pr-9 mt-7 mb-14'>
              Nossos produtos visam aumentar a produtividade e promover
              eficiência na gestão educacional, resultando em melhores
              desempenhos e resultados positivos para a sua instituição de
              ensino.
            </p>

            <PrimaryAnchor href='#'>Ver todos</PrimaryAnchor>
          </div>

          <div className='grid grid-cols-2 gap-3'>
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
        </div>
      </section> */}

        {/* BENEFITS */}
        {/* <section className='w-100 py-5 mb-5'>
        <div className='mx-28 py-5 grid grid-cols-2'>
          <div className='col-span-1'>
            <a
              href='#'
              className='shadow-media rounded-media bg-homePageImage bg-center bg-cover w-[80%] h-full flex'
            ></a>
          </div>

          <div className='col-span-1'>
            <span className='text-md text-primary-dark'>Quem somos</span>
            <h1 className='text-2xl text-dark-gray2 font-medium'>
              Nossos Benefícios
            </h1>

            <p className='text-light-gray pr-9 mt-5 mb-10'>
              Somos uma equipe dedicada a transformar a gestão educacional por
              meio de soluções inovadoras e eficientes. Nossos produtos
              proporcionam resultados tangíveis para instituições educacionais,
              incluindo aumento de produtividade, redução de erros, melhor
              comunicação e otimização do tempo.
            </p> */}

        {/* PROGRESS BARS */}
        {/* {[
              { title: 'Aumento de Produtividade', value: 40 },
              { title: 'Redução de Retrabalhos', value: 70 },
              { title: 'Melhoria na Comunicação', value: 50 },
              { title: 'Otimização do Tempo', value: 30 },
            ].map((item) => (
              <div
                key={`home-benefits-${item.title}-${item.value}`}
                className='mb-4'
              >
                <div className='flex justify-between'>
                  <span className='text-light-gray'>{item.title}</span>
                  <span className='text-light-gray'>{item.value}%</span>
                </div>

                <progress className='w-full' value={item.value} max={100} />
              </div>
            ))}
          </div>
        </div>
      </section> */}
      </main>

      {/* <Footer /> */}
    </>
  );
}
