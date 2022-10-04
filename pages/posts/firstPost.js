import Head from "next/head";
import Layout from "../../components/Layout";

export default function firstPost() {
  return (
    <div>
      <Head>
        <title>first-post</title>
      </Head>
      <Layout />
      <h1>最初の投稿</h1>
      <h2>ホームへ戻る</h2>
    </div>
  );
}