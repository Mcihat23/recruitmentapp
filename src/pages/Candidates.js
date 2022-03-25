import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Table, Button, Form, FormControl } from "react-bootstrap";
import { fetchUsers } from "../actions/userAction";
import { useNavigate } from "react-router-dom";

function Candidates(props) {
  console.log(props);

  useEffect(() => {
    props.fetchUsers();
  }, []);

  let navigate = useNavigate();
  const routeChange = (id) => {
    let path = `/candidates/${id}`;
    navigate(path);
  };

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </Form>
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
          {props.candidatesData.users
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .filter((user) => {
              if (searchTerm === "") {
                return user;
              } else if (
                user.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return user;
              }
            })
            .map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email.toLowerCase()}</td>
                <td>{user.phone}</td>
                <td className="text-center">
                  <Button
                    variant="secondary"
                    onClick={() => routeChange(user.id)}
                  >
                    Detail
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

const mapStateToProps = (candidatesData) => ({
  candidatesData,
});

const mapDispatchToProps = { fetchUsers };

export default connect(mapStateToProps, mapDispatchToProps)(Candidates);
