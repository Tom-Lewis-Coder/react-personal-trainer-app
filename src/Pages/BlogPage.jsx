import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { GraphQLClient, gql } from 'graphql-request'

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

const BlogPage = () => {

    const [blog, setBlog] = useState([])

    const { slug } = useParams()

    useEffect(() => {
        const fetchPost = async () => {
            const data = await graphcms.request(QUERY)
            setBlog(data?.posts?.filter((post) => post.slug === slug))
        }
        fetchPost()
            .catch(console.error)
    }, [slug])

    return (
        <>
           <div dangerouslySetInnerHTML={{__html: blog[0]?.content?.html }} />  
        </>
    )
}

export default BlogPage