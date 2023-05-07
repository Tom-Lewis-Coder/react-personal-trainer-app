import React from 'react'
import { Link } from 'react-router-dom'

const BlogPost = ({ title, content, author, coverPhoto, datePublished, slug }) => {
    return (
        <div className='app__blogPost-component'>
            <Link to={'/posts/' + slug}>
                <div className='app__component-style'>
                    <img src={coverPhoto?.url} alt='' className='app__component-img'/>
                    <div className='app__component-title'>{title}</div>
                </div>
            </Link>
        </div>
    )
}

export default BlogPost