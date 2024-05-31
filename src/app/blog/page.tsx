import { use } from 'react';
import { getArticles } from './_functions';

export default function Blog() {
  const articles = use(getArticles());

  return (
    <main className='flex flex-col items-center justify-center'>
      {/* <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} /> */}

      <h1>Blog</h1>

      {articles.map((article) => (
        <article key={article.slug} className='mb-10'>
          <h2>{article.title}</h2>
          <p>tags: {article.tags}</p>
          <p>last updated: {article.lastUpdated}</p>
        </article>
      ))}
    </main>
  );
}
