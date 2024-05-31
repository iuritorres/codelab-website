import { slug } from 'github-slugger';
import Image from 'next/image';
import { Tag } from '../_components';

interface ArticleHeroSectionProps {
  mainTag: string;
  title: string;
  imageURL: string;
}

export default function ArticleHeroSection({
  mainTag,
  title,
  imageURL,
}: ArticleHeroSectionProps) {
  return (
    <div className='mb-8 text-center relative w-full h-[70vh] bg-dark'>
      <div className='w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <Tag
          name={mainTag}
          link={`/categories/${slug(mainTag)}`}
          className='px-6 text-sm py-2'
        />

        <h1 className='inline-block mt-6 font-semibold capitalize text-white text-3xl md:text-4xl !leading-normal relative w-5/6'>
          {title}
        </h1>
      </div>

      <div className='absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60 dark:bg-dark/40' />

      <Image
        src={imageURL}
        alt={title}
        width={1200}
        height={500}
        className='aspect-square w-full h-full object-cover object-center'
        sizes='100vw'
        priority
      />
    </div>
  );
}
