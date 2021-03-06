import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Consectetur tempor nostrud quis deserunt veniam ea est ullamco amet." />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="Group 9 FCTC Hackathon" />
        <title>Home</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
