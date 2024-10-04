import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BlogCard({ title, content, author, likeCount }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {content}
                </Card.Text>
                <Card.Text>
                    {author}
                </Card.Text>
                <Button variant="primary">Read More &lt;</Button>
            </Card.Body>
        </Card>
    );
}

export default BlogCard;