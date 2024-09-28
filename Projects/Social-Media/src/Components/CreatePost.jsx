import { useContext, useRef } from "react";
import { PostList } from "../Store/Post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userId = useRef();
  const postTitle = useRef();
  const postBody = useRef();
  const tags = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = userId.current.value;
    const title = postTitle.current.value;
    const body = postBody.current.value;
    const tagsArray = tags.current.value.split(' ');
    addPost(user, title, body, tagsArray);
    userId.current.value = "";
    postTitle.current.value = "";
    postBody.current.value = "";
    tags.current.value = "";
  };
  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label forname="userId" className="form-label">
          User Id
        </label>
        <input
          type="text"
          ref={userId}
          className="form-control"
          id="userId"
          placeholder="Enter your User Id"
        />
      </div>

      <div className="mb-3">
        <label forname="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitle}
          className="form-control"
          id="title"
          placeholder="How are you feeling today?"
        />
      </div>

      <div className="mb-3">
        <label forname="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={postBody}
          rows="4"
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>

      <div className="mb-3">
        <label forname="tags" className="form-label">
          Enter relevant tags
        </label>
        <input
          type="text"
          ref={tags}
          className="form-control"
          id="tags"
          placeholder="Please Enter tags using Space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
