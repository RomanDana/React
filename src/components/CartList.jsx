import { ListGroup } from "react-bootstrap";

function CartList({ items }) {
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <ListGroup>
      {items.map((item, index) => (
        <ListGroup.Item key={index} className="cartItem">
          {item.name} - ${item.price} x {item.quantity} = ${item.quantity*item.price}
          <button className="removeItemBtn" onClick={() => removeFromCart(item.id)}>
            x
          </button>
        </ListGroup.Item>
      ))}
    <ListGroup.Item>
        <strong>Total: ${total.toFixed(2)}</strong>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default CartList;

