import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList as PostListData } from "../context/post-list-store";

function Post({ post }) {
  const { deletePost } = useContext(PostListData);

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>

        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletePost(post.id)}
        >
          <MdDelete />
        </span>

        <p className="card-text">{post.body}</p>
        {post.tags.map((tag, index) => (
          <span
            key={index}
            className="badge text-bg-primary tag-badge"
          >{`#${tag}`}</span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          This post has been reacted by {post.reactions} people
        </div>
      </div>
    </div>
  );
}

export default Post;
