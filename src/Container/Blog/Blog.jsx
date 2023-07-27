import React, { useState, useEffect } from 'react'
import { GraphQLClient, gql } from 'graphql-request'
import { Header, BlogPost } from '../../Components'
import '@fontsource/playfair-display'

import './Blog.scss'

const graphcms = new GraphQLClient(
  'https://api-eu-west-2.hygraph.com/v2/clh942quu0a2m01tab5da0g2b/master'
)

const QUERY = gql`
  query Posts {
    posts {
      id
      title
      datePublished
      slug
      author {
        name
        avatar {
          url
        }
      }
      topic
      coverPhoto {
        publishedAt
        publishedBy {
          id
        }
        id
        url
      }
    }
  }
`

const Blog = () => {
  const [posts, setPosts] = useState([])
  const [readMore, setReadMore] = useState(false)

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await graphcms.request(QUERY)
      setPosts(data)
    }
    fetchPosts().catch(console.error)
  }, [])

  const handleClick = () => {
    setReadMore(!readMore)
  }

  return (
    <div className="app__blog-section" id="blog/nutrition">
      <Header title={'Blog'} className={'app__blog-title'} />
      <div onClick={handleClick} className="app__blog-readMoreTop" id="top">
        {posts?.posts?.length > 5 && readMore ? <p>Less...</p> : <p></p>}
      </div>
      <div className="app__blog-container">
        {!readMore
          ? posts?.posts?.slice(0, 5).map((post) => {
              return (
                <BlogPost
                  title={post.title}
                  coverPhoto={post.coverPhoto}
                  key={post.id}
                  slug={post.slug}
                  topic={post.topic}
                />
              )
            })
          : posts?.posts?.map((post) => {
              return (
                <BlogPost
                  title={post.title}
                  coverPhoto={post.coverPhoto}
                  key={post.id}
                  slug={post.slug}
                  topic={post.topic}
                />
              )
            })}
      </div>
      <div onClick={handleClick} className="app__blog-readMoreBottom">
        {posts?.posts?.length <= 5 ? (
          <p></p>
        ) : readMore ? (
          <a href="#top">Less...</a>
        ) : (
          <p>More...</p>
        )}
      </div>
    </div>
  )
}

export default Blog
