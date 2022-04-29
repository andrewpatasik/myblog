import React from 'react'

const PostContent = ({ title, content }) => {

  return (
    <div className='my-2'>
      <h1 className='text-2xl text-gray-700 font-bold tracking-wide'>{title}</h1>
      <p className='h-20 my-1 overflow-hidden text-gray-500 leading-7'>{content}</p>
    </div>
  )
}

export default PostContent;


