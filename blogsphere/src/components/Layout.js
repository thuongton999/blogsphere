import Head from "next/head";

function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="My page title" key="title" />
        <title>Home</title>
      </Head>
      <main>
        {children}
      </main>
    </>
  );
}
export default Layout;