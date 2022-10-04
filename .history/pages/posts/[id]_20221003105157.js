import Layout from "../../components/Layout";
import { getPostData, gettAllPostIds } from "../../lib/post";


export async function getStaticPaths() {
  const paths = gettAllPostIds();
  return {
    paths,
    fallback: false,
  }
}

export function getStaticProps({params}) {
  const postData = getPostData(params.id);

  return {
    props: {
      postData,
    }
  }
}
export default function Post(props) {
  const {postData} 

  return (
    <Layout >
      動的ルーティング設定
    </Layout>
  );
}