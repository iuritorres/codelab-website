import { poppins } from '@/styles/fonts';
import { slug } from 'github-slugger';
import Link from 'next/link';
import { formatDate } from '../_functions';

interface ArticleDetailsProps {
  createdAt: string;
  mainTag: string;
  readingTime: string;
}

export default function ArticleDetails({
  createdAt,
  mainTag,
  readingTime,
}: ArticleDetailsProps) {
  {
    return (
      <div
        className={`px-2 md:px-10 bg-primary-dark dark:bg-secondary text-white dark:text-dark ${poppins.className}
        py-2 flex items-center justify-around flex-wrap text-lg sm:text-xl font-medium mx-5  md:mx-10 rounded-lg`}
      >
        <time className='m-3' title='Data de publicação'>
          {formatDate(createdAt)}
        </time>

        <span className='m-3' title='Quantidade de Visualizações'>
          572 Visualizações
        </span>

        <div className='m-3' title='Tempo médio de leitura'>
          {readingTime}
        </div>

        <Link
          title='Ir para categoria'
          href={`/categories/${slug(mainTag)}`}
          className='m-3 hover:text-secondary hover:underline transition-colors'
        >
          #{mainTag}
        </Link>
      </div>
    );
  }
}
