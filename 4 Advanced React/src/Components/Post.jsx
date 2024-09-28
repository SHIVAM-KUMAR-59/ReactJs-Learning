import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaRegThumbsUp } from "react-icons/fa";
import { PostList } from "../Store/Post-list-store";

const Post = ({ post }) => {
  const { deletePost, updateReactions } = useContext(PostList); // Destructure updateReactions from the context

  // Function to handle incrementing reactions
  const handleLike = () => {
    const newReactionCount = post.reactions + 1; // Increment the reactions by 1
    updateReactions(post.id, newReactionCount); // Call updateReactions with the new count
  };

  return (
    <div className="card post-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)} // Call deletePost when the delete icon is clicked
          >
            <AiFillDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {/* Render each tag as a badge */}
        {post.tags.map((tag) => (
          <span key={tag} className="badge hashtag text-bg-primary">
            #{tag}
          </span>
        ))}
        <div className="like" onClick={handleLike}> {/* Call handleLike when the thumbs-up icon is clicked */}
          <FaRegThumbsUp />
          <span>{post.reactions}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
