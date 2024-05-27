import {
  Benefits,
  InfoCards,
  OurProducts,
  SimplifiedManagement,
} from '@/sections';

export default function Home() {
  return (
    <main className='-mt-14'>
      <section className='w-full padding-x'>
        <InfoCards />
      </section>

      <section className='w-full padding'>
        <SimplifiedManagement />
      </section>

      <section className='w-full padding bg-light'>
        <OurProducts />
      </section>

      <section className='w-full padding'>
        <Benefits />
      </section>
    </main>
  );
}
