import React from 'react';
import Layout from '../../components/layout';
import { fetchMediumBlogs } from '../../lib/posts';

type Article = {
  title: string;
  link: string;
  pubDate: string;
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
            <li key={article.link}>{article.title}</li>
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
