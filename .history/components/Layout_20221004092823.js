import Head from "next/head";
import styles from "./layout.module.css"
import utilStyles from "../styles/utils.module.css"
export const sitteTitle = "Next.js blog"

function Layout(props) {
  const {children, home} = props;
  return (

    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img src="/profile.png" className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`} />
            <h1 className={utilStyles.headingXl}>mistuki takada</h1>
          </>
        ) : (
          <>
          <img src="/profile.png" className={utilStyles.borderCircle} />
          <h1 className={utilStyles.headingXl}>mistuki takada</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home &&}
    </div>
  );
}

export default Layout;