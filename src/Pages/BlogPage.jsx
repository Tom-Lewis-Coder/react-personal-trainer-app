import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'
import { GraphQLClient, gql } from 'graphql-request'
import Button from '../Components/Button'

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

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        const fetchPost = async () => {
            const data = await graphcms.request(QUERY)
            setBlog(data?.posts?.filter((post) => post.slug === slug))
        }
        fetchPost()
            .catch(console.error)
    }, [slug])

    return (
        <div>
            <div className='app__blogPage-container'>
                <div className='app__blog-back'>
                    <Button onClick={goBack} title={'Back'} className={'app__blog-backbutton'} />
                </div>
                <div>
                    <img src={blog[0]?.coverPhoto?.url} alt='' className='app__blogPage-img' />
                    <div dangerouslySetInnerHTML={{ __html: blog[0]?.content?.html }} className='app__blogPage-content' />
                </div>
            </div>
        </div>
    )
}

export default BlogPage