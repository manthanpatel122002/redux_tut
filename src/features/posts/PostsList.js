import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from "./postsSlice";
import React from "react";
import PostsExcerpt from "./PostsExcerpt";

import { useEffect } from "react";
// import ReactionButtons from "./ReactionsButton";

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  console.log(posts.content, "posts");
  const postsStatus = useSelector(getPostsStatus)
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  let content;
  if(postsStatus ==='loading'){
    content = <p>"Loading..."</p>
  }
  else if(postsStatus==='succeeded'){
    const orderedPosts = posts.slice().sort((a,b)=>a>b?-1:1)
    content = orderedPosts.map(post=><PostsExcerpt key={post.id} post={post}/>)
  }
  else if(postsStatus==='failed'){
    content = <p>{error}</p>;
  }

  return (
    <section>
      <h2>Posts</h2>
      {content  }
    </section>
  );
};

export default PostsList;
