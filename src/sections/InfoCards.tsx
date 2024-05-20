import { Card } from '@/components';

export function InfoCards() {
  return (
    <section className='w-auto wide:max-container flex flex-wrap gap-7'>
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
    </section>
  );
}
