import { CardProps } from '@/components/Card';

interface linkInterface {
  label: string;
  link: string;
}

interface navbarLinkInterface {
  label: string;
  links: { label: string; link: string; icon: string }[];
}

export const navbarLinks: navbarLinkInterface[] = [
  { label: 'Produtos', links: [{ label: '', link: '/', icon: '' }] },
  { label: 'Clientes', links: [{ label: '', link: '/', icon: '' }] },
  { label: 'Conteúdos', links: [{ label: '', link: '/', icon: '' }] },
  { label: 'Bytecode', links: [{ label: '', link: '/', icon: '' }] },
];

interface footerLinkInterface {
  title: string;
  links: linkInterface[];
}

export const footerLinks: footerLinkInterface[] = [
  {
    title: 'Outras Páginas',
    links: [
      { label: 'Home', link: '/' },
      { label: 'Sobre', link: '/' },
      { label: 'Serviços', link: '/' },
      { label: 'Produtos', link: '/' },
      { label: 'Contato', link: '/' },
    ],
  },
  {
    title: 'Links Extras',
    links: [
      { label: 'Isenção de Responsabilidade', link: '/' },
      { label: 'Política de Privacidade', link: '/' },
      { label: 'Termos de Uso', link: '/' },
      { label: 'Créditos', link: '/' },
      { label: 'FAQ', link: '/' },
    ],
  },
];

export const socialMedia = {
  instagram: 'https://www.instagram.com/eu.iuritorres',
  linkedin: 'https://www.linkedin.com/in/iuri-torres',
  github: 'https://github.com/iuritorres',
  email: 'iuri.t1000@gmail.com',
  phone: '+55 (81) 97345-8833',
};

export const benefits: { title: string; value: number }[] = [
  { title: 'Aumento de Produtividade', value: 40 },
  { title: 'Redução de Retrabalhos', value: 70 },
  { title: 'Melhoria na Comunicação', value: 50 },
  { title: 'Otimização do Tempo', value: 30 },
];

export const simplifiedManagementData = {
  customers: 20,
  developers: 12,
};

export const infoCardsData: CardProps[] = [
  {
    icon: 'forum',
    title: 'Comunicação Eficiente',
    description:
      'Nosso software de gestão educacional oferece recursos avançados de comunicação que facilitam a comunicação entre escola, pais e alunos, permitindo a troca de informações importantes.',
  },
  {
    icon: 'account_tree',
    title: 'Integração Simplificada',
    description:
      'Nosso software de gestão educacional permite a integração simplificada com outros sistemas utilizados pela sua instituição.',
  },
  {
    icon: 'rebase',
    title: 'Automação de Processos',
    description:
      'Reduza a carga de trabalho administrativo e aumente a eficiência com a automação de processos.',
  },
  {
    icon: 'support_agent',
    title: 'Suporte Ativo',
    description:
      'Oferecemos suporte técnico dedicado, com uma equipe especializada disponível para responder às suas perguntas e resolver quaisquer problemas.',
  },
];
