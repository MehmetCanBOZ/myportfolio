import React from 'react';
import Image from 'next/image';
import Layout from '../../components/layout';
import Date from '../../components/date';
import { fetchMediumBlogs } from '../../lib/posts';

type Article = {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
};

type Props = {
  articles: Article[];
};

function Blogs({ articles }: Props) {
  return (
    <Layout>
      <div>
        <ul>
          {articles.map((article) => (
            <a
              key={article.link}
              target="_blank"
              href={article.link}
              rel="noopener noreferrer"
              className="hover:no-underline"
            >
              <div className="flex items-center gap-8 border border-stone-400 rounded-lg p-4 mb-4 hover:shadow-lg transition duration-200 hover:border-red-400 hover:scale-105">
                <Image
                  priority
                  src={article.thumbnail}
                  className="rounded-full"
                  height={140}
                  width={140}
                  alt={article.title}
                />
                <div>
                  <li
                    key={article.link}
                    className="text-zinc-800"
                  >
                    {article.title}
                  </li>
                  <Date dateString={article.pubDate} />
                </div>
              </div>
            </a>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const articles = await fetchMediumBlogs();
  return {
    props: {
      articles,
    },
  };
};

export default Blogs;
