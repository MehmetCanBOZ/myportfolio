/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable react/jsx-one-expression-per-line */
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="text-xl">
        <h1 className="text-2xl font-bold mb-2">Hello!</h1>
        <p>
          I&apos;m Mehmet, a software developer living in Istanbul.
          <br />
          <br />I currently work at{' '}
          <a
            href="https://www.trendyol.com/"
            target="_blank"
          >
            Trendyol Group
          </a>{' '}
          which is the largest e-commerce platform and technology company in Turkey, headquartered
          in Istanbul. I am working on{' '}
          <a
            href="https://trendyolgo.com/"
            target="_blank"
          >
            Trendyol Go
          </a>{' '}
          which is an instant delivery project (grocery, meal). I am working on a mobile application
          used by couriers and a web app where the operations team manages orders. I work with a
          team of highly skilled engineers and PM with a agile development environment.
          <br />
          <br />I design and develop web and mobile applications with using React, Next.js, React
          Native, Django and Nodejs.
        </p>
      </section>
    </Layout>
  );
}
