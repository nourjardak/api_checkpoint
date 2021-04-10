
import React from "react";
import { Button, Card } from "react-bootstrap";

const UserCard = ({user}) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>{user.address.city}</Card.Text>
          <Card.Text>{user.email}</Card.Text>
          <Button variant="primary">see profile</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;
