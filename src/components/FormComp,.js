import React from "react";
import { Form, Button } from "react-bootstrap";

function FormComp() {
  return (
    <div className="mt-2 mb-3">
      <Form>
        <div className="border-top pl-1 pt-1">
          <h4 className="text-dark">Contact Us</h4>
          <p className="text-dark">Please fill this form in a decent manner</p>
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

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="I accept the Terms & Conditions" />
        </Form.Group>
        <Button
          className="border-bottom"
          variant="primary"
          type="submit"
          onClick={() => {
            alert("Form submitted");
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default FormComp;
