import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';  // ojear la ruta, la carpeta genera problemas

const Cart = () => {
  const { cart, addToCart, decreaseQuantity, totalPrice } = useContext(CartContext);

  return (
    <Container>
      <h2 className="my-4">Tu Carrito</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          {cart.map((pizza) => (
            <Card key={pizza.id} className="mb-3">
              <Row className="no-gutters">
                <Col md={4}>
                  <Image src={pizza.img} alt={pizza.name} fluid />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>Pizza {pizza.name}</Card.Title>
                    <Card.Text>
                      Precio: ${pizza.price}
                      <br />
                      Cantidad: {pizza.count}
                    </Card.Text>
                    <Button variant="outline-dark" onClick={() => decreaseQuantity(pizza.id)} className="me-2">-</Button>
                    <Button variant="dark" onClick={() => addToCart(pizza)}>+</Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          ))}
          <h3>Total a pagar: ${totalPrice}</h3> {/* Mostrar el total del carrito */}
          <Button variant="dark">Pagar</Button>
        </>
      )}
    </Container>
  );
};

export default Cart;
