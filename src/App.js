import "./App.css";
import { posts } from "./data.js";

function App() {
  return (
    <div className="App">
      <PostContainer />
    </div>
  );
}

function PostContainer() {
  const listPosts = posts.map((post) => <Post key={post.id} post={post} />);
  return <div className="PostContainer">{listPosts}</div>;
}

function Post({ post }) {
  return (
    <div className="Post">
      <h3>{post.title}</h3>
      <h6>{post.poster}</h6>
      <p>{post.breadtext}</p>
    </div>
  );
}

export default App;
