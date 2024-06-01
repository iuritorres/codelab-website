import Link from 'next/link';
import { use } from 'react';
import { formatDate, getArticles } from './_functions';

export default function Blog() {
  const articles = use(getArticles());

  return (
    <main className='flex flex-col items-center justify-center'>
      {/* <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} /> */}

      <h1 className='text-4xl font-bold my-14'>Artigos</h1>

      <div className='flex flex-row items-center justify-center gap-8'>
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/article/${article.slug}`}
            title={article.title}
            className='mb-10 w-96 h-52 bg-light2 shadow-2xl p-5 rounded-xl transition-transform
              hover:scale-105 flex-1 flex flex-col justify-between items-start gap-2 cursor-pointer'
          >
            <h2 className='font-semibold text-xl'>{article.title}</h2>

            <div>
              <p className='mb-2'>
                Tags:{' '}
                <span className='hover:text-secondary hover:underline transition-colors'>
                  #{article.tags}
                </span>
              </p>
              <p>Última atualização: {formatDate(article.lastUpdated)}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
