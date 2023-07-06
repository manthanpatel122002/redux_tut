import React from 'react'
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import { Link } from 'react-router-dom';

function PostsExcerpt({ post }) {
  return (
    <div>
      <article>
        <h3>{post.title}</h3>
        <p className='excerpt'>{post.body.substring(0,75)}...</p>
        <p className="postCredit">
          <Link to={`post/${post.id}`}>View Post</Link>
          <PostAuthor userId={post.userId} />
          <TimeAgo timestamp={post.date} />
        </p>
      </article>
    </div>
  );
}

export default PostsExcerpt
