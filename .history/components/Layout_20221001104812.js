import Head from "next/head";

function Layout() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <header>
        <img src="/profile.png"/>
        <h1></h1>
      </header>
    </div>
  );
}

export default Layout;