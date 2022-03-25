import React from "react";
import { Form, Button } from "react-bootstrap";

function FormComp() {
  return (
    <div className="mt-1">
      <Form>
        <div className="bg-dark pl-1 pt-1">
          <h4 className="text-light">Contact Us</h4>
          <p className="text-light">Please fill this form in a decent manner</p>
        </div>

        <Form.Group className="mb-3" controlId="formBasicFullname">
          <Form.Label>Full name</Form.Label>
          <Form.Control type="text" placeholder="Enter your full name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3 form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: "100px" }}
          />
          <label htmlFor="floatingTextarea2">Comments</label>
        </Form.Group>

        {/* <div class="form-floating">
          
        </div> */}

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default FormComp;
