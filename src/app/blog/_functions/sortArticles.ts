import { compareDesc, parseISO } from 'date-fns';

export const sortArticles = (articles: any) => {
  return articles
    .slice()
    .sort((a: any, b: any) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};
