import { poppins } from '@/styles/fonts';
import { use } from 'react';
import ReactMarkdown from 'react-markdown';
import readingTime from 'reading-time';
import rehypeAutoLinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import { ArticleDetails } from '../_components';
import { getArticle, stringArticleToMDX } from '../_functions';
import { ArticleHeroSection } from '../_sections';
import { Remark } from 'react-remark';

export default function Article({ params }: { params: { slug: string } }) {
  const article: any = use(getArticle({ slug: params.slug }));
  const articleContent = use(stringArticleToMDX(article.id));

  console.log(article);

  return (
    <article>
      <header>
        <ArticleHeroSection
          mainTag={article.properties.tags.multi_select[0].name}
          title={article.properties.title.title[0].plain_text}
          imageURL={article.cover.file.url}
        />

        <ArticleDetails
          createdAt={article.created_time}
          mainTag={article.properties.tags.multi_select[0].name}
          readingTime={readingTime(articleContent).text.replace(
            ' min read',
            'min de leitura'
          )}
        />
      </header>

      <section className='grid grid-cols-12 gap-y-8 lg:gap-8 sxl:gap-16 mt-8 px-5 md:px-10'>
        <div
          className={`col-span-12 lg:col-span-4 lg:order-2 ${poppins.className}`}
        >
          <details
            className='border-[1px] border-solid border-dark dark:border-white text-dark dark:text-white
            rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto media'
            open
          >
            <summary className='text-lg font-semibold capitalize cursor-pointer'>
              Sumário
            </summary>

            <ul className='mt-4 text-base'>
              <li className='py-1'>
                <a
                  href={`#`}
                  data-level='two'
                  className='data-[level=two]:pl-0  data-[level=two]:pt-2
                    data-[level=two]:border-t border-solid border-dark/40
                    data-[level=three]:pl-4
                    sm:data-[level=three]:pl-6
                    flex items-center justify-start'
                >
                  {'two' === 'three' ? (
                    <span className='flex w-1 h-1 rounded-full bg-dark mr-2'>
                      &nbsp;
                    </span>
                  ) : null}

                  <span className='hover:underline hover:text-primary'>
                    Title 1
                  </span>
                </a>
              </li>
              <li className='py-1'>
                <a
                  href={`#`}
                  data-level='three'
                  className='data-[level=two]:pl-0  data-[level=two]:pt-2
                          data-[level=two]:border-t border-solid border-dark/40
                          data-[level=three]:pl-4
                          sm:data-[level=three]:pl-6
                          flex items-center justify-start'
                >
                  {'three' === 'three' ? (
                    <span className='flex w-1 h-1 rounded-full bg-dark mr-2'>
                      &nbsp;
                    </span>
                  ) : null}

                  <span className='hover:underline hover:text-primary'>
                    Subtitle 1
                  </span>
                </a>
              </li>
              <li className='py-1'>
                <a
                  href={`#`}
                  data-level='three'
                  className='data-[level=two]:pl-0  data-[level=two]:pt-2
                          data-[level=two]:border-t border-solid border-dark/40
                          data-[level=three]:pl-4
                          sm:data-[level=three]:pl-6
                          flex items-center justify-start'
                >
                  {'three' === 'three' ? (
                    <span className='flex w-1 h-1 rounded-full bg-dark mr-2'>
                      &nbsp;
                    </span>
                  ) : null}

                  <span className='hover:underline hover:text-primary'>
                    Subtitle 2
                  </span>
                </a>
              </li>
              <li className='py-1'>
                <a
                  href={`#`}
                  data-level='three'
                  className='data-[level=two]:pl-0  data-[level=two]:pt-2
                          data-[level=two]:border-t border-solid border-dark/40
                          data-[level=three]:pl-4
                          sm:data-[level=three]:pl-6
                          flex items-center justify-start'
                >
                  {'three' === 'three' ? (
                    <span className='flex w-1 h-1 rounded-full bg-dark mr-2'>
                      &nbsp;
                    </span>
                  ) : null}

                  <span className='hover:underline hover:text-primary'>
                    Subtitle 2
                  </span>
                </a>
              </li>
              <li className='py-1'>
                <a
                  href={`#`}
                  data-level='three'
                  className='data-[level=two]:pl-0  data-[level=two]:pt-2
                          data-[level=two]:border-t border-solid border-dark/40
                          data-[level=three]:pl-4
                          sm:data-[level=three]:pl-6
                          flex items-center justify-start'
                >
                  {'three' === 'three' ? (
                    <span className='flex w-1 h-1 rounded-full bg-dark mr-2'>
                      &nbsp;
                    </span>
                  ) : null}

                  <span className='hover:underline hover:text-primary'>
                    Subtitle 2
                  </span>
                </a>
              </li>

              {/* {blog.toc.map((heading) => {
                  return (
                    <li key={`#${heading.slug}`} className="py-1">
                      <a
                        href={`#${heading.slug}`}
                        data-level={heading.level}
                        className="data-[level=two]:pl-0  data-[level=two]:pt-2
                                       data-[level=two]:border-t border-solid border-dark/40
                                       data-[level=three]:pl-4
                                       sm:data-[level=three]:pl-6
                                       flex items-center justify-start
                                       "
                      >
                        {heading.level === 'three' ? (
                          <span className="flex w-1 h-1 rounded-full bg-dark mr-2">
                            &nbsp;
                          </span>
                        ) : null}

                        <span className="hover:underline">{heading.text}</span>
                      </a>
                    </li>
                  )
                })} */}
            </ul>
          </details>
        </div>

        <div
          className={`col-span-12 lg:col-span-8 max-w-max
            prose sm:prose-base md:prose-lg prose-h2:text-4xl

            prose-blockquote:bg-primary/20 
            prose-blockquote:p-2
            prose-blockquote:px-6
            prose-blockquote:border-primary
            prose-blockquote:not-italic
            prose-blockquote:rounded-r-lg

            prose-li:marker:text-primary

            dark:prose-invert
            dark:prose-blockquote:border-primaryDark
            dark:prose-blockquote:bg-primaryDark/20
            dark:prose-li:marker:text-primaryDark

            font-medium ${poppins.className} select-text
            selection:bg-primary/70 selection:text-white
            dark:selection:text-dark dark:selection:bg-light
            first-letter:text-3xl sm:first-letter:text-4xl`}
        >
          <Remark
             rehypePlugins={[rehypeAutoLinkHeadings()]}
              // rehypeReactOptions={{
              //   components: {
              //     p: (props) => <p className="custom-paragraph" {...props} />,
              //   },
              // }}
            // rehypePlugins={[
            //   [rehypeAutolinkHeadings, { behavior: 'append' }],
            //   [
            //     rehypePrettyCode,
            //     { theme: 'github-dark', grid: false, lineNumbers: true },
            //   ],
            // ]}
            // remarkPlugins={[remarkGfm]}
          >
            {articleContent}
          </Remark>
          <div />
        </div>
      </section>
    </article>
  );
}
