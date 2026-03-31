import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProfileCard(props) {
    console.log(props)
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image} style={{height:"150px"}} />
        <Card.Body style={{ height: "150px", overflowY: "scroll" }}>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Button variant="primary">{props.category}</Button>
        </Card.Footer>
      </Card>
    </div>
  );
}


export default ProfileCard;

