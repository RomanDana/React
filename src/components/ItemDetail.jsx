import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCount from './ItemCount';

function ItemDetail({ item }) {
  if (!item) {
    return <p>No se encontró información sobre el producto.</p>;
  }

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Row className="justify-content-center">
        <Col md={6}>
        <Card style={{ width: '50%', backgroundColor: '#f8f9fa', border: '1px solid #ddd' }}>
            <Card.Img variant="top" src={item.image} alt={item.title}
            style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block', marginLeft: 'auto', marginRight: 'auto',}}/>
        <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text style={{ fontStyle: 'italic', color: '#6c757d' }}>
            {item.description}
            </Card.Text>
            <Card.Text>
            <strong>Categoría:</strong> {item.category}
            </Card.Text>
            <Card.Text>
            <strong>Precio:</strong> ${item.price}
            </Card.Text>
        </Card.Body>
        <ItemCount />
        </Card>

        </Col>
      </Row>
    </Container>
  );
}

export default ItemDetail;
