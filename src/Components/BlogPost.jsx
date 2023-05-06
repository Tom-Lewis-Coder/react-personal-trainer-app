import React from 'react'
import { Link } from 'react-router-dom'

const BlogPost = ({ title, author, coverPhoto, datePublished, slug }) => {
    return (
        <div className='app__blogPost'>
            <Link to={'/posts/' + slug}>
                <div>
                    <img src={coverPhoto.url} alt=''/>
                </div>
            </Link>
        </div>
    )
}

export default BlogPost