import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_ARTICLES_DATABASE_ID as string;

export async function getArticle({ slug }: { slug: string }) {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      and: [
        { property: 'published', checkbox: { equals: true } },
        { property: 'slug', rich_text: { equals: slug } },
      ],
    },
  });

  return response.results[0];
}
