import React from 'react'
import Comments from './Comments'
import CommentsData from '../Utils/CommentsData'

const CommentSection = () => {
  return (
    <div>
      <h1 className='ml-2 font-bold'>Comments Section...</h1>
      <Comments data={CommentsData}/>
    </div>
  )
}

export default CommentSection
