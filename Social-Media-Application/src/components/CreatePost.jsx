import React, { useContext, useRef } from "react";
import { PostList as PostListData } from "../context/post-list-store";

function CreatePost() {
  const { addPost } = useContext(PostListData);

  const userIDElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (e) => {
    e.preventDefault;
    const userId = userIDElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIDElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";

    addPost(userId, title, body, reactions, tags);
  };

  return (
    <div className="form-container" onSubmit={handleSubmit}>
      <form>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your ID
          </label>
          <input
            type="text"
            ref={userIDElement}
            className="form-control"
            id="userId"
            placeholder="Who are you?"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            ref={titleElement}
            className="form-control"
            id="title"
            placeholder="Today's update!"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            ref={bodyElement}
            className="form-control"
            id="body"
            placeholder="Tell me more.."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Reactions
          </label>
          <input
            type="number"
            ref={reactionsElement}
            className="form-control"
            id="reactions"
            placeholder="O_o"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Your HashTags
          </label>
          <input
            type="text"
            ref={tagsElement}
            className="form-control"
            id="tags"
            placeholder="Please enter tag using space"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
