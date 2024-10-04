import React, { useState } from 'react'
import BlogContext from './blogContext'

export const BlogContextProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]);

    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [author, setAuthor] = useState();
    const [likeCount, setLikeCount] = useState(0);
    const [slug, setSlug] = useState();

    return (
        <BlogContext.Provider value={{
            blogs, setBlogs, title, setTitle, content, setContent, author, setAuthor, likeCount, setLikeCount, slug, setSlug
        }}>
            {children}
        </BlogContext.Provider>
    )
}