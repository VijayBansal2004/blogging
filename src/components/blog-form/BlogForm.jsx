import React, { useContext, useEffect, useState } from "react";
import BlogContext from "../../context/blogContext";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const BlogForm = () => {
    const { blogs, setBlogs } = useContext(BlogContext);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");

    const onSubmitHandler = (
        e,
        blogTitle,
        blogContent,
        blogAuthor,
        // blogSlug = slugGenerator(blogTitle)
    ) => {
        e.preventDefault();

        if (
            blogTitle.length !== 0 &&
            blogContent.length !== 0 &&
            blogAuthor.length !== 0
        ) {
            setBlogs([
                ...blogs,
                {
                    title: blogTitle,
                    content: blogContent,
                    author: blogAuthor,
                    likeCount: 1,
                    slug: "slug",
                },
            ]);
        }
        cleanUp();
    };

    // const slugGenerator = (blogTitle) => {
    //     const slicedTitle = blogTitle.toString().split(" ");
    //     if (blogTitle.length === 1) {
    //         return blogTitle;
    //     } else {
    //         const blogSlug = slicedTitle.join('-');
    //         return blogSlug;
    //     }
    // };

    const cleanUp = () => {
        setTitle("");
        setContent("");
        setAuthor("");
    };

    // useEffect(() => {
    //     console.log("Blogs updated:", blogs);
    // }, [blogs]);

    return (
        <>
            <Form
                className="w-50 m-auto"
                onSubmit={(e) => onSubmitHandler(e, title, content, author)}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Add Blog Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder=""
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Add Author</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder=""
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Add Blog Content</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="success" type="submit">
                    Publish
                </Button>
            </Form>
        </>
    );
};

export default BlogForm;
