import Head from "next/head";

function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Start " />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="John Doe" />
        <title>Home</title>
      </Head>
      <main>
        {children}
      </main>
    </>
  );
}
export default Layout;