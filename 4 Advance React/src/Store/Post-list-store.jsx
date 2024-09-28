import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  updateReactions: () => {}, 
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  
  switch (action.type) {
    case "DELETE_POST":
      newPostList = currentPostList.filter(
        (post) => post.id !== action.payload.postId
      );
      break;

    case "ADD_POST":
      newPostList = [action.payload, ...currentPostList];
      break;

    case "UPDATE_REACTIONS":
      newPostList = currentPostList.map((post) =>
        post.id === action.payload.postId
          ? { ...post, reactions: action.payload.reactions }
          : post
      );
      break;

    default:
      break;
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFUALT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: 0,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId: postId,
      },
    });
  };

  // Function to update the number of reactions for a specific post
  const updateReactions = (postId, newReactions) => {
    dispatchPostList({
      type: "UPDATE_REACTIONS",
      payload: {
        postId: postId,
        reactions: newReactions,
      },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
        updateReactions: updateReactions, // Expose the updateReactions function
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFUALT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hey friends I am Going to Mumbai for my vacations hope to enjoy a lot. Peace Out!",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "mumbai", "chilling"],
  },
  {
    id: "2",
    title: "Pass ho gye bhai",
    body: "4 Saal ke masti ke bad bhi ho gye h pass",
    reactions: 15,
    userId: "user-12",
    tags: ["college", "graduating", "btech"],
  },
];

export default PostListProvider;
