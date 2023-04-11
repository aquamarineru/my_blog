// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { client } from 'lib/client.js'

export default async function posts(req, res) {
  const { start, end } = req.query
  if(isNaN(Number(start)) || isNaN(Number(end))){
    return res.status(400).json({ error: 'Invalid query' })
  }
  const { posts, total } = await loadPosts(start, end)
  res.status(200).json({ posts, total })
}
export async function loadPosts(start, end) {
  const query = `{
    'posts': *[_type == "post"] | order(publishedDate desc) [${start}...${end}] {_id, title, publishedDate, slug, description, image},
    'total': count(*[_type == "post"])
  }`
  const { posts, total } = await client.fetch(query)

  return { posts, total }
}