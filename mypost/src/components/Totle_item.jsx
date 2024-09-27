import { useContext, useEffect, useState } from "react";
import Items from "./items";
import { PostList as PostListData } from "./store/postList";
import Welcome from "./welcome.jsx";
import Loader from "./Loader.jsx";

const Total_Items = () => {
  const { postList, addInitialposts } = useContext(PostListData);
  const [Fetching, setFetching] = useState(false);

  // useEffect is use for when the  hooks ar not dependent  or not dependent  then it is used.
  useEffect(() => {
    const Controller = new AbortController();
    const signal = Controller.signal;
    setFetching(true);
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialposts(data.posts);
        setFetching(false);
      });
    return () => {
      console.log("change the page");
      // Controller.abort();
    };
  }, []);

  return (
    <>
      {Fetching && <Loader />}
      {!Fetching && postList.length === 0 && <Welcome />}
      {!Fetching && postList.map((post) => <Items key={post.id} post={post} />)}
    </>
  );
};
export default Total_Items;

// this controller is used for advanced level  and it is used for when the home component is fetch the data from api then the create post is not loaded and when the click on the createpost  then the fetch is not working
