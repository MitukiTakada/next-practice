import Layout from "../../components/Layout";
import { getPostData, gettAllPostIds } from "../../lib/post";
import utilStyle from "../../styles/utils.module.css"

export async function getStaticPaths() {
  const paths = gettAllPostIds();
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({params}) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    }
  }
}
export default function Post(props) {
  const {postData} = props;

  return (
    <Layout >
      <article>
        <h1 className={utilStyle.headingX1}>{postData.title}</h1>
        <div className={utilStyle.lightText}>{postData.date}</div>
        <div dangerouslySetInnerHTML={{__}}></div>
      </article>
    </Layout>
  );
}