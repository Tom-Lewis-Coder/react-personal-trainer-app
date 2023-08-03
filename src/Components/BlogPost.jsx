import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const BlogPost = ({ title, coverPhoto, slug, topic }) => {
  return (
    <div className="app__blogPost-component">
      <Link to={'/posts/' + slug} className="app__blog-link">
        <div className="app__blogComponent-style">
          <img src={coverPhoto?.url} alt="" className="app__blogComponent-img" />
          <div className="app__blogComponent-topic">{topic}</div>
          <div className="app__blogComponent-title">{title}</div>
        </div>
      </Link>
    </div>
  )
}

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  coverPhoto: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired
}

export default BlogPost
