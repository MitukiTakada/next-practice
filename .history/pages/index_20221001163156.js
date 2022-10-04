import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import utilStyle from "../styles/utils.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={`${utilStyle}{utilStyle.headingMd}`}>
        <p>名古屋の大学に通う大学三年生です。約1年間プログラミングを独学しており、将来はフロントエンジニアとして活躍していきたいと考えております。</p>
      </section>
      <section>
        <h2>エンジニアのブログ</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}/>
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText}>SSGとSSRの使い分けの場面はいつなのか？</a>
            </Link>
            <br/>
            <small className={utilStyle.lightText}>2022 11/28</small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}/>
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText}>SSGとSSRの使い分けの場面はいつなのか？</a>
            </Link>
            <br/>
            <small className={utilStyle.lightText}>2022 11/28</small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}/>
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText}>SSGとSSRの使い分けの場面はいつなのか？</a>
            </Link>
            <br/>
            <small className={utilStyle.lightText}>2022 11/28</small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}/>
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText}>SSGとSSRの使い分けの場面はいつなのか？</a>
            </Link>
            <br/>
            <small className={utilStyle.lightText}>2022 11/28</small>
          </article>
        </div>
      </section>
      
    </Layout>
  )
}
