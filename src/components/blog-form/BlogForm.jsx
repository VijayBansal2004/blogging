import React, { useContext } from "react";
import BlogContext from "../../context/blogContext";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const BlogForm = () => {
    const {
        blogs,
        setBlogs,
        title,
        setTitle,
        content,
        setContent,
        author,
        setAuthor,
        likeCount,
        setLikeCount,
        slug,
        setSlug,
    } = useContext(BlogContext);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (title.length !== 0 || content.length !== 0 || author.length !== 0) {
            setBlogs([...blogs, { title, content, author, likeCount, slug: slugGenerator(title) }]);
        }

        setTitle("");
        setContent("");
        setAuthor("");
        setSlug("");
    };

    const slugGenerator = (blogTitle) => {
        const slicedTitle = blogTitle.toString().split(" ");
        const blogSlug = slicedTitle.join('-');
        return blogSlug;
    };

    return (
        <>
            <Form className="w-50 m-auto" onSubmit={(e) => onSubmitHandler(e)}>
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
