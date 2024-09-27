import { useContext } from "react";
import { PostList } from "./store/postList";

const Items = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div class="card crd" style={{ width: "30rem" }}>
      <div class="card-body">
        <h5 class="card-title">
          {post.title}{" "}
          <span
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <span>*</span>
            <span class="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p class="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span className="badge text-bg-primary hashtag">{tag}</span>
        ))}
        <div class="alert alert-success alerts" role="alert">
          This post is reacted by {post.reaction} people.
        </div>
      </div>
    </div>
  );
};
export default Items;
