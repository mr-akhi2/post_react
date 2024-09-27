import { useContext, useRef } from "react";
import { PostList } from "./store/postList";

const Post = () => {
  const { addpost } = useContext(PostList);
  const userIdE = useRef();
  const userTitleE = useRef();
  const userBodyE = useRef();
  const userReactionE = useRef();
  const userTagsE = useRef();
  const HandleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdE.current.value;
    const postTitle = userTitleE.current.value;
    const PostBody = userBodyE.current.value;
    const reactions = userReactionE.current.value;
    const Tags = userTagsE.current.value.split(/(\s+)/);
    userIdE.current.value = "";
    userTitleE.current.value = "";
    userBodyE.current.value = "";
    userReactionE.current.value = "";
    userTagsE.current.value = "";
    addpost(userId, postTitle, PostBody, reactions, Tags);
  };

  return (
    <form id="form" onSubmit={HandleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Title id
        </label>
        <input
          type="text"
          ref={userIdE}
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Title
        </label>
        <input
          type="text"
          ref={userTitleE}
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" class="form-label">
          body
        </label>

        <input
          type="text"
          ref={userBodyE}
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" class="form-label">
          number of Reactions
        </label>
        <input
          type="text"
          ref={userReactionE}
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" class="form-label">
          tags
        </label>
        <input
          type="text"
          ref={userTagsE}
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default Post;
