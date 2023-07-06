import React from 'react'
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import { useSelector } from "react-redux";
import { selectPostById } from './postsSlice';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function SinglePostPage() {

    const {postId} = useParams()
    const post = useSelector((state)=>selectPostById(state,Number(postId)));

    if(!post){
        return(
            <section>
                <h2>Post Not Foud</h2>
            </section>
        )
    }
    else{
        return (
          <article>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p className="postCredit">
                    <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
              <PostAuthor userId={post.userId} />
              <TimeAgo userId={post.date} />
            </p>
          </article>
        );
    }
}

export default SinglePostPage
