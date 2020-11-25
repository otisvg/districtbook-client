import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const { Component } = require("react");


class PostForm extends Component {
  render() {
    return <Form className="PostForm">
    <Form.Group controlId="exampleForm.ControlTextarea1">
      <Form.Label></Form.Label>
      <Form.Control as="textarea" width={6} rows={3} placeholder="What's on your mind?"/>
      <Button className="PostForm-Button" variant="primary" type="submit">
        Submit
      </Button>
    </Form.Group>

  </Form>
  }
}
export default PostForm;