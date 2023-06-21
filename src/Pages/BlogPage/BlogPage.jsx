import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'
import { GraphQLClient, gql } from 'graphql-request'
import { Button } from '../../Components'

import './BlogPage.scss'

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
            window.scrollTo(0, 0)
        }
        fetchPost()
            .catch(console.error)
    }, [slug])

    return (
        <div className='app__blogPage'>
            <div className='app__blogPage-container'>
                <div className='app__blogPage-back'>
                    <Button onClick={goBack} title={'Back'} className={'app__blogPage-backbutton'} />
                </div>
                <h1 className='app__blogPage-title'>{blog[0]?.title}</h1>
                <img src={blog[0]?.coverPhoto?.url} alt='' className='app__blogPage-img' />
                <div className='app__blogPage-content'>
                <div className='app__blogPage-divider' />
                <div dangerouslySetInnerHTML={{ __html: blog[0]?.content?.html }} />
                <div className='app__blogPage-divider' />
                </div>
                <div className='app__blogPage-footer'>
                    <div className='app__blogPage-author app__flex'>
                        <div>{blog[0]?.author?.name}</div>
                        <img src={blog[0]?.author?.avatar?.url} alt='' className='app__blogPage-avatar' />
                    </div>
                    <div className='app__blogPage-date'>{blog[0]?.coverPhoto?.publishedAt.slice(0, 10).split('-').reverse().join('-')}</div>
                </div>
            </div>
        </div>
    )
}

export default BlogPage