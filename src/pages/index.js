import React, { useState } from "react"
import Section from "@/components/section/Section"
import SocialNetwork from "@/components/socialNetwork/SocialNetwork"
import BuyMeCoffee from "@/components/buyMeCoffee/BuyMeCoffee"
import Title from "@/components/title/Title"
import Cover from "@/components/cover/Cover"
import { loadPosts } from "./api/posts"
import PostGrid from "@/components/postGrid/PostGrid"
import Post from "@/components/post/Post"
import Button from "@/components/button/Button"

const LOAD_MORE_STEP = 4

export default function HomePage({ initialPosts, total }) {
  const [posts, setPosts] = useState(initialPosts)
  const [loadedAmount, setLoadedAmount] = useState(LOAD_MORE_STEP)
  const [isLoading, setIsLoading] = useState(false)

  const isLoadedButton = total > loadedAmount

  const getMorePosts = async () => {
    setIsLoading(true)
    try{
      const data = await fetch(`/api/posts?start=${loadedAmount}&end=${loadedAmount + LOAD_MORE_STEP}`).then((res) => res.json())
      setLoadedAmount(loadedAmount + LOAD_MORE_STEP)
      setPosts([...posts, ...data.posts])
      setIsLoading(false)
    }
    catch(error){
      console.log(error)
      setIsLoading(false)
    }
  }

  console.log(initialPosts)
  return (
    <>
      <Section>
        <Cover  title="Code<br />craters' blog"/>
        <SocialNetwork />
        <BuyMeCoffee />
      </Section>
      <Section>
        <Title>New post</Title>
        <PostGrid>
          {posts.map((post) => (
            <Post
              key={post.slug.current}
              {...post} />
          ))}
        </PostGrid>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          <Button onClick={getMorePosts} disabled={isLoading}>Load more posts ...</Button>
        </div>
      </Section>
    </>
  )
}

export const getServerSideProps = async () => {
  const { posts, total } = await loadPosts(0, LOAD_MORE_STEP)

  return {
    props: {
      initialPosts: posts,
      total,
    },
  }
}
