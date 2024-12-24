import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router'; 

function Item({ item }) {
  return (
    <Card className="item-card" style={{ height: '100%' }}>
      <Card.Img variant="top" src={item.image} alt={item.title} className="card-img-top" />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.category}</Card.Text>
        <Card.Text className="truncate-description">{item.description}</Card.Text>
        <Card.Text>${item.price}</Card.Text>
        <Button variant="primary" as={Link} to={`/item/${item.id}`}>
          Detalles
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Item;



