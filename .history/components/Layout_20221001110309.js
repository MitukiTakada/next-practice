import Head from "next/head";
import styles from "./layout.module.css"
import utilStyles from "../styles/utils.module.css"
export const sitteTitle = "Next.js blog"

function Layout(props) {
  const {children} = props;
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <header className={styles.header}>
        <img src="/profile.png"/>
        <h1>mistuki takada</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;