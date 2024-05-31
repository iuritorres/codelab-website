import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function stringArticleToMDX(articlePageId: string) {
  const n2m = new NotionToMarkdown({ notionClient: notion });
  const mdBlocks = await n2m.pageToMarkdown(articlePageId);

  return n2m.toMarkdownString(mdBlocks).parent;
}
