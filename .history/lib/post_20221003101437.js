import path from "path"
import fs from "fs"
import matter from "gray-matter"
const postsDirectory = path.join(process.cwd(), "posts");

export function getPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostData = fileNames.map((fileName) => {
    const id  = fileName.replace(/\.md$/, "")

    //マークダウンファイルを文字列として読み取る
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);
    //idとデータを返す
    return {
      id,
      ...matterResult.data,
    }
  })
  return allPostData;
}

//getstaticpathでreturnで使うpathを取得する
export function gettAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, "")
      },
    };
  });
}
export function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContent = fs.
}