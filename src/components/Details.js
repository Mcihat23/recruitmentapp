import React from "react";
import { Table, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const currentUser = users.filter((user) => user.id === parseInt(id));
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/candidates`;
    navigate(path);
  };

  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Fullname</th>
            <th>Email address</th>
            <th>Phone number</th>
          </tr>
        </thead>
        <tbody>
          {currentUser.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email.toLowerCase()}</td>
              <td>{user.phone}</td>
              <td className="text-center">
                <Button variant="secondary" onClick={() => routeChange()}>
                  Go Back
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Details;
