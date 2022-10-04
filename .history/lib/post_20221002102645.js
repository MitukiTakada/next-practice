import path from "path"
import fs from "fs"
const postsDirectory = path.join(process.cwd(), "posts");

export function getPostsData() {
  const fileNames = fs.readdirSync(postsDirectory)
}