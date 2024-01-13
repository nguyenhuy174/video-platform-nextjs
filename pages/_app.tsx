import Head from 'next/head';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';


export const metadata = {
  title: 'Video platform',
  description: 'Enjoy awesome video',
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;