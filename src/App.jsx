import './App.css'
import { Client, Databases, ID } from "appwrite";
import NavigationBar from './components/navigation/NavigationBar';
import BlogForm from './components/blog-form/BlogForm';
import { useContext, useState } from 'react';
import BlogContext from '../src/context/blogContext';
import BlogCard from './components/blog-card/BlogCard';

function App() {

  const { blogs, setBlogs, title, setTitle, content, setContent, author, setAuthor, likeCount, setLikeCount, slug, setSlug } = useContext(BlogContext);

  const [backendBlog, setBackendBlog] = useState([]);

  const client = new Client();

  client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66ff7da10001ffb0bf0f');

  const databases = new Databases(client);

  const promise = databases.createDocument(
    '66ffb274002cfadf57f1',
    '66ffb27e001c716d05de',
    ID.unique(),
    ...blogs
  );

  promise.then(function (response) {
    console.log(response);
    setBackendBlog(response.document);
    // console.log(response.documents);

  }, function (error) {
    console.log(error);
  });


  return (
    <>
      <NavigationBar />
      <BlogForm />
      {
        backendBlog?.map((blog, index) => <BlogCard key={index} {...blog} />)
      }
    </>
  )
}

export default App
