import { Client } from '@notionhq/client';
import { slug } from 'github-slugger';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_ARTICLES_DATABASE_ID as string;

export async function getArticles() {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: { property: 'published', checkbox: { equals: true } },
    sorts: [{ property: 'publishedAt', direction: 'descending' }],
  });

  return response.results.map((article: any) => {
    return {
      title: article.properties.title.title[0].plain_text,
      slug: article.properties.slug.rich_text[0].plain_text,
      tags: slug(article.properties.tags.multi_select[0].name),
      lastUpdated: article.last_edited_time,
    };
  });
}
