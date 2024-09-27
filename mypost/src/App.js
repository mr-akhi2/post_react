import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/navbar";
import Sidbar from "./components/sidebar";
import Total_Items from "./components/Totle_item";
import Footer from "./components/footer";
import Post from "./components/post";
import { useState } from "react";
import PostListProvider from "./components/store/postList";

function App() {
  const [selected, setSelected] = useState("Home");
  return (
    <PostListProvider>
      <div id="Container">
        <Sidbar selected={selected} setSelected={setSelected}></Sidbar>
        <div className="content">
          <Navbar></Navbar>

          {selected === "Home" ? <Total_Items /> : <Post></Post>}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
