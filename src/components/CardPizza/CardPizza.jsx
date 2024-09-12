import React from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';

function formatPrice(price) {
  return new Intl.NumberFormat('es-CL').format(price); // Formatear el precio según la región
}

const CardPizza = ({ name, price, ingredients, img, pizza, addToCart }) => {
  return (
    <Card style={{ width: '17rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Header>Pizza {name}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Ingredientes:</ListGroup.Item>
        <ListGroup.Item>{ingredients.join(', ')}</ListGroup.Item>
      </ListGroup>
      <Card.Text>Precio: ${formatPrice(price)}</Card.Text>
      <Card.Body>
        <Button variant="outline-dark" className="me-4">Ver Más</Button>
        <Button variant="dark" onClick={() => addToCart(pizza)}>Añadir</Button>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
