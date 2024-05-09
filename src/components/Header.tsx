import Card from './Card';
import Navbar from './Navbar';
import PrimaryAnchor from './PrimaryAnchor';

export default function Header() {
  return (
    <header className='w-full h-[600px] relative'>
      <Navbar />

      {/* <div className='mt-24 text-light w-3/4 mx-auto flex flex-col gap-5'>
        <h2 className='text-[34px] leading-10 font-medium'>
          Simplifique sua gestão
          <br />
          educacional com
          <br />
          nossas solucões
        </h2>
        <p>
          Sistemas de gestão educacional integrados de maneira ágil e<br />
          segura. Tudo em uma única plataforma.
        </p>

        <PrimaryAnchor href='#'>Conhecer nossas solucões</PrimaryAnchor>
      </div>

      <div className='absolute top-0 left-0 w-full h-full bg-header bg-center bg-cover -scale-x-100 -z-10'></div>

      <div className='mx-28 w-auto -bottom-[848px] lg:-bottom-[448px] xl:-bottom-72 absolute flex flex-wrap gap-7'>
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
      </div> */}
    </header>
  );
}
