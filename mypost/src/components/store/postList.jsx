// import { type } from "@testing-library/user-event/dist/type";
import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addpost: () => {},
  addInitialposts: () => {},
  deletePost: () => {},
});

const PostListReducer = (currentPost, action) => {
  let newPostList = currentPost;
  if (action.type === "DELETE_POST") {
    newPostList = currentPost.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POST") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPost];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPost] = useReducer(PostListReducer, []);

  const addpost = (userId, postTitle, PostBody, reactions, Tags) => {
    dispatchPost({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: PostBody,
        reaction: reactions,
        userId: userId,
        tags: Tags,
      },
    });
  };
  // this is for fetch Api

  const addInitialposts = (posts) => {
    dispatchPost({
      type: "ADD_INITIAL_POST",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPost({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{ postList, addpost, addInitialposts, deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};
// const DEFAULT_POST_LIST = [
//   {
//     id: 1,
//     title: "AKhilesh kushwaha",
//     body: "enjoy a lot",
//     reaction: 12,
//     userId: "user9",
//     tags: ["vocation", "mumbai", "Lucknow"],
//   },
//   {
//     id: 2,
//     title: "AKhilesh maurya",
//     body: "enjoy a lot bacouse of like this.",
//     reaction: 120,
//     userId: "user10",
//     tags: ["hmm", "hhmm22"],
//   },
//   {
//     id: 3,
//     title: "AKhilesh kumar kushwaha",
//     body: "love it.",
//     reaction: 1200,
//     userId: "user11",
//     tags: ["hmm", "sjg"],
//   },
// ];
export default PostListProvider;
