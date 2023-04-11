import React from 'react'
import Article from '@/components/article/Article'
import Title from '@/components/title/Title'
import styles from './styles.module.scss'
import { client } from '../../../lib/client'
import { format } from 'date-fns'
import Content from '@/components/content/Content'


const Post = ({ post }) => {
    const date = format(new Date(post.publishedDate), 'dd MMMM yyyy')
    //console.log(post)
    return(
        <Article backUrl='/' className={styles.post}>
            <Title className={styles.postTitle}>{post.title}</Title>
            <p className={styles.postData}>{date}</p>
            <Content body={post.body} />
        </Article>
    )
}
export default Post

export async function getStaticPaths() {
    const query = `*[type == "post"] {
        slug {
            current
        }
    }`
    const posts = await client.fetch(query)
    const paths = posts.map((post) => ({
        params: { slug: post.slug.current },
    }))
    return { paths, fallback: 'blocking' }
}
export async function getStaticProps({ params: { slug } }) {
    const query = `*[_type == "post" && slug.current == '${slug}'][0]`
    const post = await client.fetch(query, { slug })
    return { props: { post } }
}