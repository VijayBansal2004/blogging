import React from 'react'
import Blog from '../blog/Blog'

const Blogs = ({ backendBlog }) => {
    return (
        <div className='cards d-flex flex-wrap justify-content-center gap-3'>
            {
                backendBlog?.map((blog, index) => <Blog key={index} {...blog} />)
            }
        </div>
    )
}

export default Blogs
