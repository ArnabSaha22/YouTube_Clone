import React from "react";

const Comments = ({ data }) => {
  return data.map((comment) => (
    <div className="flex flex-col mt-2" key={comment.id}>
      <span className="font-bold ml-2">{comment.userName}</span>
      <span className="font-thin ml-3"> {comment.comment} </span>
      {comment?.reply && (
        <div className="ml-10">
          <Comments data={comment.reply} />
        </div>
      )}
    </div>
  ));
};

export default Comments;

/**
 * 
 *         
          <span className="font-bold ml-2">{comments.userName}</span>
          <span className="font-thin ml-3"> {comments.reply} </span>
        ;
 */
