import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";

const name = "Mehmet Can BOZ";
export const siteTitle = "Next.js Sample Website";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className="max-w-2xl mt-12 mb-24 mx-auto px-4 py-0">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
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
      {!home && (
        <div className="mt-12 mb-0 mx-0">
          <Link href="/">← Back to home</Link>
        </div>
      )}
      <div className="flex items-center justify-center mt-4 gap-12">
        <a
          target="_blank"
          href="https://github.com/MehmetCanBOZ"
          rel="noopener noreferrer"
        >
          <Image src="/assets/github.svg" height={50} width={50} />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/mehmet-can-boz/"
          rel="noopener noreferrer"
        >
          <Image src="/assets/linkedin.svg" height={50} width={50} />
        </a>
      </div>
    </div>
  );
}
