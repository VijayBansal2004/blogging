import "./App.css";
import { Client, Databases, ID } from "appwrite";
import NavigationBar from "./components/navigation/NavigationBar";
import BlogForm from "./components/blog-form/BlogForm";
import { useContext, useEffect, useState } from "react";
import BlogContext from "../src/context/blogContext";
import Blogs from "./components/blogs/Blogs";

function App() {
  const {
    blogs,
    // setBlogs,
    // title,
    // setTitle,
    // content,
    // setContent,
    // author,
    // setAuthor,
    // likeCount,
    // setLikeCount,
    // slug,
    // setSlug,
  } = useContext(BlogContext);

  const [backendBlog, setBackendBlog] = useState([]);

  const client = new Client();

  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("66ff7da10001ffb0bf0f");

  const databases = new Databases(client);

  useEffect(() => {
    const creatingDocument = databases.createDocument(
      "66ffb274002cfadf57f1",
      "66ffb27e001c716d05de",
      ID.unique(),
      ...blogs
    );

    creatingDocument.then(
      function (response) {
        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    );
  }, [blogs]);

  useEffect(() => {
    let gettingDocument = databases.listDocuments(
      "66ffb274002cfadf57f1",
      "66ffb27e001c716d05de",
      []
    );

    gettingDocument.then(
      function (response) {
        setBackendBlog(response.documents);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   setCount(count + 1);
  // }, []);

  return (
    <>
      {/* <p>{count}</p> */}
      <NavigationBar />
      <BlogForm />
      <Blogs backendBlog={backendBlog} />
    </>
  );
}

export default App;
