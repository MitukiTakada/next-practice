import path from "path"
import fs from "fs"
const postsDirectory = path.join(process.cwd(), "posts");

export function getPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostData = fileNames.map((fileName) => {
    const id  = fileName.replace(/＼.md$/, "")
  })
}