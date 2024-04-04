import { useEffect, useState } from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";
import Modal from "./Modal";

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);
  const [isfetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPosts(resData.posts);
    }
    fetchPosts();
  }, []);

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPost) => [postData, ...existingPost]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {!isfetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.author} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {!isfetching && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>Nothing to show</h2>
          <p>Start adding new post..</p>
        </div>
      )}
      {isfetching && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading...</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
