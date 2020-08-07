import React from 'react';
import classes from './CreateArticles.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const CreateArticles =() =>{

    return(
<div className={classes.Body}>
<h1>Create An Article</h1>
<Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Auther</Form.Label>
      <Form.Control type="text" placeholder="Auther" required />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Date</Form.Label>
      <Form.Control type="date" placeholder="date" required />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Topic</Form.Label>
    <Form.Control placeholder="Topic Heare" required />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Sub Topic</Form.Label>
    <Form.Control placeholder="Optional" />
  </Form.Group>

  <Form.Row>
  
  <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Picture *Optional</Form.Label>
      <Form.Control type="file"  />
    </Form.Group>
  </Form.Row>
   < Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Article</Form.Label>
    <Form.Control as="textarea" rows="10" placeholder="Type your Article" required />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

</div>

    )
}

export default CreateArticles;