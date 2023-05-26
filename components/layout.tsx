import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Menu from './menu';

const name = 'Mehmet Can BOZ';
export const siteTitle = 'Mehmet Can BOZ Developer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="max-w-2xl mt-12 mb-24 mx-auto px-4 py-0">
    <Head>
      <link
        rel="icon"
        href="/favicon.ico"
      />
      <meta
        name="description"
        content="Learn how to build a personal website using Next.js"
      />
      <meta
        property="og:image"
        content={`https://og-image.vercel.app/${encodeURI(
          siteTitle,
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta
        name="og:title"
        content={siteTitle}
      />
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
    </Head>
    <header className="flex flex-col items-center">
      <Image
        priority
        src="/images/profile.jpg"
        className="rounded-full"
        height={144}
        width={144}
        alt={name}
      />
      <h1 className="text-4xl font-bold">{name}</h1>
    </header>
    <Menu />
    <main>{children}</main>
    <div className="flex items-center justify-center mt-8 gap-12">
      <a
        target="_blank"
        href="https://github.com/MehmetCanBOZ"
        rel="noopener noreferrer"
      >
        <Image
          src="/assets/github.svg"
          height={50}
          width={50}
          alt="github"
        />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/mehmet-can-boz/"
        rel="noopener noreferrer"
      >
        <Image
          src="/assets/linkedin.svg"
          height={50}
          width={50}
          alt="linkedin"
        />
      </a>
    </div>
  </div>
);

export default Layout;
