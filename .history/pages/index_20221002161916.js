import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import { getPostsData } from '../lib/post'
import styles from '../styles/Home.module.css'
import utilStyle from "../styles/utils.module.css"

//SSGの場合
export async function getStaticProps() {
  const allPostData = getPostsData();
  console.log(allPostData)
  return{
    props: {
      allPostData,
    }
  }
}

export default function Home(props) {
  const {allPostData} = props;
  console.log(allPostData)
  return (
    <Layout>
      <section className={`${utilStyle.padding1px} ${utilStyle.headingMd}`}>
        <p>名古屋の大学に通う大学三年生です。約1年間プログラミングを独学しており、将来はフロントエンジニアとして活躍していきたいと考えております。</p>
      </section>
      <section>
        <h2>エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostData.map(() => (
            
          ))}
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
