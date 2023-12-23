import "./App.css";
import { posts } from "./data.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      <PostContainer posts={posts} />
    </div>
  );
}

function PostContainer({ posts }) {
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

function SearchBar() {
  return (
    <form className="SearchBar">
      <input type="text" placeholder="Search for posts..." />
      <FilterButtons />
    </form>
  );
}

function FilterButtons() {
  return (
    <div className="FilterButtons">
      <Button text="filter" />
      <Button text="filter" />
      <Button text="filter" />
    </div>
  );
}

function NavBar() {
  return (
    <div className="NavBar">
      <Button text="Log in" />
      <Button text="Sign up" />
      <HomeButton />
    </div>
  );
}

function HomeButton() {
  return <button className="HomeButton">Home</button>;
}

function Button({ text }) {
  return (
    <div>
      <button>{text}</button>
    </div>
  );
}

export default App;
