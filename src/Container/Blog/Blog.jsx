import React, { useState, useEffect } from 'react'
import { GraphQLClient, gql } from 'graphql-request'
import BlogPost from '../../Components/BlogPost'
import Header from '../../Components/Header'

import './Blog.scss'

const graphcms = new GraphQLClient('https://api-eu-west-2.hygraph.com/v2/clh942quu0a2m01tab5da0g2b/master')

const QUERY = gql`
    query Posts {
        posts {
            id
            title
            datePublished
            slug
            content {
                html
        }
            author {
                name
                    avatar {
                    url
                    }
            }
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

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await graphcms.request(QUERY)
            setPosts(data)
        }
        fetchPosts()
            .catch(console.error)
    }, [])

    return (
        <div className='app__blog-section' id='articles'>
            <Header title={'Blog Posts'} className={'app__blog-title'} />
            <div className='app__blog-container'>
                {posts?.posts?.map(post => {
                    return <BlogPost
                        title={post.title}
                        content={post.content}
                        author={post.author}
                        coverPhoto={post.coverPhoto}
                        key={post.id}
                        datePublished={post.datePublished}
                        slug={post.slug}
                    />
                })}
            </div>
        </div>
    )
}

export default Blog