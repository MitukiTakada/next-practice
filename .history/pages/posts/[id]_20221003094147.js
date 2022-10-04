import Layout from "../../components/Layout";
import { gettAllPostIds } from "../../lib/post";

export default function Post() {

  export function getStaticPath() {
    const paths = gettAllPostIds();
    return {
      paths,
      
    }
  }
  return (
    <Layout >
      動的ルーティング設定
    </Layout>
  );
}