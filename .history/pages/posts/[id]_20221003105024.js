import Layout from "../../components/Layout";
import { gettAllPostIds } from "../../lib/post";


export async function getStaticPaths() {
  const paths = gettAllPostIds();
  return {
    paths,
    fallback: false,
  }
}

export function getStaticProps({params}) {
  const postData = getP
}
export default function Post() {

  return (
    <Layout >
      動的ルーティング設定
    </Layout>
  );
}