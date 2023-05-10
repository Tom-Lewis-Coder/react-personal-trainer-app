import React from 'react'

const Testamonials = ({ name, content }) => {
    console.log(name)
  return (
    <div>
        <div>{name}</div>
        <p>{content}</p>
    </div>
  )
}

export default Testamonials